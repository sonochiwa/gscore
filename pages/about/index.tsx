import Router from "next/router"
import Layout from "../../components/layout"
import { Container } from "../../styles/main"

export default function About() {

  const onClickHandler = () => {
    Router.push('/')
  }

  return (
    <Layout title='About us'>
      <Container>
        <h1>About page</h1>
        <button onClick={onClickHandler}>Go back to home</button>
        <button onClick={() => Router.push('/posts')}>Go back to posts</button>
      </Container>
    </Layout>
  )
}