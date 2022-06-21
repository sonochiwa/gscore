import { useState } from "react";
import { Container } from "../styles/main";
import Button from "../ui/Button";

export default function UiPage() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = async () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000)
  };

  return (
    <Container>
      <br />
      <br />
      <Button theme='primary' isLoading={isActive} disabled={isActive} onClick={handleClick}>Button</Button>
    </Container >
  )
};

