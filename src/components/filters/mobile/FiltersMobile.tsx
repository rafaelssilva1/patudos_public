import {
  ButtonVariants,
  IconTypes,
  Sizes,
} from "@base/components/button/Button.types";
import { ButtonsWrapper, StyledButton, MobileWrapper } from "../Filters.styles";
import { PropTypes } from "../Filters.types";
import Modal from "@base/components/modal/Modal";
import FiltersContent from "../components/FiltersContent";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SortBy from "@base/components/sort/Sort";

const FiltersMobile: React.FC<PropTypes> = ({ data }) => {
  const t = useTranslations();

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  if (!data) return null;

  return (
    <MobileWrapper>
      <ButtonsWrapper>
        <StyledButton
          variant={ButtonVariants.Secondary}
          icon={IconTypes.Filters}
          size={Sizes.Small}
          onClick={() => setOpenModal(!openModal)}
        >
          {t("filters.title")}
        </StyledButton>
        <SortBy />
      </ButtonsWrapper>
      <Modal open={openModal} onClose={handleClose}>
        <FiltersContent data={data} />
      </Modal>
    </MobileWrapper>
  );
};

export default FiltersMobile;
