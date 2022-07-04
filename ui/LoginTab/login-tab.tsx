import { device, Typography } from "../../styles/main";
import styled from "styled-components";
import { useRouter } from "next/router";

interface ILoginTab {
  currentTab: number;
};

const LoginTab: React.FC<ILoginTab> = ({ currentTab }) => {
  const router = useRouter();
  const tabs = [
    { title: "Create account", route: "/sign-up" },
    { title: "Log in", route: "/sign-in" },
    { title: "Checkout", route: "/checkout" }
  ];

  return (
    <TabWrapper>
      <Tab tab={currentTab}>

        {tabs.map((tab, index) => (
          <TabItem key={index}>
            <TabTypography color="var(--color_100)">{tab.title}</TabTypography>
            <TabButton type="button" onClick={() => router.push(`${tab.route}`)} />
          </TabItem>
        ))}

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

const TabTypography = styled(Typography)`
  @media ${device.mobile} {
    line-height: 18px;
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

const TabItem = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
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
};

const Tab = styled.div<ITab>`
  display: flex;
  gap: 16px;
    ${TabItem}:nth-child(${props => props.tab}) ${TabButton}  {
    background-color: var(--primary_1);
  }
`;

export default LoginTab;