// modify the structure of the object like the below 
/*{name:"Thasneem",
   id:19,
 addr:{
      city:"Kerela",
      country:"india",
       ph:"9849890387"
    },   
  } */
 let users = [{
        name: "syed",
        id: 9,
        addr: {
            city: "hyd",
            country: "india"
        },
        ph: "9849890386"

    },
    {
        name: "rasna",
        id: 19,
        addr: {
            city: "Kerela",
            country: "india"
        },
        ph: "9849890388"
    },
    {
        name: "Thasneem",
        id: 19,
        addr: {
            city: "Kerela",
            country: "india"
        },
        ph: "9849890387"
    }
]

/*
for(i=0; i<users.length; i++){
    users[i].addr.ph = users[i].ph;
    delete users[i].ph;
}
console.log(users) */

// let newusers = users.map((obj)=>{
//       obj.addr.ph=obj.ph;
//       delete obj.ph;
//       return obj
//     })
//     console.log(newusers)
users.forEach((obj)=>{
      obj.addr.ph=obj.ph;
      delete obj.ph;
    })
    console.log(users)

   