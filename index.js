export function addDots(size, color, number, posX, posY){
    for(let i = 0; i != number; i++){
        var x = document.createElement("div");
        x.classList.add("dots");
        x.style.position = "absolute";
        x.style.width = size + "px";
        x.style.height = size + "px";
        x.style.margin = "auto";
        x.style.padding = 0;
        x.style.borderRadius = 100 + "%";
        x.style.backgroundColor = color;
        let num1 = Math.floor(Math.random() * posY + 0);
        x.style.top = num1 + "%";
        let num2 = Math.floor(Math.random() * posX + 0);
        x.style.left = num2 + "%";
        document.body.appendChild(x)
    }
}
addDots(25, "#42A0C7", 100, 100, 100)