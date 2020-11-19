let text = document.getElementById('text');
let btn = document.querySelectorAll('button');

// btn[0].addEventListener('click', function(){
//     alert("Вы нажали на кнопку");
// })

// btn[0].addEventListener('click', function(){
//     alert("Вы опять нажали на первую кнопку");
// })

btn[0].addEventListener('mouseenter', function(event){
    let target = event.target;
    target.style.display = "none";
    // console.log('Произошло событие: ' + event.type + " на элементе " +
    // event.target);
}
)

btn[1].addEventListener("mouseenter",function(event){
    let target = event.target;
    target.style.backgroundColor = "red";
});
//event.type - свойство объекта event(тип события)
//event.target - цель события

let link = document.getElementsByTagName("a");
link[0].addEventListener('click', function(event){
    event.preventDefault();
})