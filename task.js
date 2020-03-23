let money;
let time
function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appDate ={
    bjudjet: money,
    timeData: time,
    expenses:{ },
    optionalExpenses:{},
    income:[],
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i < 2; i++){
            let answer1 = prompt("Введите обязательную статью расходов в этом месяце","");
            let answer2 = prompt("Во сколько обойдется?","");
            
            if((typeof(answer1)) === 'string' && (typeof(answer1)) !== null &&
            (typeof(answer2)) === 'string' && (typeof(answer2)) !== null &&
            answer1 != '' && answer2 != '' && answer1.length <50){
                console.log("done");
                appDate.expenses[answer1] = answer2;
            }else{
                i = i -1;
            }  
        }

    },
    detectDayBudget: function(){
        appDate.moneyPerDay = appDate.bjudjet/30
        alert("бюджет на 1 день: " + appDate.moneyPerDay);
    },
    detectLevel: function(){
        if(appDate.moneyPerDay < 100){
            console.log("Minimum");
        }else if(appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000){
            console.log("Medimum");
        }else if(appDate.moneyPerDay > 2000){
            console.log("Maximum");
        }else{
            console.log("Mistake");
        }
    },
    checkSavings: function(){
        if(appDate.savings == true){
            let save = +prompt('Kakova summa nakopleni?','');
            let percent = +prompt('Pod kakoy procent','');
            appDate.monthIncome = save/100/12*percent;
            alert('Doxod v mesyac s vawego depozita: ' + appDate.monthIncome);  
        }
    },
    chooseOptExpenses: function(){
        for(let i = 1; i < 3; i++){
            let opt = +prompt('Neobjazatelnie rasxodi','');
            appDate.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function(){
        let items = prompt("Dopolnitelnie doxodi(Perechislit cherez zapyatuyu","");
        appDate.income = items.split(', ');
        appDate.income.push(prompt("Mojet cto-to ewe?"));
        appDate.income.sort();
    }
};



// if(appDate.moneyPerDay < 100){
//     console.log("Minimum");
// }else if(appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000){
//     console.log("Medimum");
// }else if(appDate.moneyPerDay > 2000){
//     console.log("Maximum");
// }else{
//     console.log("Mistake");
// }


    // while(chooseIncome == '' || typeof chooseIncome !== 'string' || chooseIncome == null){
    //     chooseIncome = prompt("Dopolnitelnie doxodi","")
    // }
