//Регулярные выражения
const tinInput = document.querySelector("#tinInput");
const tinCheck = document.querySelector(".tinCheck");
const tinResult = document.querySelector(".tinResult");
const tinRegExp = /^1|0\d{13}$/;
tinCheck.addEventListener("click", () => {
    if (tinRegExp.test(tinInput.value)) {
        tinResult.innerText = "все верно";
        tinResult.style.color = "green";
    }else {
        tinResult.innerText = "ошибка";
        tinResult.style.color = "red";
    }
})

//Рекурсия
let position = 0;

document.querySelector('.child').addEventListener('click', () => {
    position = position + 10;

    if (position > 400) return;
    document.querySelector('.child').style.left = position + 'px';
});




