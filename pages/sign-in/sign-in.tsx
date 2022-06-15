import Layout from "../../components/layout";
import styled from 'styled-components';
import { HeadingH2, TextInput, PrimaryButton, ErrorP } from '../../styles/main';
import { useForm, Controller } from 'react-hook-form';
import LoginNavigation from '../../components/login-navigation'
import axios from 'axios';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { setToken } from '../../store/root-slice';
import { useAppDispatch } from '../../hooks/app-dispatch';

interface FormValues {
  TextInput: string;
  email: string;
  password: string;
};

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>();
  const [error, setError] = useState(null);

  const dispatch = useAppDispatch();


  const onSubmit = async (data: FormValues) => {
    try {
      dispatch(setToken({}));
      
      setIsLoading(true);
      await axios.post('https://gscore-back.herokuapp.com/api/users/sign-in',
        {
          'email': `${data.email}`,
          'password': `${data.password}`,
        })
        .then(response => {
          console.log(response);
        });
      setIsLoading(false);
      ;
    } catch (e: any) {
      setIsLoading(false);
      setError(e.response?.data?.message || e.message);
    }
  };

  return (
    <Layout title="Sign in">
      <Wrapper>
        <LoginNavigation currentTab={2} />
        <HeadingH2>Log in</HeadingH2>

        {error &&
          <MainError>{error}</MainError>
        }

        <form onSubmit={handleSubmit(onSubmit)}>
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
            rules={{
              required: 'Required field.',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email.',
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <ErrorP>{message}</ErrorP>}
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
            rules={{ required: 'Required field', minLength: { value: 6, message: 'Min len 6' } }}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <ErrorP>{message}</ErrorP>}
          />
          <PrimaryButton type='submit' $loading={isLoading}>Log in</PrimaryButton>
        </form>

      </Wrapper>
    </Layout>
  )
};

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
  ${TextInput}:not(:first-child) {
    margin-top: 24px;
  }
  ${PrimaryButton} {
    margin: 48px 0;
  }
`;

const MainError = styled(ErrorP)`
  margin-bottom: 20px;
`;