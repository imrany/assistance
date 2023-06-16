import csv from "csvtojson"
import { readFile, writeFile } from "fs"
const txt_file_path=`${__dirname}/S10_question_answer_pairs.txt`
let output_file=`${__dirname}/data/final.csv`

const txt_to_csv=()=>{
    readFile(output_file,"utf8",(err:any,data:any)=>{
        let new_data=data.split("    ").join(",")
        writeFile(output_file,new_data,()=>{
            console.log('Converted to csv')
            csv_to_json()
        })
    })
}

const read_file=()=>{
    readFile(txt_file_path,"utf8",(err:any,data:any)=>{
        let new_data=data.split("	").join("    ")
        writeFile(output_file,new_data,()=>{
            console.log('spacing changed')
            txt_to_csv()
        })
    })
}

function csv_to_json(){
    csv()
    .fromFile(output_file)
    .then((jsonObj)=>{
        console.log(jsonObj)
    })
}

read_file()
