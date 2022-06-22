import Layout from "../components/layout";
import styled from "styled-components";
import { Container, ErrorText, HeadingH2, HeadingH3 } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import SettingsNavigation from "../components/settings-navigation";
import api from "../services";
import Button from "../ui/Button";
import Input from "../ui/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  currentPassword: string;
  newPassword: string;
};

const schema = yup.object().shape({
  currentPassword: yup.string().min(6).required(),
  newPassword: yup.string().min(6).required()
});

export default function SettingsPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsActive(true);
      if (data.currentPassword && data.newPassword) {
        await api.auth.updatePassword({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword
        })
      }
      alert('password updated');
      setError(null);
    } catch (e: any) {
      setError(e.response?.data?.message || e.message);
    } finally {
      setIsActive(false);
    }
  };

  return (
    <Layout title="Settings">
      <Container>
        <HeadingH2 left>Settings</HeadingH2>
        <SettingsNavigation currentTab={2} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HeadingH3>Change password</HeadingH3>
          {error && <ErrorText>{error}</ErrorText>}

          <Controller
            render={({ field: { onChange, onBlur } }) => (
              <Input
                name="currentPassword"
                placeholder="Current Password"
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
              />
            )}
            name="currentPassword"
            control={control}
          />

          <Controller
            render={({ field: { onChange, onBlur } }) => (
              <Input
                name="newPassword"
                placeholder="New Password"
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
              />
            )}
            name="newPassword"
            control={control}
          />

          <Button
            theme="primary"
            isLoading={isActive}
            disabled={isActive}
            onClick={() => onSubmit}
          >Save</Button>

        </Form>
      </Container>
    </Layout>
  )
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 512px;
  margin-bottom: 48px;
`;