import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Container, HeadingH2, Typography } from '../styles/main';

export default function ErrorPage() {
  return (
    <Layout title='Not Found'>
      <NewContainer>
        <HeadingH2>Page not found</HeadingH2>
        <Typography>
          <Link href='/'><a>Go back</a></Link>
        </Typography>
      </NewContainer>
    </Layout>
  )
};

const NewContainer = styled(Container)`
  text-align: center;
`;


