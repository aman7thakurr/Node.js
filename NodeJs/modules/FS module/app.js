/* 
FS module
This module helps you with file handling operations such as:

Reading a file (sync or async way)
Writing to a file (sync or async way)
Deleting a file
Reading the contents of a director
Renaming a file
Watching for changes in a file, and much more
*/

const { ifError } = require('assert');
const fs = require('fs')
//creating folder


// fs.mkdir('../../Event Driven Programming',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Directory created");
//     }
// })


//creating a file into a  folder

const  data = 'console.log("Aman");';

/* In case you do not want the original data to get deleted and just want the new data to be added/appended at the end of the file,
 you need to make a little change in the above code by adding this "options object": {flag: 'a'} as the third parameter to writeFile() – like this:*/

// fs.writeFile('./Event Driven Programming/app.js',data,{flag:'a'},(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File created");
//     }

// })


//reading  the file 

// fs.readFile('./Event Driven Programming/app.js','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
//     })



//reading the directory/folder


// fs.readdir('./Event Driven Programming',(err,files)=>{
    //     if(err){
    //         console.log(err);
    //         }
    //         console.log('directory read  successfully ! here are the files : ');
    //         console.log(files)
    // })



    //rename file 


// fs.rename('./Event Driven Programming/app.js', './Event Driven Programming/index.js',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File renamed");
//         }
// })




//deleting  a file

// fs.unlink('./Event Driven Programming/index.js',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file deleted')
//     }
// })


//deleting a directory


// fs.rmdir('./Event Driven Programming',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('directory removed');
//     }
// })