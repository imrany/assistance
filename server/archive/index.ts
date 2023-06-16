import csv from "csvtojson"
import { readFile } from "fs"
const csv_file_path=`${__dirname}/example.csv`
 
let str="hello  string  and people"
// csv()
//     .fromFile(csv_file_path)
//     .then((jsonObj)=>{
//         console.log(jsonObj)
//     })

const read_file=()=>{
    readFile(csv_file_path,"utf8",(err:any,data:any)=>{
        // Display the file content
        console.log(data);
    })
}

const split=(str:any)=>{
    let new_str= str.split("  ").join("+")
   console.log(new_str)
}
read_file()