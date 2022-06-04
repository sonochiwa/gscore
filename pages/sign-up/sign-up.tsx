import Layout from "../../components/layout";
import styled from "styled-components";
import { HeadingH2, TextInput, PrimaryButton, Typography } from "../../styles/main";
import { useForm, Controller } from "react-hook-form";
import LoginNavigation from '../../components/login-navigation'
import axios from 'axios';
import { object, string, number, date, InferType } from 'yup';
import Link from "next/link";

type FormValues = {
  TextInput: string;
  username: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    axios.post('https://gscore-back.herokuapp.com/api/users/sign-up',
      {
        "username": `${data.username}`,
        "email": `${data.email}`,
        "password": `${data.password}`
      }
    ).then(response => { console.log(response) });
  }

  return (
    <Layout title="Sign up">
      <Wrapper>
        <LoginNavigation currentTab={1} />
        <HeadingH2>Create account</HeadingH2>
        <InputsDescription>You need to enter your name and email.
          We will send you a temporary password by email</InputsDescription>

        <form onSubmit={handleSubmit(onSubmit)}>
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
          // rules={{ minLength: 10, required: "Min username len - 10." }}
          />

          <Controller
            render={({ field: { onChange, onBlur, ref } }) => (
              <TextInput
                placeholder='Email'
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
              />
            )}
            name="email"
            control={control}
          />

          <Controller
            render={({ field: { onChange, onBlur, ref } }) => (
              <TextInput
                placeholder='Password'
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                type='password'
              />
            )}
            name="password"
            control={control}
          />
          <PrimaryButton type='submit'>Send password</PrimaryButton>
        </form>

        <NextStep>
          <Typography color='var(--color_100)'>Have an account?</Typography>
          <Link href='/sign-in'><a><Typography>Go to the next step</Typography></a></Link>
        </NextStep>
      </Wrapper>
    </Layout>
  )
};

const InputsDescription = styled.div`
  width: 640px;
  font-size: 14px;
  font-family: 'Thicccboi';
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
  ${TextInput} + ${TextInput} {
    margin-top: 24px;
  }
  ${TextInput} + ${PrimaryButton} {
    margin: 48px 0;
  }
`;