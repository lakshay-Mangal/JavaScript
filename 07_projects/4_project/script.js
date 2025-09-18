function getRandomColor(){
  return '#'+ Math.floor(Math.random()* (256*256*256)).toString(16)
}
let body= document.querySelector('body');
let changeColor=null;
 document.querySelector('#start').addEventListener('click',()=>{
   if(changeColor) {clearInterval(changeColor) }
  changeColor = setInterval(()=>{
    body.style.backgroundColor= getRandomColor();
  },1000)
  console.log("Started Changecolor");
 })

 document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(changeColor);
    changeColor=null;
    console.log("stopped changeColor")
 })
 
