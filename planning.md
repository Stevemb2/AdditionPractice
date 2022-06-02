## Unit Tests

I added a unit test to test getCorrectAnswers.js by mocking out an axios call.

## Adding More Complex Mathematical Expressions

To add more complex mathematical expressions an option for the new mathematical expression must be added to the user interface. If new inputs are needed they must also be randomnly generated in generateInputs.js. The new mathematical expression must then be sent back to the node server as a get request query input. The matchController.js file in the server must check for this new query input and on the basis of that select a new url for the new mathematical operation. Another rest service call is needed with the new url and query params to get the answer.

## Maintain a History of Questions

To maintain a history of questions, a database can be added and the mathController can insert a record with each question and answer. Must first check if a question has already been entered into the database so as to not add duplicate questions.

## Give Multiple Questions at Once

To give multiple questions at once, input text fields can be added for each question and a rest service call can be made for each question, or they can be sent all together.

## Limit the Number of Incorrect Answers

When the number of incorrect answers reaches a limit display a message to the user telling the user that he has reached his limit of incorrect answers and disable the text field and buttons.

## Keep a running total score

I am keeping running scores showing the total number of correct and incorrect answers and a button to reset these scores.
