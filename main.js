let text = document.getElementById("text");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let del = document.getElementById("del");
let save = document.getElementById("save");
let id = document.getElementById("id");
let num = 0;
let arr = []

plus.addEventListener('click', () => {
    text.innerHTML = ++num;
})

minus.addEventListener("click", () => {
    if(num <= 0){
        num = 0;
        text.innerHTML = num
    }
    else{
        text.innerHTML = --num;
    }
})

del.addEventListener("click", (x) => {
    num = 0;
    text.innerHTML = num;
    arr = []
    id.innerHTML = arr
    localStorage.setItem("arr", JSON.stringify(arr))
})

save.addEventListener('click', () => {
    id.textContent = ""
    arr.push({number: num})
    localStorage.setItem("arr", JSON.stringify(arr))
    read()
    num = 0
    text.innerHTML = num;
})

 function read(){
    arr.map(item => {
        id.textContent += `${item.number}, `
    })
}


(function (){
    arr = JSON.parse(localStorage.getItem("arr")) || []
    read()
})()
