import fs from "fs";


const readFileAndOp = () => {
  return new Promise((resolve, reject) => {
    const opFile = fs.readFileSync("./op.json", "utf8");
    const jsOp = JSON.parse(opFile);
    
    if(!jsOp.hasOwnProperty('val1')) {
        reject('no val1 found')
    }

    if(!('val2' in jsOp)){
        reject('no val2 found')
    }

    // switch (jsOp.op) {
    //   case "add":
    //     resolve(jsOp.val1 + jsOp.val2);

    //   default:   
    //     reject("no op found");
    // }

    jsOp.op == "add" ? resolve(jsOp.val1 + jsOp.val2) : reject ('no op found');

    jsOp.op2 == "sub" ? resolve(jsOp.val1 - jsOp.val2) : reject ('no op found');

    
  });
};


const writeFileoutPut = (output) => {
  const outputJson = {
    output: output
  }
    const writeFileOP = fs.writeFileSync('./op2.json',JSON.stringify(outputJson))
    console.log('writeFileOP',writeFileOP)
}

const main = async () => {
  console.log("before read");

  try {
    const returnData = await readFileAndOp();

    console.log("returnData", returnData, typeof returnData);
    writeFileoutPut(returnData) 
} catch (error) {
    console.log("error", error);
  }
  console.log("After read");
};

main();