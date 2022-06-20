import Layout from "../components/layout";
import styled from "styled-components";
import { Container, HeadingH2, HeadingH3, PrimaryButton, TextInput, ErrorP, InputWrapper, MainError } from "../styles/main";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axiosInstance from "../services/axios-instance";
import { useAppDispatch, useAppSelector } from "../hooks/app-dispatch";
import { useEffect, useState } from "react";
import SettingsNavigation from '../components/settings-navigation';

interface FormValues {
  textinput: string;
  currentpassword: string;
  newpassword: string;
};

export default function SettingsPage() {
  const token = useAppSelector(state => state.root.token);
  const { handleSubmit, control, formState: { errors }, reset, register } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      if (data.currentpassword && data.newpassword) {
        await axiosInstance(token).patch('/users/update-password', {
          currentPassword: data.currentpassword,
          newPassword: data.newpassword,
        });
        setError(null);
        setIsLoading(false);
        alert('password updated');
      }
    } catch (e: any) {
      setError(e.response?.data?.message || e.message);
      setIsLoading(false);
    }
  };

  return (
    <Layout title='Settings'>
      <Container>
        <HeadingH2 left>Settings</HeadingH2>
        <SettingsNavigation currentTab={2} />
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
          <WrapperInner>
            <HeadingH3>Change password</HeadingH3>

            {error &&
              <MainError>{error}</MainError>
            }

            <InputWrapper>
              <Controller
                render={({ field: { onChange, onBlur, ref } }) => (
                  <TextInput
                    placeholder='Current Password'
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
                name="currentpassword"
                control={control}
                rules={{
                  required: 'Required field',
                  minLength: {
                    value: 6,
                    message: 'Min len 6'
                  },
                }}
              />
              <ErrorMessage
                errors={errors}
                name="currentpassword"
                render={({ message }) => <ErrorP>{message}</ErrorP>}
              />
            </InputWrapper>

            <InputWrapper>
              <Controller
                render={({ field: { onChange, onBlur, ref } }) => (
                  <TextInput
                    placeholder='New Password'
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
                name="newpassword"
                control={control}
                rules={{
                  required: 'Required field',
                  minLength: {
                    value: 6,
                    message: 'Min len 6'
                  },
                }}
              />
              <ErrorMessage
                errors={errors}
                name="newpassword"
                render={({ message }) => <ErrorP>{message}</ErrorP>}
              />
            </InputWrapper>
          </WrapperInner>
          <PrimaryButton type='submit' $loading={isLoading}>Save all changes</PrimaryButton>
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