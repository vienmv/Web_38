//learning
//1. require() other file 
const {str : myString,str2} =require('./library')
console.log(str2)
console.log(myString)
const { number} =require('./library2')
console.log(number)
//2.require() build-in package 
// const fs=require('fs')
// const filePath='./package.json'
// const fileContent=fs.readFileSync(filePath,'utf-8')
// console.log(fileContent)
// fs.readFile(filePath,'utf-8',(err,fileContent)=>{
// if(err){
//     console.log('Read file err !',err)
// }else{
//     console.log('File content',fileContent)
// }
// })
// fs.unlink('path/file.txt', (err) => {
//     if (err) throw err;
//     console.log('path/file.txt was deleted');
//   });
//   console.log(s.startSync().isDirectory("./library2"))
//fs.startSync().isFile() 
//fs.startSync().isDirectory()
//lay thong tin fs.start()
// list file trong thu muc fs.readdir
//xoa file fs.unlink
//xoa thu muc fs.mrdir
//3. require() installed package