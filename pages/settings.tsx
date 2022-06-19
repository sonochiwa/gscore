import Layout from "../components/layout";
import { Container, HeadingH2, HeadingH3, PrimaryButton, TextInput } from "../styles/main";
import styled from "styled-components";

export default function settingsPage() {
  return (
    <Layout title='Settings'>
      <Container>
        <HeadingH2 left>Settings</HeadingH2>
        <Wrapper>

          <Item>
            <HeadingH3>Presonal info</HeadingH3>
            <TextInput placeholder="Username" />
            <TextInput placeholder="Email" />
          </Item>

          <Item>
            <HeadingH3>Change password</HeadingH3>
            <TextInput placeholder="Current Password" />
            <TextInput placeholder="New Password" />
          </Item>
        </Wrapper>
        <PrimaryButton>Save all changes</PrimaryButton>
      </Container>
    </Layout>
  )
};

const Wrapper = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;
  margin-bottom: 48px;

  ${TextInput} {
    max-width: 512px;
    width: 100%;
  }
  ${TextInput} + ${TextInput} {
    margin-top: 24px;
  }
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  max-width: 512px;
  flex-direction: column;
  ${HeadingH3} {
    margin: 48px 0 24px;
  }
`;