import randomColor from "randomcolor";

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export default class Circle {
#size = getRandomNumber(50, 250);
#x = getRandomNumber(this.#size, window.innerWidth-this.#size);
#y = getRandomNumber(this.#size, window.innerHeight-this.#size);;
#holder;
constructor(holder){
    this.#holder = holder;
    this.htmlRef = this.#initHTML();
    this.#setStyling();
}    
#initHTML(){
    this.#holder.insertAdjacentHTML(
        "beforeend",
        `<div class="circle"></div>`
    );
    return this.#holder.querySelector(".circle:last-child");
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
}
