const lang = ["js",'ruby','java','python','cpp'];

 
lang.forEach(function (val){
    console.log(val);
})

lang.forEach((item)=> {console.log(item);
})

function printMe(item){
    console.log(item);
    
}

lang.forEach(printMe)

lang.forEach((item,index,arr)=> {
     console.log(item, index, arr);
})