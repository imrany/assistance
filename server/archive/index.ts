import csv from "csvtojson"
import { readFile, writeFile } from "fs"
const csv_file_path=`${__dirname}/S10_question_answer_pairs.csv`
let output_file=`${__dirname}/final.csv`

// csv()
//     .fromFile(csv_file_path)
//     .then((jsonObj)=>{
//         console.log(jsonObj)
//     })

const change_tocsv_format=()=>{
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
            change_tocsv_format()
        })
    })
}

read_file()