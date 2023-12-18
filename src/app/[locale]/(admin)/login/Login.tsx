"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next-intl/client";
import { Form, StyledButton, StyledHeading, Wrapper } from "./Login.styles";
import Heading from "@base/components/heading/Heading";
import Input from "@base/components/input/base-input/Input";
import { redirect } from "next-intl/server";

type PropTypes = {
  isUserLoggedIn: boolean;
};

const Login: React.FC<PropTypes> = ({ isUserLoggedIn }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginStatus = useMemo(() => isUserLoggedIn, [isUserLoggedIn]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.cookie = "token=''; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    const date = new Date();
    const expirationTime = date.getTime() + 60 * 60 * 1000;
    date.setTime(expirationTime);

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          document.cookie = `token=${data.token}; expires=${date}; path=/`;
          router.push("/admin");
        }
      });
  };

  if (loginStatus) {
    redirect("/admin");
  }

  useEffect(() => {
    if (!loginStatus) {
      document.cookie =
        "token=''; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      router.refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loginStatus) {
    return null;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} method="POST" autoComplete="off">
        <Heading level="1">Bem-vindo!</Heading>
        <StyledHeading level="4">Faz o teu login</StyledHeading>
        <Input
          name="username"
          label="Nome de utilizador"
          alwaysOnTop
          setCurrentValue={setUsername}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          alwaysOnTop
          setCurrentValue={setPassword}
        />
        <StyledButton type="submit">Entrar</StyledButton>
      </Form>
    </Wrapper>
  );
};

export default Login;
