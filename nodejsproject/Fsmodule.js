// we can interact with the files  usinf fs module 

const fs = require('fs');

fs.writeFile('new.txt', 'Sudeep', function(err,data){ // file creation 
    if(err){
        console.log('error')
    }else{
        fs.readFile('new.txt', function(err,data){ //file read
            console.log(data.toString())

        })
    }
})      
       
// fs.rename('new.txt', "sample.txt", (err,data) =>{  //rename the file
//     if(err){
//         console.log('error')
//     }else{
//      console.log("suceessful change")
//     }

// })

fs.unlink('text.txt', ()=>{
    console.log("deleted")        // delect file 
})

fs.appendFile('sample.txt', 'Nidhi,Kalyani.Tejo', (err)=>{ //update the file 
    if(err) throw err;

    console.log('appended the data')
})

