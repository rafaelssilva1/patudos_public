"use server";

const PASSING_SCORE = 0.5;

const verifyToken = async ({ token }: { token: string }) => {
  const score = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${token}`,
  })
    .then((reCaptchaRes) => reCaptchaRes.json())
    .then((reCaptchaRes) => {
      return reCaptchaRes.score;
    });
  if (score > PASSING_SCORE) {
    return true;
  } else {
    return false;
  }
};

export default verifyToken;
