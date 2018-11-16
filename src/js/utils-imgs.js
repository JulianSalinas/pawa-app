function getAllBackgrounds(path, callback) {
    const fs = require('fs');
    fs.readdir(path, callback);
}

// This is an example of how to use the above function
getAllBackgrounds(currentPath='./src/assets/backgrounds/', (error, filenames) => {
    if (!error){
        filenames = filenames.map(filename => currentPath + filename);
        console.log(filenames);
    }
    else {
        console.log('Error retrieving backgrounds!');
        console.log(error);
    }
});