"use client";

import { StyledLocale, Wrapper } from "./LanguageSwitcher.styles";
import useLocale from "@base/hooks/useLocale";
import useQueryParams from "@base/hooks/useQueryParams";
import { usePathname, useRouter } from "next-intl/client";
import { Fragment } from "react";

const LanguageSwitcher = () => {
  const { locales } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const { currentParams } = useQueryParams();

  const queryParams = currentParams ? `?${currentParams}` : "";

  const handleClick = (el: string) => {
    router.push(`${pathname}${queryParams}`, { locale: el });
  };

  return (
    <Wrapper>
      {locales.map((el, index) => {
        const isLast = index + 1 === locales.length;

        return (
          <Fragment key={`${el}-${index}`}>
            <StyledLocale onClick={() => handleClick(el)}>
              {el.toUpperCase()}
            </StyledLocale>
            {!isLast && <span> / </span>}
          </Fragment>
        );
      })}
    </Wrapper>
  );
};

export default LanguageSwitcher;
