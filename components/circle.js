import randomColor from "randomcolor";

export default class Circle {
#x;
#y;
#size;
#holder;
constructor(){
    this.#x= this.#randomPlaceWidth();
    this.#y= this.#randomPlaceHeight();
    this.#size= this.#randomSize();
    this.#holder = holder;
    this.htmlRef = this.#initHTML();
    this.setStyling();
}    
#initHTML(){
    this.#holder.insertAdjacentHTML(
        "beforeend",
        `<div class="circle"></div>`
    );
    return this.#holder.querySelector(".circle:last-child");
}
#randomPlaceWidth(){
    return Math.floor(Math.random()*screen.width)
};
#randomPlaceHeight(){
    return Math.floor(Math.random()*screen.height)
};
#randomSize(){
    return Math.floor(Math.random()*(250-50)+50)
}
#setStyling(){
    const styles = {
        left: this.#x +"px",
        top :this.#y+"px",
        width: this.#size+"px",
        height: auto,
        backgroundColor: randomColor(),
        borderRadius: "50%",
        border: "3px solid randomColor()",
    }
}
}