import Layout from "../../components/layout";
import styled from "styled-components";
import { HeadingH2, TextInput, PrimaryButton } from "../../styles/main";
import LoginNavigation from '../../components/login-navigation'

export default function SignInPage() {
  return (
    <Layout title="Sign in">
      <Wrapper>
        <LoginNavigation currentTab={2} />
        <HeadingH2>Log in</HeadingH2>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' type='password' />
        <PrimaryButton>Log in</PrimaryButton>
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
  ${TextInput} + ${TextInput} {
    margin-top: 24px;
  }
  ${TextInput} + ${PrimaryButton} {
    margin: 48px 0;
  }
`;