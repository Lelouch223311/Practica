
/*
let age = +prompt('Здравствуйте ! Для доступа к странице,укажите пожалуйста ваш возраст\n\Напоминаем: Сайт 16+ !', '16')
if(age < 16){
    alert('Извините,вы не имеете доступа к этой странице !\n\Ваш Возраст меньше чем нужен для посещения этой страницы !')
    // similar behavior as an HTTP redirect
// window.location.replace("http://stackoverflow.com");

// similar behavior as clicking on a link
    window.location.href = "./index.html";
} else{
    alert('Проверка на возраст прошла успешно !Вы указали что Ваш возраст '+age+' !')
}
*/

let arr = []
let name = document.getElementById('name')
let family = document.getElementById('family')
let email = document.getElementById('email')


let output = document.querySelector(".output")


function Save() {
    arr.push({ name: name.value, family: family.value, email: email.value })
    alert("Подтвердите своё действие !")
    // console.log(arr)
    showUserName()
}

function showUserName() {

    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {


        output.innerHTML += arr[i].name + "<br>"


    }
}