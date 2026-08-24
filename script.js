const w = Math.floor(Math.random()*100)+1;
let attems =  0;

const num = document.querySelector(".num");
const guess = document.querySelector(".guess");
const result = document.querySelector(".result");
const pop = document.querySelector(".pop");
guess.addEventListener("click", function(){
        const q = Number(num.value);
        num.value = "";
        if(q > w){
            result.textContent = "Меньше нафик"
            attems++
            pop.textContent = `Попыток: ${attems}`
        }else if(q < w){
            result.textContent = "Больше нафик"
            attems++;
            pop.textContent = `Попыток: ${attems}`
        }else{
            result.textContent = "Угадал сука"
            pop.textContent = `Красава, справился за ${attems} попыток`
        }
})

