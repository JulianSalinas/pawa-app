const LocalDateTime = require('js-joda').LocalDateTime;
const DateTimeFormatter = require('js-joda').DateTimeFormatter;
   
function getCurrentDateString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('dd/MM/yyyy'))
}

function getCurrentTimeString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('hh:m:ss'))
}

const currentPath = './src/assets/';

function getAllBackgrounds(path, callback) {
    const fs = require('fs');
    fs.readdir(path, callback);
}

console.log(getCurrentDateString());
console.log(getCurrentTimeString());

getAllBackgrounds(currentPath, (error, filenames) => {
    if (!error){
        console.log("Backgrounds retrieved!");
        filenames = filenames.map(filename => currentPath + filename);
        console.log(filenames);
    }
    else {
        console.log("Error retrieving backgrounds!");
        console.log(error);
    }
});