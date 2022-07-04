import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../hooks/app-dispatch";
import { Container, device } from "../../../styles/main";
import { logOut } from "../../../store/root-slice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function HeaderComponent() {
  const username = useAppSelector(state => state.root.username)
  const token = useAppSelector(state => state.root.token)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [burgerDropdownOpen, setBurgerDropdownOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const variants = {
    rotate: { rotateX: -180, transition: { duration: .2 } },
    stop: { rotate: 0, transition: { duration: .2 } },

    visible: { opacity: 1, display: 'block', transition: { duration: .2 } },
    hidden: { opacity: 0, display: 'none', transition: { duration: .2 } },

    opened: { translateX: '-260px', transition: { duration: .2 } },
    closed: { translateX: '0px', transition: { duration: .2 } },

    ulVisible: { height: '100%', opacity: 1, display: 'block', transition: { duration: .2 } },
    ulHidden: { height: '0px', opacity: 0, display: 'none', transition: { duration: .2 } },
  };

  const onLogout = () => {
    dispatch(logOut());
    setDropdownOpen(false);
    setOverlay(false);
    router.push('/');
  };

  const handleOpenBurger = () => {
    setBurgerOpen(true);
    setOverlay(true);
    disablePageScroll();
  };

  const handleCloseBurger = () => {
    setBurgerOpen(false);
    setOverlay(false);
    enablePageScroll();
  };

  return (
    <>
      <Header>
        <Container>
          <HeaderInner>
            <LogoWrapper>
              <Link href="/"><a><Image src="/logo.svg" width="170" height="42" alt="" /></a></Link>
            </LogoWrapper>
            {token != undefined && (
              <>
                <User>
                  <LoginTypography><Link href="/subscriptions"><a>My subscriptions</a></Link></LoginTypography>
                  <NameWrapper>
                    <UserName onClick={() => setDropdownOpen(!dropdownOpen)}>{username}</UserName>
                    <motion.div variants={variants} animate={dropdownOpen ? "rotate" : "stop"}
                      style={{ position: "absolute", right: "0", display: "flex" }} >
                      <Image src="/icons/chevron-down.svg" width="24" height="24" alt="" />
                    </motion.div>
                    <motion.div variants={variants} initial="hidden" animate={dropdownOpen ? "visible" : "hidden"}>
                      <Dropdown>
                        <DropdownItem onClick={() => router.push("/personal-info")}>Settings</DropdownItem>
                        <DropdownItem onClick={onLogout}>Logout</DropdownItem>
                      </Dropdown>
                    </motion.div>
                  </NameWrapper>
                </User>
              </>
            )}
          </HeaderInner>
        </Container>
      </Header >

      <BurgerWrapper>
        {overlay && <Overlay />}
        {token != undefined && (
          <>
            <OpenBurger onClick={handleOpenBurger} />
            <motion.div style={{ position: 'fixed', right: '0', top: '0', zIndex: '999' }} variants={variants} initial="closed" animate={burgerOpen ? "opened" : "closed"}>
              <Burger>
                <BurgerHeader>
                  <CloseBurger onClick={handleCloseBurger} />
                  <Link href="/"><a><Image src="/logo.svg" width="130" height="32" alt="" /></a></Link>
                </BurgerHeader>
                <div>
                  <LoginTypography><Link href="/subscriptions"><a>My subscriptions</a></Link></LoginTypography>
                  <Hr />
                  <UsernameWrapper onClick={() => setBurgerDropdownOpen(!burgerDropdownOpen)}>
                    <LoginTypography>{username}</LoginTypography>
                    <motion.div variants={variants} animate={burgerDropdownOpen ? "rotate" : "stop"}
                      style={{ display: "flex" }} >
                      <Image src="/icons/chevron-down.svg" width="24" height="24" alt="" />
                    </motion.div>
                  </UsernameWrapper>
                  <motion.div variants={variants} animate={burgerDropdownOpen ? "ulVisible" : "ulHidden"}>
                    <Dropdown>
                      <DropdownItem onClick={() => router.push("/personal-info")}>Settings</DropdownItem>
                      <DropdownItem onClick={onLogout}>Logout</DropdownItem>
                    </Dropdown>
                  </motion.div>
                  <Hr />
                </div>
              </Burger>
            </motion.div>
          </>
        )}
      </BurgerWrapper>
    </>
  )
};

const LogoWrapper = styled.div`
  @media ${device.mobile} {
    width: 130px;
  }
`;

const BurgerWrapper = styled.div`
  display: none;
  z-index: 999;
  @media ${device.mobile} {
    display: block;
  }
`;

const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Hr = styled.div`
  width: 100% auto;
  height: 1px;
  background-color: #393939;
  margin: 20px 0;
`;

const BurgerHeader = styled.div`
  padding-top: 24px;
  margin-right: 26px;
  margin-bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    height: 32px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #272727;
  opacity: .4;
  transition: .3s;
  z-index: 900;
`;

const OpenBurger = styled.button`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  background-image: url("/icons/open-burger.svg");
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  display: none;
  z-index: 991;
  @media ${device.mobile} {
    display: block;
  }
`;

const CloseBurger = styled.button`
  cursor: pointer;
  background-image: url("/icons/close-burger.svg");
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
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

const Burger = styled.div`
  position: absolute;
  height: 100vh;
  width: 260px;
  top: 0;
  right: -260px;
  display: none;
  z-index: 990;
  background-color: #272727;
  padding: 0 24px;

  ${Dropdown} {
    background-color: none;
    position: static;
    padding: 28px 0 0;
    gap: 0;
    ${DropdownItem} {
      font-size: 16px;
      color: #969696;
      
      ::before {
        height: 20px;
        width: 20px;
      }
      
      :first-child {
        margin-bottom: 24px;
        ::before {
          content:'';
          background-image: url('/icons/settings.svg');
          background-size: 20px 20px;
          opacity: .6;
        }
      }
      :last-child::before {
        content:'';
        background-image: url('/icons/logout.svg');
        background-size: 20px 20px;
        opacity: .6;
      }
    }
  }
  @media ${device.mobile} {
    display: block;
  }
`;

const Header = styled.header`
  position: relative;
  z-index: 800;
`;

const HeaderInner = styled.div`
  display: flex;
  position: relative;

  height: 122px;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    height: 85px;
    margin-bottom: 25px;
  }
  
`;

const User = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 32px;
  @media ${device.mobile} {
    display: none;
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

  @media ${device.mobile} {
    display: 16px;
  }
`;