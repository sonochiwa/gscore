import { useState } from "react";
import { Container } from "../styles/main";
import Button from "../ui/Button";

export default function UiPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <br />
      <br />
      <Button theme='primary' isLoading={false}>Button</Button>
    </Container >
  )
};