type ArgTypes = {
  birthDate?: string | Date;
};
type DiffArgTypes = {
  today: Date;
  birthDate?: Date;
};
type ReturnType = {
  ageInMonths: number;
  age: {
    yearDiff: number;
    monthDiff: number;
  };
};

const differenceInMonths = ({ today, birthDate }: DiffArgTypes): ReturnType => {
  if (!birthDate) return { ageInMonths: 0, age: { yearDiff: 0, monthDiff: 0 } };

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const yearDiff = today.getFullYear() - birthDate.getFullYear();

  const age = { yearDiff, monthDiff: monthDiff ? monthDiff : 1 };

  return { ageInMonths: monthDiff + yearDiff * 12, age };
};

const getAgeText = ({ birthDate }: ArgTypes) => {
  if (!birthDate) return { ageText: 0, age: { yearDiff: 0, monthDiff: 0 } };

  const today = new Date();
  const date = new Date(birthDate);

  const { ageInMonths, age } = differenceInMonths({ today, birthDate: date });

  let ageText;
  if (ageInMonths <= 5) {
    ageText = "other-info.age.baby";
  } else if (ageInMonths <= 12) {
    ageText = "other-info.age.junior";
  } else if (ageInMonths <= 95) {
    ageText = "other-info.age.adult";
  } else {
    ageText = "other-info.age.senior";
  }

  return { ageText, age };
};

export default getAgeText;
