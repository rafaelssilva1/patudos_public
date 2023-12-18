import urls from "@base/urls.json";

const urlsToRender = Object.values(urls);

const LINKS = [
  {
    title: "footer.title.column-1",
    links: [
      {
        href: urlsToRender[0].volunteer.href,
        text: urlsToRender[0].volunteer.text,
      },
      { href: urlsToRender[0].donate.href, text: urlsToRender[0].donate.text },
      {
        href: urlsToRender[0]["privacy-policy"].href,
        text: urlsToRender[0]["privacy-policy"].text,
      },
      {
        href: urlsToRender[0]["adoption-conditions"].href,
        text: urlsToRender[0]["adoption-conditions"].text,
      },
    ],
  },
  {
    title: "footer.title.column-2",
    links: [
      { text: "footer.links.wire-transfer.text" },
      { text: "footer.links.mbway.text" },
      { text: "footer.links.paypal.text" },
    ],
  },
];

export default LINKS;
