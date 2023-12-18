const getCookie = (cookieName: string) => {
  const name = cookieName + "=";
  const cookieDecoded = decodeURIComponent(document.cookie);
  const cookieArray = cookieDecoded.split("; ");
  let res;
  cookieArray.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
};

export default getCookie;
