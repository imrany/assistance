// Import TensorFlow.js library
import * as tf from '@tensorflow/tfjs';

// Define the training data
const trainingData = [
  { input: "You are stupid", output: [1] },
  { input: "I like your shirt", output: [0] },
  // Add more labeled examples to your training data
];

// Convert training data to TensorFlow tensors
const xs = trainingData.map(data => tf.tensor2d(data.input, [1, data.input.length]));
const ys = trainingData.map(data => tf.tensor2d(data.output, [1, data.output.length]));

// Create the text classification model
const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [xs[0].shape[1]], units: 8, activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// Compile the model
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

// Train the model
model.fit(xs, ys, { epochs: 100 })
.then(() => {
    console.log('Training completed!');
})
.catch((error:any) => {
    console.error('Training error:', error);
});

// Test the model with some input data
const input = "You are so annoying";
const inputTensor = tf.tensor2d([input], [1, input.length]);
const prediction = model.predict(inputTensor);
const insultProbability = prediction.dataSync()[0];
console.log("Insult probability:", insultProbability);
