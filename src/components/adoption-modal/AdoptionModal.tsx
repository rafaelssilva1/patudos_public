import { useTranslations } from "next-intl";
import { StyledText, Wrapper, StyledLink } from "./AdoptionModal.styles";
import { PropTypes } from "./AdoptionModal.types";
import AdoptionForm from "./components/AdoptionForm";
import Heading from "../heading/Heading";

const AdoptionModal: React.FC<PropTypes> = ({ ...props }) => {
  const t = useTranslations();

  return (
    <Wrapper {...props}>
      <Heading level="2">{t("adoption-form.form")}</Heading>
      <StyledText>
        {t.rich("adoption-form.alert", {
          link: (chunks) => (
            <StyledLink
              href={t("footer.links.adoption-conditions.url")}
              target="_blank"
            >
              {chunks}
            </StyledLink>
          ),
        })}
      </StyledText>
      <AdoptionForm {...props} />
    </Wrapper>
  );
};

export default AdoptionModal;
