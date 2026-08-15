const w = Math.floor(Math.random()*100)+1;


const num = document.querySelector(".num");
const guess = document.querySelector(".guess");
const result = document.querySelector(".result")
guess.addEventListener("click", function(){
        const q = Number(num.value);
        num.value = "";
        if(q > w){
            result.textContent = "Меньше нафик"
        }else if(q < w){
            result.textContent = "Больше нафик"
        }else{
            result.textContent = "Угадал сука"
        }
})