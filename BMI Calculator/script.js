const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit',function(event){
    event.preventDefault();
    const heightinput = document.querySelector('#height').value;
    const weightvalue = document.querySelector('#weight').value;
    const result = document.querySelector('.results');
    if(heightinput === "" || heightinput < 0 || isNaN(heightinput)){
        result.innerHTML = `${heightinput}`;
    }else if(weightvalue === "" || weightvalue < 0 || isNaN(weightvalue)){
            result.innerHTML = `${weightvalue}`;
    }
    else{
      const bmi =  (weightvalue/((heightinput*heightinput)/10000)).toFixed(2);
      result.innerHTML = `<span>${bmi}</span>`;
        }
})