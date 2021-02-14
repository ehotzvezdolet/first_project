let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if ((typeof(a))=== "string" && (typeof(a)) !=null && (typeof(b)) !=null
            && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome =  (save/100/12*percent).toFixed(1);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome + "руб.");
        }
    },
    chooseOptExpens: function() {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');

        if (typeof(items) != "string" || items == "" || items == null) {
            console.log("Вы ввели не корректное значение");
        } else {
        appData.income = items.split(", ");
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
        }
        appData.income.forEach(function(itemmasive, i) {
            allert("Способы доп.заработка: " + (i+1) + " - " + itemmasive);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//             if ((typeof(a))=== "string" && (typeof(a)) !=null && (typeof(b)) !=null
//     && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log("bed result");
//         i--;
//     }

//     i++;
// }

// let i = 0;
// do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//          b = prompt("Во сколько обойдется?", "");
//              if ((typeof(a))=== "string" && (typeof(a)) !=null && (typeof(b)) !=null
//      && a != '' && b != '' && a.length < 50) {
//          console.log('done');
//          appData.expenses[a] = b;
//      } else {
//          console.log("bed result");
//          i--;
//      }
//      i++;
// }
// while (i < 2);

