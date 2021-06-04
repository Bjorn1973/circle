import randomColor from "randomcolor";

export default class Circle {
#x;
#y;
#size;
#holder;
constructor(holder){
    this.#x = this.#randomPlaceWidth();
    this.#y = this.#randomPlaceHeight();
    this.#size = this.#randomSize();
    this.#holder = holder;
    this.htmlRef = this.#initHTML();
    this.#setStyling();
    // this.#setUpEvents();
}    
#initHTML(){
    this.#holder.insertAdjacentHTML(
        "beforeend",
        `<div class="circle"></div>`
    );
    return this.#holder.querySelector(".circle:last-child");
}
#randomPlaceWidth(){
    let maxLeft = document.body.clientWidth - this.#randomSize();
    return Math.floor(Math.random()*(maxLeft+1)+this.#randomSize())
};
#randomPlaceHeight(){
    let maxTop = document.body.clientHeight - this.#randomSize();
    return Math.floor(Math.random()*(maxTop + 1)+this.#randomSize())
};
#randomSize(){
    return Math.floor(Math.random()*(250-50)+50)
}
#setStyling(){
    const styles = {
        left: this.#x +"px",
        top :this.#y+"px",
        width: this.#size+"px",
        height: this.#size+"px",
        backgroundColor: randomColor(),
        borderRadius: "50%",
        borderWidth: "3px", 
        borderStyle: "solid",
        borderColor: randomColor(),
    };
    Object.assign(this.htmlRef.style, styles);
}
// #setUpEvents(){
//     window.setInterval(()=>{
// const arr = [];
//     const circle = this.htmlRef
//     arr.push(circle)
//     },200)
// }
}