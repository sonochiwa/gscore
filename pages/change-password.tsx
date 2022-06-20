import Layout from "../components/layout";
import styled from "styled-components";
import { Container, HeadingH2, HeadingH3, PrimaryButton, TextInput, ErrorP, InputWrapper, MainError } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axiosInstance from "../services/axios-instance";
import { useAppSelector } from "../hooks/app-dispatch";
import { useState } from "react";
import SettingsNavigation from "../components/settings-navigation";

interface FormValues {
  textInput: string;
  currentPassword: string;
  newPassword: string;
};

export default function SettingsPage() {
  const token = useAppSelector(state => state.root.token);
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      if (data.currentPassword && data.newPassword) {
        await axiosInstance(token).patch("/users/update-password", {
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
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
                    placeholder="Current Password"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
                name="currentPassword"
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
                name="currentPassword"
                render={({ message }) => <ErrorP>{message}</ErrorP>}
              />
            </InputWrapper>

            <InputWrapper>
              <Controller
                render={({ field: { onChange, onBlur, ref } }) => (
                  <TextInput
                    placeholder="New Password"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
                name="newPassword"
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
                name="newPassword"
                render={({ message }) => <ErrorP>{message}</ErrorP>}
              />
            </InputWrapper>
          </WrapperInner>
          <PrimaryButton type="submit" $loading={isLoading}>Save all changes</PrimaryButton>
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