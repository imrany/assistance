import csv from "csvtojson"
import { readFile, writeFile } from "fs"
const txt_file_path=`${__dirname}/S10_question_answer_pairs.txt`
let output_file=`${__dirname}/data/final.csv`

const txt_to_csv=(output_file:string)=>{
    readFile(output_file,"utf8",(err:any,data:any)=>{
        let new_data=data.split("    ").join(",")
        writeFile(output_file,new_data,()=>{
            console.log('Converted to csv file')
            csv_to_json(output_file)
        })
    })
}

const read_file=()=>{
    readFile(txt_file_path,"utf8",(err:any,data:any)=>{
        let new_data=data.split("	").join("    ")
        writeFile(output_file,new_data,()=>{
            console.log('spacing changed')
            txt_to_csv(output_file)
        })
    })
}

function csv_to_json(output_file:string){
    csv()
    .fromFile(output_file)
    .then((jsonObj:any)=>{
        writeFile(`${__dirname}/data/final.json`,JSON.stringify(jsonObj), () => {
            console.log(`Converted ${output_file} to json`)
        })
    })
}

read_file()
