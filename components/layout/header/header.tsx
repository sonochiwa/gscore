import styled from 'styled-components';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Link from 'next/link';
import { Container } from '../../../styles/main';

export default function () {
  return (
    <Header>
      <Container>
        <Link href='/'><a><Image src={logo} width='170' height='42' alt='logo' /></a></Link>
      </Container>
    </Header>
  )
};

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 122px;
`;

