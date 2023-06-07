// Import Natural
import * as natural from 'natural';

// Create and configure the NaiveBayes classifier
const classifier = new natural.BayesClassifier();

// Define the training data
const trainingData = [
  { text: "You are stupid", label: "insult" },
  { text: "I like your shirt", label: "non-insult" },
  { text: "I love you", label: "non-insult" },
  { text: "I hate you", label: "insult" },
  // Add more labeled examples to your training data
];

// Train the NaiveBayes classifier
trainingData.forEach(data => classifier.addDocument(data.text, data.label));
classifier.train();

// Test the NaiveBayes classifier with some input data
const input = "I like shirt";
const output = classifier.classify(input);

// Output the prediction
if (output === "insult") {
  console.log("Input is an insult");
} else {
  console.log("Input is not an insult");
}
