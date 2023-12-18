"use client";

import { SizeType } from "@base/app/api/sizes/sizes.types";
import { ContentWrapper } from "../Admin.styles";
import { ColorType } from "@base/app/api/colors/colors.types";
import Heading from "@base/components/heading/Heading";
import {
  ColorDrop,
  IconWrapper,
  ItemWrapper,
  ItemsContentWrapper,
  ItemsWrapper,
  StyledForm,
  StyledModal,
  StyledText,
} from "./Others.styles";
import Button from "@base/components/button/Button";
import Edit from "@base/components/icons/Edit";
import { FormEvent, Fragment, useEffect, useMemo, useState } from "react";
import Input from "@base/components/input/base-input/Input";
import { useRouter } from "next-intl/client";
import ColorsForm from "./components/colors-form/ColorsForm";
import SizesForm from "./components/sizes-form/SizesForm";
import verifyJwtToken from "@base/utils/verifyJwtToken";

type PropTypes = {
  data: {
    sizesData: SizeType[];
    colorsData: ColorType[];
  };
  token: string;
};

const Others: React.FC<PropTypes> = ({ data, token }) => {
  const { sizesData, colorsData } = data || {};
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    type: string | undefined;
    id: number | undefined;
  }>();

  const sizesDataToRender = sizesData.filter((el) => el.locale === "pt");
  const colorsDataToRender = colorsData.filter((el) => el.locale === "pt");

  const filteredItem = useMemo(() => {
    const filteredArray =
      selectedItem?.type === "sizes"
        ? sizesData.filter((el) => el.id === selectedItem?.id)
        : colorsData.filter((el) => Number(el.id) === selectedItem?.id);
    return filteredArray;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const handleEdit = ({ type, id }: { type: string; id: number }) => {
    setSelectedItem({ type, id });
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const array = [];
    for (let i = 0; i < filteredItem.length; i++) {
      array.push({
        id: filteredItem[i].id,
        name: e.currentTarget[`${selectedItem?.type}${filteredItem[i].locale}`]
          .value,
        code:
          selectedItem?.type === "colors"
            ? e.currentTarget[
                `${selectedItem?.type}${filteredItem[i].locale}code`
              ].value
            : "",
        locale: filteredItem[i].locale,
      });
    }

    fetch(`/api/${selectedItem?.type}/${selectedItem?.id}`, {
      method: "PUT",
      body: JSON.stringify({ array }),
      headers: {
        "X-JWT-Token": token,
      },
    }).then(() => {
      setOpenModal(false);
      router.refresh();
    });
  };

  const handleDelete = () => {
    window.confirm("Confirma que quer apagar este registo?");
    if (confirm("Confirma que quer apagar este registo?")) {
      fetch(`/api/${selectedItem?.type}/${selectedItem?.id}`, {
        method: "DELETE",
        headers: {
          "X-JWT-Token": token,
        },
      }).then(() => {
        setOpenModal(false);
        router.refresh();
      });
    }
  };

  if (!sizesData || !colorsData) return null;

  return (
    <ContentWrapper>
      <Heading level="2">Tamanhos</Heading>
      <ItemsWrapper>
        <SizesForm sizesData={sizesData} token={token} />
        <ItemsContentWrapper>
          {sizesDataToRender.map(({ id, name }, index) => {
            return (
              <ItemWrapper key={index}>
                <IconWrapper onClick={() => handleEdit({ type: "sizes", id })}>
                  <Edit />
                </IconWrapper>
                <StyledText>{name}</StyledText>
              </ItemWrapper>
            );
          })}
        </ItemsContentWrapper>
      </ItemsWrapper>
      <Heading level="2">Cores</Heading>
      <ItemsWrapper>
        <ColorsForm colorsData={colorsData} token={token} />
        <ItemsContentWrapper>
          {colorsDataToRender.map(({ id, name, code }, index) => {
            const parsedId = Number(id);
            return (
              <ItemWrapper key={index}>
                <IconWrapper
                  onClick={() => handleEdit({ type: "colors", id: parsedId })}
                >
                  <Edit />
                </IconWrapper>
                <StyledText>{name}</StyledText>
                <ColorDrop backgroundColor={code}></ColorDrop>
              </ItemWrapper>
            );
          })}
        </ItemsContentWrapper>
      </ItemsWrapper>
      <StyledModal open={openModal} onClose={handleClose}>
        <Heading level="2">Editar</Heading>
        <StyledForm onSubmit={handleSubmit}>
          {filteredItem.map((el, index) => (
            <Fragment key={index}>
              <Input
                label={`${selectedItem?.type?.toUpperCase()} - ${el.locale?.toUpperCase()}`}
                defaultValue={el.name}
                name={`${selectedItem?.type}${el.locale}`}
                id={`${selectedItem?.type}${el.locale}`}
                alwaysOnTop
                required
              />
              {el.code && (
                <Input
                  label={`${selectedItem?.type?.toUpperCase()} - ${el.locale?.toUpperCase()}`}
                  defaultValue={el.code}
                  name={`${selectedItem?.type}${el.locale}code`}
                  id={`${selectedItem?.type}${el.locale}code`}
                  alwaysOnTop
                  required
                />
              )}
            </Fragment>
          ))}
          <Button type="submit">Editar</Button>
        </StyledForm>
        <Button onClick={handleDelete}>Apagar</Button>
      </StyledModal>
    </ContentWrapper>
  );
};

export default Others;
