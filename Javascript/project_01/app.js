let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#reset");

let turnO= true;
const  winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach{(Box)=>{
    Box.addEventListener{"Click",{} => {
        console.log("boxes was Clicked");
    }};
}};
