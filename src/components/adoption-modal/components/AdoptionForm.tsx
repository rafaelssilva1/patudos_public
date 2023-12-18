import Input from "@base/components/input/base-input/Input";
import {
  Form,
  InnerWrapper,
  StyledButton,
  StyledSelect,
} from "./AdoptionForm.styles";
import { useTranslations } from "next-intl";
import { FormEvent, useEffect, useState } from "react";
import useLocale from "@base/hooks/useLocale";
import { EMAIL_REGEX } from "@base/utils/regex";
import Heading from "@base/components/heading/Heading";
import { PropTypes } from "../AdoptionModal.types";
import { useReCaptcha } from "next-recaptcha-v3";
import verifyToken from "@base/utils/verifyToken";
import { useParams } from "next/navigation";
import Select from "@base/components/select/Select";

const AdoptionForm: React.FC<PropTypes> = ({ showAdoptMeModal }) => {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();

  const { executeRecaptcha } = useReCaptcha();

  const [formSubmit, setFormSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [petsAtHome, setPetsAtHome] = useState("");
  const [howManyPets, setHowManyPets] = useState("");
  const [petTypes, setPetTypes] = useState("");
  const [howManySterilized, setHowManySterilized] = useState("");

  useEffect(() => {
    if (!showAdoptMeModal) {
      setFormSubmit(false);
      setError(false);
    }
  }, [showAdoptMeModal]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await executeRecaptcha("form_submit");
    const isValid = await verifyToken({ token });

    const stringFields = [name, phone, municipality, petsAtHome, petTypes];
    const areStringFieldsInvalid = !!stringFields.find(
      (el) => typeof el !== "string",
    );

    const numberFields = [howManyPets, howManySterilized];
    const areNumberFieldsInvalid = !!numberFields.find(
      (el) => typeof Number(el) !== "number",
    );

    if (
      areStringFieldsInvalid ||
      areNumberFieldsInvalid ||
      !String(email).match(EMAIL_REGEX) ||
      !isValid
    ) {
      return;
    } else {
      const reqBody = {
        full_name: name,
        email,
        phone,
        municipality,
        pets_at_home: petsAtHome,
        how_many_pets: howManyPets,
        pet_types: petTypes,
        how_many_sterilized: howManySterilized,
        pet: window.location.href,
        pet_id: params.id,
        locale: locale.locale,
        isValid,
      };

      fetch("/api/adoptions", {
        method: "POST",
        body: JSON.stringify(reqBody),
      });

      setFormSubmit(true);
      setError(false);
    }
  };

  return !formSubmit ? (
    <>
      <Form method="POST" action="/api/adoptions" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="full_name"
          id="full_name"
          label={t("adoption-form.fields.name")}
          setCurrentValue={setName}
          required
        />
        <InnerWrapper>
          <Input
            type="email"
            name="email"
            id="email"
            label={t("adoption-form.fields.email")}
            setCurrentValue={setEmail}
            required
          />
          <Input
            type="text"
            name="phone"
            id="phone"
            label={t("adoption-form.fields.phone")}
            setCurrentValue={setPhone}
            required
          />
        </InnerWrapper>
        <Input
          type="text"
          name="municipality"
          id="municipality"
          label={t("adoption-form.fields.municipality")}
          setCurrentValue={setMunicipality}
          required
        />
        <InnerWrapper>
          <StyledSelect
            id="pets_at_home"
            name="pets_at_home"
            onChange={(e) => setPetsAtHome(e.target.value)}
            label={t("adoption-form.fields.pets-at-home")}
            defaultValue={petsAtHome}
            required
            showIcon={false}
          >
            <option value="1">{t("adoption-form.yes")}</option>
            <option value="0">{t("adoption-form.no")}</option>
          </StyledSelect>
          <Input
            type="number"
            min="0"
            name="how_many_pets"
            id="how_many_pets"
            label={t("adoption-form.fields.how-many-pets")}
            setCurrentValue={setHowManyPets}
            required
          />
        </InnerWrapper>
        <InnerWrapper>
          <Input
            type="text"
            name="pet_types"
            id="pet_types"
            label={t("adoption-form.fields.pet-types")}
            setCurrentValue={setPetTypes}
            required
          />
          <Input
            type="number"
            min="0"
            name="how_many_sterilized"
            id="how_many_sterilized"
            label={t("adoption-form.fields.how-many-sterilized")}
            setCurrentValue={setHowManySterilized}
            required
          />
        </InnerWrapper>
        <StyledButton type="submit">
          {t("adoption-form.fields.submit")}
        </StyledButton>
      </Form>
      {!!error && <Heading level="4">{t("adoption-form.error")}</Heading>}
    </>
  ) : (
    <Heading level="3">
      {t.rich("adoption-form.thank-you", {
        p: (chunks) => <p>{chunks}</p>,
      })}
    </Heading>
  );
};

export default AdoptionForm;
