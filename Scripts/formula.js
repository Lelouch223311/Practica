let age = +prompt('Здравствуйте ! Для доступа к странице,укажите пожалуйста ваш возраст\n\Напоминаем: Сайт 16+ !', '16')
if(age < 16){
    alert('Извините,вы не имеете доступа к этой странице !\n\Ваш Возраст меньше чем нужен для посещения этой страницы !')
    // similar behavior as an HTTP redirect
// window.location.replace("http://stackoverflow.com");

// similar behavior as clicking on a link
    window.location.href = "/index.html";
} else{
    alert('Проверка на возраст прошла успешно !Вы указали что Ваш возраст '+age+' !')
}

/*
let submit = confirm('Готовы ли вы отправить своё резюме Разработчикам ?')

function formula(){
    if(submit == true){
        alert('Успешно отправлено !(Нет)')
    } else{
        alert('Вы отказались от всего !')
    }
}
*/
// if(submit == true){alert('Успешно отправлено !(Нет)')} else{alert('Вы отказались от всего !')}