import axios from "axios";

export const getCorrectAnswer = async (input1, input2) => {
  const url = `http://localhost:3000/getCorrectAnswer?input1=${input1}&input2=${input2}`;

  try {
    const response = await axios.get(url);

    const correctAnswer = response.data.correctAnswer;

    if (correctAnswer) {
      return { correctAnswer };
    } else {
      return { err: response.data.err };
    }
  } catch (err) {
    return { err };
  }
};
