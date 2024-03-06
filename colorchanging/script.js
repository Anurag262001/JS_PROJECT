const colorblock = document.querySelectorAll('.block');
const heading = document.querySelector('.heading');
console.log(colorblock);
colorblock.forEach(function(gettingblock){
    console.log(gettingblock);
    gettingblock.addEventListener('click',function(event){
        console.log(event);
      /*   console.log(event.target);
        console.log(event.target.className);
        if(event.target.id === 'b1'){
            heading.style.color = 'cyan';
        }
        if(event.target.id === 'b2'){
            heading.style.color = 'red';
        }
        if(event.target.id === 'b3'){
            heading.style.color = 'green';
        }
        if(event.target.id === 'b4'){
            heading.style.color = 'orange';
        } */
    })
})