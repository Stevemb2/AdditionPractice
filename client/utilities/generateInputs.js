export const generateInputs = () => {
  const randomnInteger1 = Math.floor(Math.random() * 1000).toString();
  const randomnInteger2 = Math.floor(Math.random() * 1000).toString();

  return {
    input1: randomnInteger1,
    input2: randomnInteger2,
  };
};
