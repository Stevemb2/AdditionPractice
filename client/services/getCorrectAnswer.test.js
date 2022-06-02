import axios from "axios";
import { getCorrectAnswer } from "./getCorrectAnswer";

jest.mock("axios");

it("get correct answer", async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: { correctAnswer: 111 } })
  );

  const input1 = 34;
  const input2 = 67;

  const { correctAnswer } = await getCorrectAnswer(input1, input2);

  expect(correctAnswer).toBe(111);
});
