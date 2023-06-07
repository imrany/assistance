// Import brain.js library
import * as brain from 'brain.js';

// Create the LSTM neural network
const net = new brain.recurrent.LSTM();

// Define the training data
const trainingData = [
  { input: "You are stupid", output: "insult" },
  { input: "I like your shirt", output: "non-insult" },
  { input: "I love you", output: "non-insult" },
  { input: "I hate you", output: "insult" },
  // Add more labeled examples to your training data
];

// Train the LSTM neural network
net.train(trainingData, { iterations: 1000, errorThresh: 0.01 });

// Test the LSTM neural network with some input data
const input = "I hate you";
const output = net.run(input);

// Output the prediction
if (output === "insult") {
  console.log("Input is an insult");
} else {
  console.log("Input is not an insult");
}
