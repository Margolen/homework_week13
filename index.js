function askNameAndSayHello() {
    let name = prompt('Как вас зовут?', 'Незнакомец');
    alert(`Привет, ${name}!`);
}

function sum() {
    let a = Number(prompt('Введите первое число', 0));
    let b = Number(prompt('Введите второе число', 0));
    alert(a + b);
}

function sub() {
    let a = Number(prompt('Введите первое число', 0));
    let b = Number(prompt('Введите второе число', 0));
    alert(a - b);
}

function mul() {
    let a = Number(prompt('Введите первое число', 0));
    let b = Number(prompt('Введите второе число', 0));
    alert(a * b);
}

function div() {
    let a = Number(prompt('Введите первое число', 0));
    let b = Number(prompt('Введите второе число', 0));
    alert(a / b);
}