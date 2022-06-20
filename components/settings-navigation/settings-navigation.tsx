import { Typography } from "../../styles/main";
import styled from "styled-components";
import { useRouter } from "next/router";

interface SettingsNavigation {
  currentTab: number;
}

export default function SettingsNavigationComponent({ currentTab }: SettingsNavigation) {
  const router = useRouter();

  return (
    <TabWrapper>
      <Tab tab={currentTab}>
        <Typography onClick={() => router.push('/personal-info')} color='var(--color_100)'>Personal info</Typography>
        <Typography onClick={() => router.push('/change-password')} color='var(--color_100)'>Change password</Typography>
      </Tab>
      <Hr />
    </TabWrapper>
  )
};

const TabWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  padding: 48px 0;
`;

interface ITab {
  tab: number;
}

const Tab = styled.div<ITab>`
  display: flex;
  ${Typography} {
    padding: 0 24px 12px;
    color: var(--color_600);
  }
  cursor: pointer;
  & :nth-child(${props => props.tab}) {
    color: var(--primary_1);
    margin-bottom: -2px;
    border-bottom: 3px solid var(--primary_1);
    z-index: 999;
  }
`;

const Hr = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color_600);
`;