function getAllBackgrounds(path, callback) {
    var index = 0; 
    var fs = require('fs');
    fs.readdir(path, callback);
}

getAllBackgrounds(currentPath='./src/assets/backgrounds/', (error, filenames) => {
    if (!error){
        filenames = filenames.map(filename => currentPath + filename);
        console.log(filenames);
    }
    else {
        console.log("Error retrieving backgrounds!");
        console.log(error);
    }
});