import csv from "csvtojson"
const csv_file_path=`${__dirname}/example.csv`

csv()
    .fromFile(csv_file_path)
    .then((jsonObj)=>{
        console.log(jsonObj)
    })