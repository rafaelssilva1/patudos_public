import typography from "@base/theme/typography.styles";
import { StylingProps } from "./Heading.types";
import styled from "@emotion/styled";

export const BaseHeading = styled.h1<StylingProps>`
  ${({ level }) => level === "1" && typography?.h1}
  ${({ level }) => level === "2" && typography?.h2}
    ${({ level }) => level === "3" && typography?.h3}
    ${({ level }) => level === "4" && typography?.p.default}
    ${({ level }) => level === "5" && typography?.p.default}
`;
