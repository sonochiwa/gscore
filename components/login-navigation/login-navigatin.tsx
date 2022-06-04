import { Typography } from "../../styles/main";
import styled from "styled-components";
import { useRouter } from "next/router";

interface LoginNavigation {
  currentTab: number;
}

export default function LoginNavigationComponent({ currentTab }: LoginNavigation) {
  const router = useRouter();

  return (
    <TabWrapper>
      <Tab tab={currentTab}>
        <TabItem>
          <Typography color='var(--color_100)'>Create account</Typography>
          <TabButton type='button' onClick={() => router.push('/sign-up')} />
        </TabItem>

        <TabItem>
          <Typography color='var(--color_100)'>Log in</Typography>
          <TabButton type='button' onClick={() => router.push('/sign-in')} />
        </TabItem>

        <TabItem>
          <Typography color='var(--color_100)'>Checkout</Typography>
          <TabButton type='button' onClick={() => router.push('/checkout')} />
        </TabItem>
      </Tab>
    </TabWrapper>
  )
};

const TabWrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
  padding-bottom: 64px;
`;

const TabButton = styled.input`
  cursor: pointer;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: var(--color_600);
  padding: 0;
  margin: 0;
`;

const TabItem = styled.label`
  cursor: pointer;
  user-select: none;
  width: 100%;
  & :checked {
    ${TabButton} {
      background-color: red;
    }
  }
`;

interface ITab {
  tab: number;
}

const Tab = styled.div<ITab>`
  display: flex;
  gap: 16px;
    ${TabItem}:nth-child(-n + ${props => props.tab}) ${TabButton}  {
    background-color: var(--primary_1);
  }
`;
