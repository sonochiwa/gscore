import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"
import { Container, PrimaryButton, SecondaryButton, Typography } from "../styles/main"

export default function Index() {
  return (
    <Layout title="Main">
      <Container>
        <Typography color='var(--color_100)'>Index page</Typography>
        <PrimaryButton>Click me</PrimaryButton>
        <SecondaryButton>Click me</SecondaryButton>
      </Container>
      {/* <h1>Hello Next.JS!</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href={'/posts'}><a>Posts</a></Link></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <PrimaryButton>123</PrimaryButton> */}
    </Layout>
  )
}