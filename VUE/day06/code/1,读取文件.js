const fs = require('fs')
const path = require('path')

function getFilePath(path,successCb,errorCb){
  fs.readFile(path,'utf-8',(error,dataStr)=>{
    if(error) return errorCb(error);
    successCb(dataStr)
  })
}

getFilePath(path.join(__dirname,'./file/1.txt'),function(data){
  console.log(data);
  getFilePath(path.join(__dirname,'./file/2.txt'),function(data){
    console.log(data);
    getFilePath(path.join(__dirname,'./file/3.txt'),function(data){
      console.log(data);
      
    })
  })
})
