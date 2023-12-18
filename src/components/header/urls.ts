import urls from "@base/urls.json";

const urlsToRender = Object.values(urls);

const LINKS = [
  { href: urlsToRender[0].adopt.href, text: urlsToRender[0].adopt.text },
  {
    href: urlsToRender[0]["about-us"].href,
    text: urlsToRender[0]["about-us"].text,
  },
  {
    href: urlsToRender[0].volunteer.href,
    text: urlsToRender[0].volunteer.text,
  },
  { href: urlsToRender[0].donate.href, text: urlsToRender[0].donate.text },
];

export default LINKS;
