import Layout from "../components/layout";
import styled from 'styled-components';
import { HeadingH2, ErrorText, device, Container } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import LoginTab from "../ui/LoginTab";
import { useState } from "react";
import { setAccessToken } from "../store/root-slice";
import { useAppDispatch } from "../hooks/app-dispatch";
import { useRouter } from "next/router";
import api from "./../services";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { IUser } from "../services/types";

interface FormValues {
  email: string;
  password: string;
  token: string;
  user: IUser;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function SignInPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onChange' });
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (credentials: FormValues) => {
    setError(null);
    setIsActive(true);

    try {
      const { data } = await api.auth.signIn(credentials);

      dispatch(setAccessToken({
        token: data.token,
        username: data.user.username,
      }));
      router.push('/checkout');
    } catch (error: any) {
      setError(error.response?.data?.message || error.message);
    };

    setIsActive(false);
  };

  return (
    <Layout title="Sign in">
      <Container>
        <Wrapper>
          <LoginTab currentTab={2} />
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
                  fieldState={fieldState}
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
                  errorMessage={errors}
                  fieldState={fieldState}
                  type="password"
                />
              )}
              name="password"
              control={control}
            />

            <NewButton
              theme="primary"
              isLoading={isActive}
              disabled={isActive}
              onClick={() => onSubmit}
            >Log in</NewButton>

          </Form>
        </Wrapper>
      </Container>
    </Layout>
  )
};

const NewButton = styled(Button)`
  @media ${device.mobile} {
    width: 100%;
  }
`;

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