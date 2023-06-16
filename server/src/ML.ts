import * as natural from 'natural';
import * as brain from 'brain.js';
import data from "./data/data.json"

class ML {
    input:string
    constructor(input:string) {
        this.input=input
    }
    brain_ml(){
        // Create the LSTM neural network
        const net = new brain.recurrent.LSTM();
        // Train the LSTM neural network
        const trainingData=data.map(item=>({
            input: item.Question,
            output: item.Answer
        }));
        net.train(trainingData, { iterations: 1, errorThresh: 0.01 });
        // Test the LSTM neural network with some input data
        const output = net.run(this.input);
        return output
    }
    natural_ml(){
        // Create and configure the NaiveBayes classifier
        const classifier = new natural.BayesClassifier();
        // Train the NaiveBayes classifier
        data.forEach(data => classifier.addDocument(data.Question, data.Answer));
        classifier.train();
        // Test the NaiveBayes classifier with some input data
        const output:string = classifier.classify(this.input);
        return output
    }
}

export{
    ML
}