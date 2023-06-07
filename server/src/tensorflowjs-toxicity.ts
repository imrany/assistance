// Import TensorFlow.js library
// import * as tf from '@tensorflow/tfjs';

// Load the toxicity classifier model
import * as toxicity from '@tensorflow-models/toxicity';

// Load the toxicity classifier model
toxicity.load()
  .then((model:any) => {
    // Test the model with some input data
    const input = "You are so stupid";
    model.classify([input])
      .then((predictions:any) => {
        // Output the prediction
        console.log("Toxicity predictions:", predictions);
      })
      .catch((error:any) => {
        console.error("Prediction error:", error);
      });
  })
  .catch((error:any) => {
    console.error("Model loading error:", error);
  });