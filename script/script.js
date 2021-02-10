// let arr =[
//     {
//         "original_name": "Fight club",
//         "russian_name": "Бойцовский клуб",
//         "year": 1999,
//         "actors": [
//             "Edvard Norton",
//             "Brad Pit",
//             "Helena BOnem Carter"
//         ]
//     },
//         {
//         "original_name": "The Mask",
//         "russian_name": "Маска",
//         "year": 1994,
//         "actors": [
//             "Джим Керри",
//             "Николь Кидман",
//             "Камерон Диаз"
//         ]
//     },
//     {
//         "original_name": "Rocky 3",
//         "russian_name": "Рокки",
//         "year": 1984,
//         "actors": [
//             "Сильвестр Трелони",
//             "Мистер Ти",
//             "Мастер Ди",
//             "Клод Ван Ви"
//         ]
//     },
//  ];

//  for(let i = 0; i < arr.length; i++){
//     console.log("==============Фильм №" + (i + 1) + "==============");
//     for(let key in arr[i]){
//         if(key == "actors"){
//             for(let k = 0; k < arr[i][key].length; k++){
//                 console.log("Актер: " + (k+1) + " "+ arr[i][key][k])
//             }
//         }else if(key =="original_name"){
//             console.log("Оригинальное название: " + arr[i][key]);
//         }
//         else if(key =="russian_name"){
//             console.log("Русское название: " + arr[i][key]);
//         }
//         else if(key =="year"){
//             console.log("Год выхода: " + arr[i][key]);
//         }
//     }
// };
// window.onload = function(){


// ------------------------------------------------------------------------------------------------

function question(asking, yes, no){
    if(confirm(asking)) yes()
    else no();
}

function sayYes(){
    console.log("Yes");

    function salo(){
        console.log("one, two");

    }
    salo();
}

function sayNo(){
    console.log("No");
}

question("Are you ready?", sayYes, sayNo);


let also = () => console.log(true);

console.log();