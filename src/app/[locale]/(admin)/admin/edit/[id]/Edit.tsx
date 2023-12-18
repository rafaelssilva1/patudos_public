"use client";

import Heading from "@base/components/heading/Heading";
import {
  CheckboxWrapper,
  ColorCircle,
  ColorsWrapper,
  DescriptionWrapper,
  FormSection,
  ImageWrapper,
  InputFormSection,
  InputWrapper,
  RadioWrapper,
  StatusWrapper,
  StyledForm,
  StyledSelect,
  TitleWrapper,
  Wrapper,
} from "./Edit.styles";
import { PropTypes } from "./Edit.types";
import Input from "@base/components/input/base-input/Input";
import Checkbox from "@base/components/checkbox/Checkbox";
import { InputTypes } from "@base/components/checkbox/Checkbox.types";
import Status from "../../requests/components/status/Status";
import ResponsiveImage from "@base/components/image/Image";
import { FormEvent, useState } from "react";
import TextArea from "@base/components/text-area/TextArea";
import Button from "@base/components/button/Button";
import { useRouter } from "next-intl/client";

const Edit: React.FC<PropTypes> = ({ data, token }) => {
  const router = useRouter();

  const { petDetailsData, colorsData, petStatusData, sizesData } = data;

  const {
    id,
    name,
    size,
    sex,
    type,
    vaccinated,
    sterilized,
    dewormed,
    fivFelv,
    specialNeeds,
    pet_status,
    image,
    shortDescription,
    description,
    color,
    birthDate,
    pickupDate,
  } = petDetailsData.details[0];

  const parsedBirthDate = new Date(birthDate || "")
    .toISOString()
    .substring(0, 10);
  const parsedPickupDate = new Date(pickupDate || "")
    .toISOString()
    .substring(0, 10);

  const { shortDescription: shortDescriptionPt, description: descriptionPt } =
    petDetailsData.details[1];

  const [selectedName, setSelectedName] = useState(String(name));
  const [selectedSize, setSelectedSize] = useState(String(size));
  const [selectedBirthdate, setSelectedBirthdate] = useState(parsedBirthDate);
  const [selectedPickupDate, setSelectedPickupDate] =
    useState(parsedPickupDate);
  const [selectedSex, setSelectedSex] = useState(sex);
  const [selectedType, setSelectedType] = useState(Number(type));
  const [selectedOtherData, setSelectedOtherData] = useState({
    vaccinated: Boolean(vaccinated),
    sterilized: Boolean(sterilized),
    dewormed: Boolean(dewormed),
    fivFelv: Boolean(fivFelv),
    specialNeeds: Boolean(specialNeeds),
  });
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedStatus, setSelectedStatus] = useState(String(pet_status));
  const [selectedImage, setSelectedImage] = useState(image);
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [selectedDescriptions, setSelectedDescriptions] = useState({
    shortDescriptionPt,
    descriptionPt,
    shortDescriptionEn: shortDescription,
    descriptionEn: description,
  });

  const handleEdit = (id: string) => {
    setSelectedStatus(id);
  };

  const handleSubmit = () => {
    const body = {
      name: selectedName,
      size: selectedSize,
      sex: selectedSex,
      type: selectedType,
      vaccinated: selectedOtherData.vaccinated,
      sterilized: selectedOtherData.sterilized,
      dewormed: selectedOtherData.dewormed,
      fivFelv: selectedOtherData.fivFelv,
      specialNeeds: selectedOtherData.specialNeeds,
      pet_status: selectedStatus,
      image: selectedImage,
      shortDescriptionPt: selectedDescriptions.shortDescriptionPt,
      descriptionPt: selectedDescriptions.descriptionPt,
      shortDescriptionEn: selectedDescriptions.shortDescriptionEn,
      descriptionEn: selectedDescriptions.descriptionEn,
      color: selectedColor,
      birthDate: selectedBirthdate,
      pickupDate: selectedPickupDate,
    };

    fetch(`/api/pets/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "X-JWT-Token": token,
      },
    }).then(() => {
      router.push(`/admin/pets/${id}`);
    });
  };

  const handleImageUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) return;

    try {
      const data = new FormData();
      data.set("file", selectedFile);

      await fetch("https://static.patudosvagos.pt/upload.php", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) =>
          setSelectedImage(`https://static.patudosvagos.pt/images/${data.url}`),
        );
    } catch (e: any) {
      console.error(e);
    }
  };

  if (!petDetailsData || !colorsData || !petStatusData || !sizesData)
    return null;

  return (
    <Wrapper>
      <TitleWrapper>
        <Heading level="1">Editar</Heading>
      </TitleWrapper>
      <StyledForm>
        <InputFormSection>
          <InputWrapper>
            <Input
              currentValue={selectedName}
              placeholder="Nome"
              label="Nome"
              setCurrentValue={setSelectedName}
            />
            <StyledSelect
              id="sizes"
              showIcon={false}
              isTyping={!!size}
              label="Tamanho"
              onChange={(e) => setSelectedSize(String(e.target.value))}
              value={selectedSize}
            >
              {sizesData?.map(({ id, name }, index) => {
                return (
                  <option key={index} value={id}>
                    {name}
                  </option>
                );
              })}
            </StyledSelect>
            <Input
              type="date"
              currentValue={selectedBirthdate}
              placeholder="Data de nascimento"
              label="Data de nascimento"
              setCurrentValue={setSelectedBirthdate}
              alwaysOnTop
            />
            <Input
              type="date"
              currentValue={selectedPickupDate}
              placeholder="Data de recolha"
              label="Data de recolha"
              setCurrentValue={setSelectedPickupDate}
              alwaysOnTop
            />
            <Heading level="3">Sexo</Heading>
            <RadioWrapper>
              <Checkbox
                type={InputTypes.Radio}
                name="sex"
                id="1"
                value="1"
                label="Fêmea"
                checked={selectedSex === 1}
                onClick={() => setSelectedSex(1)}
              />
              <Checkbox
                type={InputTypes.Radio}
                name="sex"
                id="0"
                value="0"
                label="Macho"
                checked={selectedSex === 0}
                onClick={() => setSelectedSex(0)}
              />
            </RadioWrapper>
            <Heading level="3">Tipo</Heading>
            <RadioWrapper>
              <Checkbox
                type={InputTypes.Radio}
                name="type"
                id="1"
                value="1"
                label="Cão"
                checked={selectedType === 1}
                onClick={() => setSelectedType(1)}
              />
              <Checkbox
                type={InputTypes.Radio}
                name="type"
                id="0"
                value="0"
                label="Gato"
                checked={selectedType === 0}
                onClick={() => setSelectedType(0)}
              />
            </RadioWrapper>
            <Heading level="3">Outros Dados</Heading>
            <CheckboxWrapper>
              <Checkbox
                name="vaccines"
                id="vaccines"
                label="Vacinado"
                checked={selectedOtherData.vaccinated}
                value={String(selectedOtherData.vaccinated)}
                onClick={() =>
                  setSelectedOtherData((prev) => ({
                    ...prev,
                    vaccinated: !prev.vaccinated,
                  }))
                }
              />
              <Checkbox
                name="sterilized"
                id="sterilized"
                label="Esterilizado"
                checked={selectedOtherData.sterilized}
                value={String(selectedOtherData.sterilized)}
                onClick={() =>
                  setSelectedOtherData((prev) => ({
                    ...prev,
                    sterilized: !prev.sterilized,
                  }))
                }
              />
              <Checkbox
                name="dewormed"
                id="dewormed"
                label="Desparazitado"
                checked={selectedOtherData.dewormed}
                value={String(selectedOtherData.dewormed)}
                onClick={() =>
                  setSelectedOtherData((prev) => ({
                    ...prev,
                    dewormed: !prev.dewormed,
                  }))
                }
              />
              <Checkbox
                name="fiv_felv"
                id="fiv_felv"
                label="Fiv/Felv"
                checked={selectedOtherData.fivFelv}
                value={String(selectedOtherData.fivFelv)}
                onClick={() =>
                  setSelectedOtherData((prev) => ({
                    ...prev,
                    fivFelv: !prev.fivFelv,
                  }))
                }
              />
              <Checkbox
                name="special_needs"
                id="special_needs"
                label="Necessidades especiais"
                checked={selectedOtherData.specialNeeds}
                value={String(selectedOtherData.specialNeeds)}
                onClick={() =>
                  setSelectedOtherData((prev) => ({
                    ...prev,
                    specialNeeds: !prev.specialNeeds,
                  }))
                }
              />
            </CheckboxWrapper>
          </InputWrapper>
          <InputWrapper>
            <Heading level="3">Cor</Heading>
            <ColorsWrapper>
              {colorsData.map(({ id, code }, index) => (
                <ColorCircle
                  key={index}
                  color={code}
                  selectedColor={Number(selectedColor) === id}
                  onClick={() => setSelectedColor(String(id))}
                ></ColorCircle>
              ))}
            </ColorsWrapper>
            <Heading level="3">Estado</Heading>
            <StatusWrapper>
              {petStatusData.data?.map(({ id, name }, index) => (
                <Status
                  onClick={() => handleEdit(String(id))}
                  defaultStyles={false}
                  selectedStatus={selectedStatus}
                  defaultSelected={selectedStatus === String(id)}
                  key={index}
                  idValue={id}
                  id={id}
                  name={name}
                />
              ))}
            </StatusWrapper>
            <Heading level="3">Imagem</Heading>
            <ImageWrapper>
              {selectedFile ? (
                <ResponsiveImage src={URL.createObjectURL(selectedFile)} />
              ) : (
                <ResponsiveImage src={selectedImage} placeholder="blur" />
              )}
            </ImageWrapper>
            <form onSubmit={handleImageUpload}>
              <Input
                type="file"
                accept=".png,.jpeg,.jpg"
                name="image"
                id="image"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setSelectedFile(e.target.files[0]);
                  }
                }}
              />
              {selectedFile && <Button type="submit">Carregar imagem</Button>}
            </form>
          </InputWrapper>
        </InputFormSection>
        <FormSection>
          <InputWrapper>
            <Heading level="3">Descrições</Heading>
            <DescriptionWrapper>
              <Heading level="4">PT</Heading>
              <TextArea
                rows={2}
                content={selectedDescriptions.shortDescriptionPt || ""}
                onChange={(e) =>
                  setSelectedDescriptions((prev) => ({
                    ...prev,
                    shortDescriptionPt: e.target.value,
                  }))
                }
              />
              <TextArea
                rows={8}
                content={selectedDescriptions.descriptionPt || ""}
                onChange={(e) =>
                  setSelectedDescriptions((prev) => ({
                    ...prev,
                    descriptionPt: e.target.value,
                  }))
                }
              />
              <Heading level="4">EN</Heading>
              <TextArea
                rows={2}
                content={selectedDescriptions.shortDescriptionEn || ""}
                onChange={(e) =>
                  setSelectedDescriptions((prev) => ({
                    ...prev,
                    shortDescriptionEn: e.target.value,
                  }))
                }
              />
              <TextArea
                rows={8}
                content={selectedDescriptions.descriptionEn || ""}
                onChange={(e) =>
                  setSelectedDescriptions((prev) => ({
                    ...prev,
                    descriptionEn: e.target.value,
                  }))
                }
              />
            </DescriptionWrapper>
          </InputWrapper>
        </FormSection>
        <Button onClick={() => handleSubmit()}>Gravar alterações</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default Edit;
