let offers=[{id:4,valid:"yes"},{id:5,valid:"yes"},{id:6,valid:"no"}];
let sku=[{id:4,str:"selected all"},{id:5,str:"n/a"},{id:6,str:"selected all"}];

function check(arr1,arr2)
{
   let newarr=[];
  newarr=offers.filter(val=>val.valid==="yes").map(val=>(sku.some(item=>item.id===val.id&&item.str==="selected all")));
  return newarr;
                                                                                                         
     }
console.log(check(offers,sku))