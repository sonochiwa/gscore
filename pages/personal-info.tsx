import Layout from "../components/layout";
import styled from "styled-components";
import { Container, ErrorText, HeadingH2, HeadingH3 } from "../styles/main";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "../hooks/app-dispatch";
import { setUsername } from "../store/root-slice";
import SettingsNavigation from '../components/settings-navigation';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import api from "../services";

interface FormValues {
  username: string;
  email: string;
};

interface ISchema {
  username?: string;
  email?: string;
};

const schema = yup.object().shape({
  username: yup.string().min(4).notRequired(),
  email: yup.string().email().notRequired(),
}).test('oneOfRequired', (schema: ISchema) => { return schema.username != null || schema.email != null });

export default function SettingsPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    try {
      setIsActive(true);
      await api.auth.updateUser({
        username: data.username,
        email: data.email
      }).then(response => console.log(response));

      if (data.username) {
        dispatch(setUsername({ username: data.username }));
      };

      alert('user info updated');
      setError(null);
    } catch (e: any) {
      setError(e.response?.data?.message || e.message);
    } finally {
      setIsActive(false);
    };
  };

  return (
    <Layout title="Settings">
      <Container>
        <HeadingH2 left>Settings</HeadingH2>
        <SettingsNavigation currentTab={1} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HeadingH3>Presonal info</HeadingH3>
          {error && <ErrorText>{error}</ErrorText>}
          <Controller
            render={({ field: { onChange, onBlur } }) => (
              <Input
                name="username"
                placeholder="Username"
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
              />
            )}
            name="username"
            control={control}
          />

          <Controller
            render={({ field: { onChange, onBlur } }) => (
              <Input
                name="email"
                placeholder="Email"
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
              />
            )}
            name="email"
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