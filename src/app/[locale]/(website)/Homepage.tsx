"use client";

import {
  ContentWrapper,
  PetsWrapper,
  StyledContentText,
  StyledHeading,
  StyledTabs,
  StyledText,
  TitleWrapper,
  Wrapper,
} from "./Homepage.styles";
import { useTranslations } from "next-intl";
import TabsPanel from "@base/components/tabs/components/tabs-panel/TabsPanel";
import ServiceCard from "@base/components/service-card/ServiceCard";
import { PetTypes } from "@base/app/api/pets/pets.types";
import PetCard from "@base/components/pet-card/PetCard";
import Button from "@base/components/button/Button";
import { ButtonVariants } from "@base/components/button/Button.types";
import { useRouter } from "next-intl/client";
import BaseLink from "@base/components/link/Link";
import Carousel from "@base/components/carousel/Carousel";

type PropTypes = {
  data: {
    petsData: PetTypes;
  };
};

const Homepage: React.FC<PropTypes> = ({ data }) => {
  const { petsData } = data;
  const t = useTranslations();
  const router = useRouter();

  const BANNER_DATA = [
    {
      title: t("homepage.banners.volunteer.title"),
      subtitle: t("homepage.banners.volunteer.subtitle"),
      message: t("homepage.banners.volunteer.message"),
      image: "https://static.patudosvagos.pt/images/voluntariado.png",
      url: "volunteer",
    },
    {
      title: t("homepage.banners.donate.title"),
      subtitle: t("homepage.banners.donate.subtitle"),
      message: t("homepage.banners.donate.message"),
      image: "https://static.patudosvagos.pt/images/doar.png",
      url: "doar",
    },
    {
      title: t("homepage.banners.adopt.title"),
      subtitle: t("homepage.banners.adopt.subtitle"),
      message: t("homepage.banners.adopt.message"),
      image: "https://static.patudosvagos.pt/images/adotar.png",
      url: "adotar",
    },
  ];

  const handleClick = () => {
    router.push("/adotar");
  };

  return (
    <Wrapper>
      <Carousel data={BANNER_DATA} largestContentfulPaint={1} />
      <ContentWrapper>
        <div>
          <StyledHeading level="2">
            {t("homepage.about-us.title")}
          </StyledHeading>
          <StyledText>{t("homepage.about-us.text")}</StyledText>
        </div>
        <div>
          <StyledHeading level="2">
            {t("homepage.services.title")}
          </StyledHeading>
          <StyledTabs>
            <TabsPanel
              title={t("homepage.services.pet-hotel.title")}
              id="tab-1"
            >
              <ServiceCard
                service={t("homepage.services.pet-hotel.title")}
                title={t("homepage.services.pet-hotel.subtitle")}
                content={t.rich("homepage.services.pet-hotel.text", {
                  p: (chunks) => (
                    <StyledContentText>{chunks}</StyledContentText>
                  ),
                })}
              />
            </TabsPanel>
            <TabsPanel
              title={t("homepage.services.doggy-daycare.title")}
              id="tab-2"
            >
              <ServiceCard
                service={t("homepage.services.doggy-daycare.title")}
                title={t("homepage.services.doggy-daycare.subtitle")}
                content={t.rich("homepage.services.doggy-daycare.text", {
                  p: (chunks) => (
                    <StyledContentText>{chunks}</StyledContentText>
                  ),
                })}
              />
            </TabsPanel>
            <TabsPanel
              title={t("homepage.services.pet-sitting.title")}
              id="tab-3"
            >
              <ServiceCard
                service={t("homepage.services.pet-sitting.title")}
                title={t("homepage.services.pet-sitting.subtitle")}
                content={t.rich("homepage.services.pet-sitting.text", {
                  p: (chunks) => (
                    <StyledContentText>{chunks}</StyledContentText>
                  ),
                })}
              />
            </TabsPanel>
          </StyledTabs>
        </div>
        {petsData.data && (
          <div>
            <TitleWrapper>
              <StyledHeading level="2">
                {t("homepage.pets.title")}
              </StyledHeading>
              <Button onClick={handleClick} variant={ButtonVariants.Secondary}>
                {t("homepage.pets.cta")}
              </Button>
            </TitleWrapper>
            <PetsWrapper>
              {petsData.data.map((el, index) => (
                <BaseLink key={index} href={`adopt/${el.id}`}>
                  <PetCard data={el} />
                </BaseLink>
              ))}
            </PetsWrapper>
          </div>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;
