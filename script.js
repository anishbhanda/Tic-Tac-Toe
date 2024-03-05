let boxes = document.querySelectorAll(".box");
let winner=document.querySelector(".winner")
console.log(winner)
let reset_btn = document.querySelector(".reset-btn")
let msg=document.getElementById("msg")
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const reset=()=>{
    turn0=true;
    enableButton();
    winner.classList.add("hide")
}
const enableButton=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML=""
    }
}
const showWinner=(variable)=>{
msg.innerHTML=`${variable} is the winner`;
winner.classList.remove("hide")
disabled()
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerHTML;
        let pos2= boxes[pattern[1]].innerHTML;
        let pos3= boxes[pattern[2]].innerHTML;

        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
    }

}
reset_btn.addEventListener("click",reset);