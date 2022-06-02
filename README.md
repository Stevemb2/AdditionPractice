## Addition Practice Application

## What Application Does

The AdditonPractice application prompts users with an addition of two numbers to evaluate.

The user then enters an answer and the application checks if this answer is the correct one.

The application obtains the correct answer by sending off a web service request to the url: 'https://api.mathjs.org' with appropriate request parameters.

If the answer is correct the application displays a message stating that the user's answer is correct.

If the user enters an answer that is not a number the application displays a message stating that the user must enter a valid number.

If the user enters an answer that is incorrect, the application displays a message stating that the user entered in an incorrect value.

The application also keeps a running total of the number of correct and incorrect answers. The user can reset the score by pressing the 'Reset Score' button.

## Technologies Used

This application has a web client built with React and a server running on Nodejs.

This application uses Parcel to bundle the code.

To start up parcel run the command, 'npm run dev'.

To start up the node server run the command, 'node ./server/index.js'.

Unit tests are written in Jest. To run the unit tests run the command 'npm run test'.

Other developers can contribute to the code base by opening up a pull request.
