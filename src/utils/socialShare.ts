export enum SocialMedia {
  WhatsApp = "Whatsapp",
}

type ArgTypes = {
  text: string;
  socialMedia?: SocialMedia;
};

const PHONE_NUMBER = "+351915152155";

const socialShare = ({
  text,
  socialMedia = SocialMedia.WhatsApp,
}: ArgTypes) => {
  switch (socialMedia) {
    case SocialMedia.WhatsApp:
      return `https://api.whatsapp.com/send/?phone=${PHONE_NUMBER}&text=${encodeURIComponent(
        text,
      )}`;
    default:
      return;
  }
};

export default socialShare;
