/* 
The PATH module comes in handy while working with file and directory paths. It provides you with various methods with which you can:

Join path segments together
Tell if a path is absolute or not
Get the last portion/segment of a path
Get the file extension from a path, and much more!
*/

const path = require('path');

const myPath =  'D:\\Aman Thakur\\NodeJs\\modules\\Path module\\app.js'
console.log(path.join('Aman Thakur','NodeJS' ,'modules'))
const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),

}
console.log(pathInfo)
console.log(path.sep)