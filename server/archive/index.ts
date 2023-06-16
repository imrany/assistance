import csv from "csvtojson"
const csv_file_path=`${__dirname}/example.csv`
 
let str="hello  string  and people"
// csv()
//     .fromFile(csv_file_path)
//     .then((jsonObj)=>{
//         console.log(jsonObj)
//     })

const replace=()=>{
   let new_str= str.replace(/ /g,",")
   console.log(new_str)
}

const split=()=>{
    let new_str= str.split("  ").join("+")
   console.log(new_str)
}
split()