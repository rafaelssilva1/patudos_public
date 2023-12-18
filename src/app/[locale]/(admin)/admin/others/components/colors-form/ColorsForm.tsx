import { ColorType } from "@base/app/api/colors/colors.types";
import Button from "@base/components/button/Button";
import { IconTypes } from "@base/components/button/Button.types";
import Heading from "@base/components/heading/Heading";
import Input from "@base/components/input/base-input/Input";
import { useRouter } from "next-intl/client";
import { FormEvent, useState } from "react";
import { StyledForm, StyledModal } from "../../Others.styles";

const ColorsForm = ({
  colorsData,
  token,
}: {
  colorsData: ColorType[];
  token: string;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const maxObj = colorsData.reduce((accumulator, current) => {
      return accumulator.id > current.id ? accumulator : current;
    });

    const array = [
      {
        id: maxObj.id + 1,
        name: e.currentTarget.colorspt.value,
        code: e.currentTarget.colorsptcode.value,
        locale: "pt",
      },
      {
        id: maxObj.id + 1,
        name: e.currentTarget.colorsen.value,
        code: e.currentTarget.colorsencode.value,
        locale: "en",
      },
    ];

    fetch(`/api/colors`, {
      method: "POST",
      body: JSON.stringify({ array }),
      headers: {
        "X-JWT-Token": token,
      },
    }).then(() => {
      setOpenModal(false);
      router.refresh();
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (!colorsData) return null;

  return (
    <>
      <Button icon={IconTypes.Plus} onClick={() => setOpenModal(true)}></Button>
      <StyledModal open={openModal} onClose={handleClose}>
        <Heading level="2">Criar nova cor</Heading>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            label={"COLORS - EN"}
            name={"colorsen"}
            id={"colorsen"}
            alwaysOnTop
            required
          />
          <Input
            label={"COLOR CODE - EN"}
            name={"colorsencode"}
            id={"colorsencode"}
            alwaysOnTop
            required
          />
          <Input
            label={"COLORS - PT"}
            name={"colorspt"}
            id={"colorspt"}
            alwaysOnTop
            required
          />
          <Input
            label={"COLOR CODE - PT"}
            name={"colorsptcode"}
            id={"colorsptcode"}
            alwaysOnTop
            required
          />
          <Button type="submit">Criar</Button>
        </StyledForm>
      </StyledModal>
    </>
  );
};

export default ColorsForm;
