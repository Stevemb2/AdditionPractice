import axios from "axios";

const mathController = (mathRouter) => {
  mathRouter.get("/getCorrectAnswer", async (req, res) => {
    res.type("application/json");

    const input1 = req.query.input1;
    const input2 = req.query.input2;

    let url = `https://api.mathjs.org/v4/?expr=${input1}%2B${input2}`;

    try {
      const response = await axios.get(url);
      const correctAnswer = response.data;

      res.send({
        correctAnswer,
      });
    } catch (err) {
      res.send({
        err,
      });
    }
  });
};

export default mathController;
