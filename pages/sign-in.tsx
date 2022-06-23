import Layout from "../components/layout";
import styled from 'styled-components';
import { HeadingH2, ErrorText } from '../styles/main';
import { useForm, Controller } from 'react-hook-form';
import LoginNavigation from '../components/login-navigation'
import { useState } from 'react';
import { setAccessToken } from '../store/root-slice';
import { useAppDispatch } from '../hooks/app-dispatch';
import { useRouter } from "next/router";
import api from "./../services";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../ui/Input";
import Button from "../ui/Button";

interface FormValues {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function SignInPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      setError(null);
      setIsActive(true);
      await api.auth.signIn({
        email: data.email,
        password: data.password
      })
        .then(response => {
          console.log(response)
          dispatch(setAccessToken({
            token: response.data.token,
            username: response.data.user.username,
          }));
        });
      router.push('/checkout');
    } catch (e: any) {
      setError(e.response?.data?.message || e.message);
    } finally {
      setIsActive(false);
    }
  };

  return (
    <Layout title="Sign in">
      <Wrapper>
        <LoginNavigation currentTab={2} />
        <HeadingH2>Log in</HeadingH2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {error && <ErrorText>{error}</ErrorText>}

          <Controller
            render={({ field: { onChange, onBlur }, fieldState }) => (
              <Input
                name="email"
                placeholder="Email"
                onChange={onChange}
                onBlur={onBlur}
                errorMessage={errors}
                isValid={fieldState}
              />
            )}
            name="email"
            control={control}
          />

          <Controller
            render={({ field: { onChange, onBlur }, fieldState }) => (
              <Input
                name="password"
                placeholder="Password"
                onChange={onChange}
                onBlur={onBlur}
                type="password"
                errorMessage={errors}
                isValid={fieldState}
              />
            )}
            name="password"
            control={control}
          />

          <Button
            theme="primary"
            isLoading={isActive}
            disabled={isActive}
            onClick={() => onSubmit}
          >Log in</Button>

        </Form>
      </Wrapper>
    </Layout>
  )
};

const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 24px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
  ${HeadingH2} {
    text-align: left;
    margin-bottom: 16px;
  }
`;