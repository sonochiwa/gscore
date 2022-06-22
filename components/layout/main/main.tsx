import styled from "styled-components";

interface IMain {
  children: React.ReactNode;
};

export default function MainComponent({ children }: IMain) {
  return (
    <Main>
      {children}
    </Main>
  )
};

const Main = styled.main`
  display: flex;
  flex: 1 0 auto;
`;