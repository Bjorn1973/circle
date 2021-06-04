import "./style.css"
import Circle from "./components/circle"

const holder = document.querySelector('.root');

// const myCircle1 = new Circle(holder);
// const myCircle2 = new Circle(holder);
// const myCircle3 = new Circle(holder);
// const myCircle4 = new Circle(holder);
// const myCircle5 = new Circle(holder);
// const myCircle6 = new Circle(holder);
// const myCircle7 = new Circle(holder);

const arrCircle = [];

function loadStop(){
    clearInterval(load);
    document.querySelectorAll('.circle').forEach((circle)=>{
        circle.style.backgroundColor = "pink";
        circle.style.borderColor = "pink";
        circle.style.borderStyle = "solid";
        circle.style.borderWidth = "3px";
    });
}

const load = setInterval(() => {
    arrCircle.push(new Circle(holder));
    if(arrCircle.length === 100){
        loadStop();
    }
}, 200);
