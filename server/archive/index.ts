import csv from "csvtojson"
import { readFile, writeFile } from "fs"
const csv_file_path=`${__dirname}/S10_question_answer_pairs.txt`
let output_file=`${__dirname}/data/final.csv`

const txt_to_csv=()=>{
    readFile(output_file,"utf8",(err:any,data:any)=>{
        let new_data=data.split("    ").join(",")
        writeFile(output_file,new_data,()=>{
            console.log('File added')
        })
    })
}

const read_file=()=>{
    readFile(csv_file_path,"utf8",(err:any,data:any)=>{
        let new_data=data.split("	").join("    ")
        writeFile(output_file,new_data,()=>{
            console.log('spacing changed')
            txt_to_csv()
        })
    })
}

read_file()
// csv()
//     .fromFile(csv_file_path)
//     .then((jsonObj)=>{
//         console.log(jsonObj)
//     })