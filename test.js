// const wrd1 = "help";
// const wrd2 = 'ass';
// const wrd3 = 'fire';
// const wrd4 = 'box';

// const trWrd1 = "Помощь";
// const trWrd2 = "Жопа";
// const trWrd3 = "Огонь";
// const trWrd4 = "Коробка";

// const counQuest = 4;
// let userCount = 0;

// // _________________________________________

// const userQuest1 = prompt(wrd1);
// if (userQuest1 === trWrd1) {
//     alert(true);
//     userCount += 1;
// }else {
//     alert(false);
// }

// const userQuest2 = prompt(wrd2);
// if (userQuest2 === trWrd2) {
//     alert(true);
//     userCount += 1
// }else {
//     alert(false);
//     alert(userQuest2)
// }

// const userQuest3 = prompt(wrd3);
// if (userQuest3 === trWrd3) {
//     alert(true);
//     userCount += 1
// }else {
//     alert(false);
// }

// const userQuest4 = prompt(wrd4);
// if (userQuest4 === trWrd4) {
//     alert(true);
//     userCount += 1
// }else {
//     alert(false);
// }

// if((userCount*100 / counQuest )>= 50){
//     alert(userCount*100 / counQuest)
//     alert('молодец')

// }else {
//     alert(userCount*100 / counQuest)
//     alert('плохо')

// }

// work 2

// let balanc = Number(prompt('Введите ваш баланс: '));
// const price1 = 200;
// const price2 = 444;
// const price3 = 50;

// if (!(isNaN(balanc))){
//     const user1 = confirm('Творог стоит 200 рублей, будете брать ?');
//     if(user1){
//         if(balanc >= price1){
//             balanc -= price1;
//         }else{
//             document.write('недостаточно средств!');
//         }
//     }
// // 2 product ___________________________________________________

//     const user2 = confirm('мясо стоит 444 рублей, будете брать ?');
//         if(user2){
//             if(balanc >= price2){
//                 balanc -= price2;
//             }else{
//                 document.write('недостаточно средств!');
//             }
//         }

// // 3 product _________________________________________________________


// const user3 = confirm('хлеб стоит 50 рублей, будете брать ?');
// if(user3){
//     if(balanc >= price3){
//         balanc -= price3;
//     }else{
//         document.write('недостаточно средств!');
//     }
// }


// // ------------------------------------------------------------
// document.write('Вы купили три товара и у вас осталось: ');
// document.write(balanc)
// }else{
//     document.write('вы ввели некоректные данные!');
// }


// объекты 


// const sport = {
//     sportsmen: {
//         sex: {
//             man:{
//                 1: 'Денис',
//                 2: 'Коля',
//                 3: 'Борис'
//             },

//             vomen: {
//                 1: 'Оля',
//                 2: 'Настя',
//                 3: 'Вика'
//             }
            
//         },

//         age: {
//             uneors: '6-12',
//             medium: '13 - 17',
//             old: 'от 18'
//         },

//         atletik: 'Бокс'
//     },

//     adress: 'Пушкина 32',
//     peopple: 6,
//     price: 60
// }

// console.log(sport.sportsmen.sex.man[1])
// console.log(sport.sportsmen.age.medium)
arr = [-240, 233, -74, 13];
for (let a = 0; a < arr.length; a++){
    for (let ai = 1; ai < arr.length ; ai++){
       if(arr[a]===arr[ai]){
          console.log('sfsdfsdf')
       }
    }
 }