const fs = require('fs');

filename = process.argv[2];

fs.writeFile("./textfiles/"+filename,'you are awesome',(err,data)=>{
    if(err){
        throw err;
    }
    else{
                fs.readdir("./textfiles", (err, files) => {
                     console.log(files)
                                fs.writeFile("Filenames.txt","["+files+"]",(err,data)=>{
                                    if(err)
                                    throw err;

                                    console.log("The data is stored as")
                                    console.log(data);
                                });
                  });
            }

});
