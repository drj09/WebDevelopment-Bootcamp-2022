// Using Native Node Modules
    
    const fs = require("fs");
    function copyFiles() {
        // using function to copy file1 to file2
        console.log("Copy File");
        var a = fs.copyFileSync("file1.txt","file2.txt");
    }


// using external Node Modules : npm install superheroes
    var superheroes = require('superheroes');
    function superHeroNames() {
        let name =superheroes.random();
        console.log(name);
        let allHeroes = superheroes.all;
        console.log(allHeroes);
    }




// function to run 
    copyFiles();
    superHeroNames();


