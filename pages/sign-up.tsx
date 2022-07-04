import Layout from "../components/layout";
import styled from "styled-components";
import { HeadingH2, Typography, ErrorText, Subtitle, Container, device } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import LoginTab from "../ui/LoginTab";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setAccessToken } from '../store/root-slice';
import { useAppDispatch } from '../hooks/app-dispatch';
import Button from "../ui/Button";
import Input from "../ui/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "./../services";

interface FormValues {
  username: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function SignUpPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onChange' });
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      setIsActive(true);
      await api.auth.signUp({
        username: data.username,
        email: data.email,
        password: data.password
      })
        .then((response) => {
          dispatch(setAccessToken({
            token: response.data.token,
            username: response.data.username,
          }));
        });
      router.push("/checkout");
    } catch (error: any) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setIsActive(false);
    }
  };

  return (
    <Layout title="Sign up">
      <Container>
        <Wrapper>
          <LoginTab currentTab={1} />
          <HeadingH2>Create account</HeadingH2>
          <Subtitle>
            You need to enter your name and email.
            We will send you a temporary password by email
          </Subtitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {error && <ErrorText>{error}</ErrorText>}

            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, onBlur }, fieldState }) => (
                <Input
                  name="username"
                  placeholder="Username"
                  onChange={onChange}
                  onBlur={onBlur}
                  errorMessage={errors}
                  fieldState={fieldState}
                />
              )}
            />

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
            >Send password</NewButton>

          </Form>
          <NextStep>
            <Typography color="var(--color_100)">Have an account?</Typography>
            <Link href="/sign-in"><a><Typography>Go to the next step</Typography></a></Link>
          </NextStep>
        </Wrapper>
      </Container>
    </Layout>
  )
};

const Form = styled.form`
  display: grid;
  flex-direction: column;
  gap: 24px;
`;

const NewButton = styled(Button)`
  @media ${device.mobile} {
    width: 100%;
  }
`;

const NextStep = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 48px;
  ${Typography} {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
  }
  & :last-child {
      cursor: pointer;
      color: var(--primary_1);
    }
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