const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const counter = document.getElementById("counter");


let count = 0;
increase.addEventListener("click", ()=>{
    count= count + 1;
    counter.innerHTML = count;

});

decrease.addEventListener("click", ()=>{
    count= count - 1;
    counter.innerHTML = count;

});

reset.addEventListener("click", ()=>{
    count= 0;
    counter.innerHTML = count;

});



            