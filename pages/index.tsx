import Layout from '../components/layout';
import { Checkbox, Container, Input, PrimaryButton, SecondaryButton, Typography } from '../styles/main';

export default function Index() {
  return (
    <Layout title="Main">
      <Container>
        <Typography color='var(--color_100)'>Index page</Typography>
        <PrimaryButton>Default</PrimaryButton>
        <SecondaryButton>Default</SecondaryButton>
        <Input placeholder="Placehoder" />
        <Checkbox />
      </Container>
    </Layout>
  )
};