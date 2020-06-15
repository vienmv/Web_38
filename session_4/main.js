//learning
//1. require() other file 
// const {str : myString,str2} =require('./library')
// console.log(str2)
// console.log(myString)
// const { number} =require('./library2')
// console.log(number)
//2.require() build-in package 
//const fs=require('fs')
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

// const os = require("os") 
// let platform = os.platform()
// console.log(platform) 


// const path =require('path')
// console.log(__dirname)
// console.log(path.join(__dirname),'package.json')
// console.log(path.resolve(__dirname),'../package.json')



// hash MD5
// const crypto = require('crypto') // encode/decode, hash
// let str ="abc"
// let strHashed= hashMd5(str)
// console.log('str hash',strHashed)

// function hashMd5(str){
//     return crypto.createHash('md5').update(str).digest("hex")
// }





// const zlib= require("zlib")
// let strSource="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum hendrerit suscipit. Donec vel mattis nulla, ut ultricies ante. Sed pellentesque dui non hendrerit bibendum. Cras bibendum imperdiet augue, nec ullamcorper purus lacinia posuere. Suspendisse gravida ornare justo, eu ultrices urna rhoncus iaculis. In ullamcorper egestas erat eu gravida. Aliquam mollis pretium lectus quis efficitur. Proin luctus consectetur suscipit. Suspendisse egestas suscipit sapien, sed consectetur leo mattis non. Donec semper blandit dui non rhoncus. Duis finibus aliquet lacus id bibendum."
// let strZip = zlib.deflateSync(strSource).toString("base64")
// console.log("Str zip " ,strZip)

//const util= require("util")

//3. require() installed package
// const $ =require("jquery")
// console.log($)

// const _ = require("lodash")
// console.log(_.camelCase('abc xyz'))

// let obj = {
//  a:{
//      b: {
//          c:{
//              d:1
//          }
//      }
//  }
// }
// let d=_.get(obj,'a.b.c')
// console.log(d)

//open server with express
const express = require("express")
const app = express()

app.get('/',(rep,res)=>{
    res.send("Hello ")
})

app.get("/product",(req,res)=>{
    res.json([
        {id:1,title:"product 1"},
        {id:1,title:"product 1"}
    ])
})

app.listen(9000)