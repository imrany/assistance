// Import brain.js library
import * as brain from 'brain.js';
import data from "./data/data.json"
// Create the LSTM neural network
const net = new brain.recurrent.LSTM();

const brain_model=(input:string)=>{
  //training health data
  const trainingData=data.map(item=>({
      input: item.Question,
      output: item.Answer
  }));

  // Train the LSTM neural network
  net.train(trainingData, { iterations: 1000, errorThresh: 0.01 });

  // Test the LSTM neural network with some input data
  const output = net.run(input);
  return output
}

export {
  brain_model
}