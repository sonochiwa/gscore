import Layout from "../components/layout";
import styled from "styled-components";
import { HeadingH2, TextInput, PrimaryButton, Typography, ErrorP, InputWrapper, MainError } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import LoginNavigation from '../components/login-navigation'
import axios from 'axios';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setAccessToken } from '../store/root-slice';
import { useAppDispatch } from '../hooks/app-dispatch';

interface FormValues {
  textInput: string;
  username: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      await axios.post("https://gscore-back.herokuapp.com/api/users/sign-up",
        {
          username: data.username,
          email: data.email,
          password: data.password
        })
        .then((response) => {
          dispatch(setAccessToken({
            token: response.data.token,
            username: response.data.username,
            email: response.data.email,
          }));
        });
      router.push("/checkout");
    } catch (e: any) {
      setError(e.response?.data?.message || e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Sign up">
      <Wrapper>
        <LoginNavigation currentTab={1} />
        <HeadingH2>Create account</HeadingH2>
        <Subtitle>
          You need to enter your name and email.
          We will send you a temporary password by email
        </Subtitle>

        {error &&
          <MainError>{error}</MainError>
        }

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Controller
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  placeholder='Username'
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                />
              )}
              name="username"
              control={control}
              rules={{
                required: "Required field",
                minLength: {
                  value: 6,
                  message: "Min len 6"
                },
              }}
            />
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => <ErrorP>{message}</ErrorP>}
            />
          </InputWrapper>


          <InputWrapper>
            <Controller
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  placeholder="Email"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                />
              )}
              name="email"
              control={control}
              rules={{
                required: "Required field.",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email.",
                },
              }}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <ErrorP>{message}</ErrorP>}
            />
          </InputWrapper>

          <InputWrapper>
            <Controller
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  placeholder="Password"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  type="password"
                />
              )}
              name="password"
              control={control}
              rules={{ required: "Required field", minLength: { value: 6, message: "Min len 6" } }}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <ErrorP>{message}</ErrorP>}
            />
          </InputWrapper>


          <PrimaryButton type="submit" $loading={isLoading}>Send password</PrimaryButton>
        </form>

        <NextStep>
          <Typography color="var(--color_100)">Have an account?</Typography>
          <Link href="/sign-in"><a><Typography>Go to the next step</Typography></a></Link>
        </NextStep>
      </Wrapper>
    </Layout>
  )
};

const Subtitle = styled.div`
  font-size: 14px;
  font-family: "Thicccboi";
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

const NextStep = styled.div`
  display: flex;
  gap: 8px;
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
  ${PrimaryButton} {
    width: 200px;
  }
  ${PrimaryButton} {
    margin: 48px 0;
  }
`;