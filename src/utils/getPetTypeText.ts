type ArgTypes = {
  type?: string;
};

const getPetType = ({ type }: ArgTypes) => {
  switch (type?.toString()) {
    case "1":
      return "other-info.type.dog";
    default:
      return "other-info.type.cat";
  }
};

export default getPetType;
