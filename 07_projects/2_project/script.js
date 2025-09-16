const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
  const height =  parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
    
  if(height==='' ||height<0 ||isNaN(height)){
    result.innerHTML="Please give a Valid height";
  }
  else if(weight==='' ||weight<0 ||isNaN(weight)){
    result.innerHTML="Please give a Valid weight";
  }
  else
  {const bmi= (weight/((height*height)/10000)).toFixed(2)
    let message =`your bmi is <span>${bmi}</span> <br>`;
     if (bmi > 24.9) {
            message += " You are <b>Overweight</b>";
            result.style.color = "red";   // 🔴 Overweight = red
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            message += " You are <b>Normal</b>";
            result.style.color = "green"; // 🟢 Normal = green
        }
        else {
            message += " You are <b>Underweight</b>";
            result.style.color = "orange"; // 🟠 Underweight = orange
        }

        result.innerHTML = message;
   
}
}
  
)