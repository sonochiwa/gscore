import Layout from "../components/layout";
import styled from "styled-components";
import { Container, HeadingH2, HeadingH3, PrimaryButton, TextInput, ErrorP, InputWrapper } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axiosInstance from "../services/axios-instance";
import { useAppDispatch, useAppSelector } from "../hooks/app-dispatch";
import { setEmail, setUsername } from "../store/root-slice";
import { useState } from "react";
import SettingsNavigation from '../components/settings-navigation';

interface FormValues {
  textinput: string;
  username: string;
  email: string;
};

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.root.token);
  const username = useAppSelector(state => state.root.username);
  const email = useAppSelector(state => state.root.email);
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (data.username) {
      dispatch(setUsername(data.username));
      axiosInstance(token).patch('/users', {
        username: data.username,
      })
    }
    if (data.email) {
      dispatch(setEmail(data.email));
      axiosInstance(token).patch('/users', {
        email: data.email,
      })
    }
  };

  return (
    <Layout title='Settings'>
      <Container>
        <HeadingH2 left>Settings</HeadingH2>
        <SettingsNavigation currentTab={1} />
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
          <WrapperInner>
            <HeadingH3>Presonal info</HeadingH3>
            <InputWrapper>
              <Controller
                render={({ field: { onChange, onBlur, ref } }) => (
                  <TextInput
                    placeholder='Username'
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    defaultValue={username}
                  />
                )}
                name="username"
                control={control}
                rules={{
                  required: false,
                  minLength: {
                    value: 6,
                    message: 'Min len 6'
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
                    placeholder='Email'
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    defaultValue={email}
                  />
                )}
                name="email"
                control={control}
                rules={{
                  required: false,
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
            </InputWrapper>
          </WrapperInner>
          <PrimaryButton type='submit'>Save all changes</PrimaryButton>
        </Wrapper>
      </Container>
    </Layout>
  )
};

const Wrapper = styled.form`
    ${TextInput} {
    max-width: 512px;
    width: 100%;
  }
`;

const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 512px;
  margin-bottom: 48px;
`;