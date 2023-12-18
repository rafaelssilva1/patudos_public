import { SizeType } from "@base/app/api/sizes/sizes.types";
import Button from "@base/components/button/Button";
import { IconTypes } from "@base/components/button/Button.types";
import Input from "@base/components/input/base-input/Input";
import { useRouter } from "next-intl/client";
import { FormEvent, useState } from "react";
import { StyledForm, StyledModal } from "../../Others.styles";
import Heading from "@base/components/heading/Heading";

const SizesForm = ({
  sizesData,
  token,
}: {
  sizesData: SizeType[];
  token: string;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const maxObj = sizesData.reduce((accumulator, current) => {
      return accumulator.id > current.id ? accumulator : current;
    });

    const array = [
      {
        id: maxObj.id + 1,
        name: e.currentTarget.sizespt.value,
        locale: "pt",
      },
      {
        id: maxObj.id + 1,
        name: e.currentTarget.sizesen.value,
        locale: "en",
      },
    ];

    fetch(`/api/sizes`, {
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

  if (!sizesData) return null;

  return (
    <>
      <Button icon={IconTypes.Plus} onClick={() => setOpenModal(true)}></Button>
      <StyledModal open={openModal} onClose={handleClose}>
        <Heading level="2">Criar novo tamanho</Heading>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            label={"SIZES - EN"}
            name={"sizesen"}
            id={"sizesen"}
            alwaysOnTop
            required
          />
          <Input
            label={"SIZES - PT"}
            name={"sizespt"}
            id={"sizespt"}
            alwaysOnTop
            required
          />
          <Button type="submit">Criar</Button>
        </StyledForm>
      </StyledModal>
    </>
  );
};

export default SizesForm;
