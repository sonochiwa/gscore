import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../hooks/app-dispatch";
import { Container } from "../../../styles/main";
import { logOut } from "../../../store/root-slice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeaderComponent() {
  const username = useAppSelector(state => state.root.username)
  const token = useAppSelector(state => state.root.token)
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const variants = {
    rotate: { rotateX: -180, transition: { duration: .2 } },
    stop: { rotate: 0, transition: { duration: .2 } },
    visible: { scale: 1, transition: { duration: .2 } },
    hidden: { scale: 0, transition: { duration: .2 } },
  };

  const onLogout = () => {
    dispatch(logOut());
    router.push('/');
  };

  return (
    <Header>
      <Container>
        <HeaderInner>
          <Link href="/"><a><Image src="/logo.svg" width="170" height="42" alt="" /></a></Link>
          {token != undefined && (
            <User>
              <LoginTypography><Link href="/subscriptions"><a>My subscriptions</a></Link></LoginTypography>
              <NameWrapper>
                <UserName onClick={() => setOpen(!open)}>{username ? username : 'username'}</UserName>
                <motion.div
                  variants={variants}
                  animate={open ? "rotate" : "stop"}
                  style={{ position: "absolute", right: "0", display: "flex" }}
                >
                  <Image src="/icons/chevron-down.svg" width="24" height="24" alt="" />
                </motion.div>

                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate={open ? "visible" : "hidden"}
                >
                  <Dropdown>
                    <DropdownItem onClick={() => router.push("/personal-info")}>Settings</DropdownItem>
                    <DropdownItem onClick={onLogout}>Logout</DropdownItem>
                  </Dropdown>
                </motion.div>
              </NameWrapper>
            </User>
          )}
        </HeaderInner>
      </Container>
    </Header>
  )
};

const Header = styled.header`
  position: relative;
  z-index: 999;
`;

const HeaderInner = styled.div`
  display: flex;
  height: 122px;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 32px;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  display: flex;
  font-family: 'Thicccboi';
  font-size: 20px;
  font-weight: 500;
  list-style-type: none;
  height: 24px;
  align-items: center;
`;

const Dropdown = styled.ul`
  display: flex;
  position: absolute;
  padding: 28px 24px;
  top: 44px;
  flex-direction: column;
  gap: 32px;
  right: 0;
  background-color: #272727;
  border-radius: 12px;
  width: 188px;

  ${DropdownItem} {
    ::before {
      height: 24px;
      width: 24px;
      margin-right: 12px;
    }

    :first-child::before {
      content: url('/icons/settings.svg');
    }

    :last-child::before {
      content: url('/icons/logout.svg');
    }
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const LoginTypography = styled.div`
  font-family: 'Thicccboi';
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
`;

const UserName = styled(LoginTypography)`
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 22px;
  padding-right: 31px;
`;