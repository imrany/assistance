// Import Natural
import * as natural from 'natural';
import trainingData from "./data/data.json"

function modal(input:string):string{
  // Create and configure the NaiveBayes classifier
  const classifier = new natural.BayesClassifier();

  // Train the NaiveBayes classifier
  trainingData.forEach(data => classifier.addDocument(data.request, data.response));
  classifier.train();

  // Test the NaiveBayes classifier with some input data
  const output:string = classifier.classify(input);

  // Output the prediction
 return output
}

export {
  modal
}