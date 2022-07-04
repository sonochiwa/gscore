import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Container, Typography } from "../../../styles/main";
import { device } from "../../../styles/main";

export default function FooterComponent() {
  return (
    <Footer>
      <Container>
        <FooterTop>
          <LogoWrapper>
            <Image src="/logo.svg" width="170" height="42" alt="" />
          </LogoWrapper>
          <Typography color="var(--color_400)">Ut enim ad minim veniam quis nostrud <br /> exercitation  ea commodo</Typography>
        </FooterTop>
        <FooterBottom>
          <List>
            <Item>Copyright © 2022 GScore</Item>
            <Item>All Rights Reserved</Item>
            <Item><Link href="/cookies"><a>Cookies</a></Link></Item>
            <Item><Link href="/privacy-policy"><a>Privacy Policy</a></Link></Item>
          </List>
          <Socials>
            <SocialItem>
              <Link href="https://facebook.com">
                <a target="_blank">
                  <Image src={"/icons/facebook.svg"} width="13.43" height="24.62" alt="Facebook" />
                </a>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="https://twitter.com">
                <a target="_blank">
                  <Image src="/icons/twitter.svg" width="25.44" height="20.64" alt="Twitter" />
                </a>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="https://linkedin.com">
                <a target="_blank">
                  <Image src="/icons/linkedIn.svg" width="24.37" height="23.21" alt="LinkedIn" />
                </a>
              </Link>
            </SocialItem>
          </Socials>
        </FooterBottom>
      </Container>
    </Footer>
  )
};

const LogoWrapper = styled.div`
  @media ${device.mobile} {
    width: 130px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  margin-top: 42px;
  padding: 60px 0 42px;
  border-top: 1px solid var(--color_700);

  @media ${device.tablet} {
    padding-bottom: 0;
    padding-top: 40px;
  }
`;

const FooterTop = styled.div`
  margin-bottom: 60px;
  ${Typography} {
    margin-top: 24px;
  }

  @media ${device.tablet} {
    margin-bottom: 40px;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 44px;
  border-top: 1px solid var(--color_700);

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 30px;
    ${Socials} {
      margin: 24px 0;
    }
  }
  @media ${device.mobile} {
  }
`;

const List = styled.ul`
  display: inline;
`;

const Item = styled.li`
  display: inline;
  list-style-type: none;
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: var(--color_400);
  margin-right: 10px;
  &:not(:last-child) {
    &::after {
      margin-left: 10px;
    content: '|';
    }
  }
  & a {
    padding-bottom: 2px;
    border-bottom: 1px solid;
    line-height: 30px;
  }
`;

const SocialItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`;