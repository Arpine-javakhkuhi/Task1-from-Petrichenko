let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

let appDate ={
    bjudjet: money,
    timeData: time,
    expenses:{ },
    optionalExpenses:{},
    income:[],
    savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце","");
let answer2 = prompt("Во сколько обойдется?","");
appDate.expenses.answer1 = answer2;
alert("бюджет на 1 день" + ":" + appDate.bjudjet/30);