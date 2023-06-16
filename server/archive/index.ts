import csv from "csvtojson"
const csv_file_path=`${__dirname}/example.csv`
 
let str="hello  string  and people"
// csv()
//     .fromFile(csv_file_path)
//     .then((jsonObj)=>{
//         console.log(jsonObj)
//     })


const split=(str:any)=>{
    let new_str= str.split("  ").join("+")
   console.log(new_str)
}
split(csv_file_path)