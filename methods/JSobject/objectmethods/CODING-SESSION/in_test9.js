//Q: can you share question in the chat
/*you have two array above (offers and sku) 

task is to chekc for valid offers in first array ,then compare the id of valid offeres in second array
 and  get true if the str property of the valid id is "selectedAll" , or else return false

 */

const { off } = require("process")

let offers=[{id:4,valid:"yes",},
            {id:5,valid:"yes",},
            {id:6,valid:"No"},]


let sku =[{id:4,str:"selected all"},
          {id:5,str:"N/A"},
          {id:6,str:"selected all"},]


let find = offers.filter(a => sku.some(b => a.id === b.id && a.valid == "yes" && b.str == "selected all"));

//console.log(find)


function check(offeres,sku){
    let nw = [];
    let r = [];
    for(let i=0; i<offeres.length; i++){
        if(offeres[i].valid == "yes"){
            nw.push(offeres[i]);
            console.log(nw)
        }
    }
    for(let obj of nw){
        r.push(...sku.filter(a => a.id == obj.id))
    } 
    console.log("result:",r)
    let result = r.map((val) => val.str == "selected all"? true: false)
    return result;
}
console.log(check(offers,sku))