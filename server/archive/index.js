"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvtojson_1 = __importDefault(require("csvtojson"));
const fs_1 = require("fs");
const txt_file_path = `${__dirname}/S10_question_answer_pairs.txt`;
let output_file = `${__dirname}/data/final.csv`;
const txt_to_csv = (output_file) => {
    (0, fs_1.readFile)(output_file, "utf8", (err, data) => {
        let new_data = data.split("    ").join(",");
        (0, fs_1.writeFile)(output_file, new_data, () => {
            console.log('Converted to csv file');
            csv_to_json(output_file);
        });
    });
};
const read_file = () => {
    (0, fs_1.readFile)(txt_file_path, "utf8", (err, data) => {
        let new_data = data.split("	").join("    ");
        (0, fs_1.writeFile)(output_file, new_data, () => {
            console.log('spacing changed');
            txt_to_csv(output_file);
        });
    });
};
function csv_to_json(output_file) {
    (0, csvtojson_1.default)()
        .fromFile(output_file)
        .then((jsonObj) => {
        (0, fs_1.writeFile)(`${__dirname}/data/final.json`, JSON.stringify(jsonObj), () => {
            console.log(`Converted ${output_file} to json`);
        });
    });
}
read_file();
