import Layout from "../components/layout";
import { Container, HeadingH2 } from "../styles/main";

export default function settingsPage() {
  return (
    <Layout title='Settings'>
      <Container>
        <HeadingH2 left>Settings</HeadingH2>
      </Container>
    </Layout>
  )
}