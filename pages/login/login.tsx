import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { Container, HeadingH2, TextInput, PrimaryButton, Typography } from "../../styles/main";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormValues = {
  TextInput: string;
  Username: string;
  Email: string;
  Password: string;
}

export default function HomeComponent() {
  const [tab, setTab] = useState(1);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit = (data: object) => {
    console.log(data)
  }

  return (
    <Layout title="Login">
      <Container>
        <TabWrapper>
          <Tab tab={tab}>
            <TabItem>
              <Typography color='var(--color_100)'>Create account</Typography>
              <TabButton type='button' onClick={() => setTab(1)} />
            </TabItem>

            <TabItem>
              <Typography color='var(--color_100)'>Log in</Typography>
              <TabButton type='button' onClick={() => setTab(2)} />
            </TabItem>

            <TabItem>
              <Typography color='var(--color_100)'>Checkout</Typography>
              <TabButton type='button' onClick={() => setTab(3)} />
            </TabItem>
          </Tab>
        </TabWrapper>

        <Wrapper>
          {
            tab === 1 ? (
              <>
                <HeadingH2>Create account</HeadingH2>
                <InputsDescription>You need to enter your name and email. We will send you a temporary password by email</InputsDescription>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      // fieldState: { isTouched, isDirty, error },
                    }) => (
                      <TextInput
                        placeholder='Username'
                        // value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                      />
                    )}
                    name="Username"
                    control={control}
                    rules={{ minLength: 10, required: "This is required." }}
                  />
                  {/* <ErrorMessage
                    errors={errors}
                    name="Username"
                    render={({ message }) => <Typography>{message}</Typography>}
                  /> */}

                  <Controller
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { isTouched, isDirty, error },
                    }) => (
                      <TextInput
                        placeholder='Email'
                        // value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                      />
                    )}
                    name="Email"
                    control={control}
                    rules={{ minLength: 10 }}
                  />
                  <Controller
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { isTouched, isDirty, error },
                    }) => (
                      <TextInput
                        placeholder='Password'
                        // value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                      />
                    )}
                    name="Password"
                    control={control}
                    rules={{ minLength: 10 }}
                  // type='password'
                  />
                  <PrimaryButton type='submit'>Send password</PrimaryButton>
                </form>

                <NextStep>
                  <Typography color='var(--color_100)'>Have an account?</Typography>
                  <Typography onClick={() => setTab(2)}>Go to the next step</Typography>
                </NextStep>
              </>
            ) :
              tab === 2 ? (
                <>
                  <HeadingH2>Log in</HeadingH2>
                  <TextInput placeholder='Email' />
                  <TextInput placeholder='Password' type='password' />
                  <PrimaryButton>Log in</PrimaryButton>
                </>
              ) :
                (
                  <>
                    <HeadingH2>Checkout</HeadingH2>
                    {/* <InputsDescription>We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.</InputsDescription> */}
                    <Package>
                      <Row>
                        <Typography>Package name</Typography>
                        <Typography>Price</Typography>
                      </Row>
                      <Hr />
                      <Row>
                        <Typography>Single site license</Typography>
                        <Typography>$77</Typography>
                      </Row>
                    </Package>
                    <Total>
                      <Typography>Total:</Typography>
                      <Typography>$77</Typography>
                    </Total>
                    <PrimaryButton>Purchase</PrimaryButton>
                  </>
                )
          }
        </Wrapper>
      </Container>
    </Layout>
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

const InputsDescription = styled.div`
  width: 640px;
  font-size: 14px;
  font-family: 'Thicccboi';
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

const NextStep = styled.div`
  display: flex;
  gap: 8px;
  ${Typography} {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
  }
  & :last-child {
      cursor: pointer;
      color: var(--primary_1);
    }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 620px;
  width: 100%;
  ${HeadingH2} {
    text-align: left;
    margin-bottom: 16px;
    
  }
  ${PrimaryButton} {
    width: 200px;
  }
  ${TextInput} + ${TextInput} {
    margin-top: 24px;
  }
  ${TextInput} + ${PrimaryButton} {
    margin: 48px 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Package = styled.div`
  position: relative;
  background-color: #272727;
  border-radius: 12px;
  padding: 48px 32px;
  ${Row}:first-child ${Typography} {
    font-weight: 700;
  }
  ${Typography}:last-child {
    font-weight: 400;
  }
  ${Typography} {
    font-family: 'Thicccboi';
    font-size: 24px;
    line-height: 34px;
    color: var(--color_100)
  }
`;

const Hr = styled.div`
  position: relative;
  left: -32px;
  margin: 32px 0;
  width: calc(100% + 64px);
  height: 1px;
  background-color: #969696;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 48px;
  ${Typography} {
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    font-family: 'Thicccboi';
    color: var(--color_100)
  }
`;