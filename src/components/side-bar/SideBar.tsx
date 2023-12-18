import { useRouter } from "next-intl/client";
import { ButtonVariants, IconTypes } from "../button/Button.types";
import Heading from "../heading/Heading";
import Logo from "../icons/Logo";
import {
  ButtonWrapper,
  Wrapper,
  StyledButton,
  StyledLogoutButton,
} from "./SideBar.styles";

const SideBar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "token=''; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    router.push("/login");
  };

  const handleClick = (route: string) => {
    router.push(`/admin/${route}`);
  };

  return (
    <Wrapper>
      <Logo />
      <Heading level="2">Bem-vindo!</Heading>
      <ButtonWrapper>
        <StyledButton
          onClick={() => handleClick("/")}
          icon={IconTypes.HamburguerMenuAlt}
        >
          Dashboard
        </StyledButton>
        <StyledButton onClick={() => handleClick("/pets")} icon={IconTypes.Paw}>
          Animais
        </StyledButton>
        <StyledButton
          onClick={() => handleClick("/requests")}
          icon={IconTypes.EditAccount}
        >
          Pedidos de Adoção
        </StyledButton>
        <StyledButton
          onClick={() => handleClick("/others")}
          icon={IconTypes.Copy}
        >
          Outros
        </StyledButton>
      </ButtonWrapper>
      <StyledLogoutButton
        onClick={handleLogout}
        variant={ButtonVariants.Secondary}
      >
        Sair
      </StyledLogoutButton>
    </Wrapper>
  );
};

export default SideBar;
