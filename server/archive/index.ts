import csv from "csvtojson"
import { createReadStream, readFile, writeFile } from "fs"
import { createInterface } from "readline"
const csv_file_path=`${__dirname}/S10_question_answer_pairs.csv`
 
let output_file=`${__dirname}/outexample.csv`
// csv()
//     .fromFile(csv_file_path)
//     .then((jsonObj)=>{
//         console.log(jsonObj)
//     })

async function processLineByLine() {
  const fileStream =createReadStream(csv_file_path);
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    let new_data=line.split("    ").join(",")
    writeFile(`${__dirname}/outexample.csv`,new_data,(data:any)=>{
        console.log('File added')
    })
    // csv()
    // .fromFile(csv_file_path)
    // .then((jsonObj)=>{
    //     console.log(jsonObj)
    // })
    // console.log(new_data);
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}`);
  }
}

const change_tocsv_format=()=>{
    readFile(output_file,"utf8",(err:any,data:any)=>{
        let new_data=data.split("    ").join(",")
        writeFile(`${__dirname}/outexamplescvformat.csv`,new_data,()=>{
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