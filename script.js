// Events in JS
/*
let btn1 = document.querySelector("#btn1");

// btn1.onclick = (event) => {
//           console.log("Button was clicked");
//           // let a = 25
//           // a++;
//           // console.log(a);
//           console.log(event)
//           console.log(event.type);
//           console.log(event.target);
//           console.log(event.clientX, event.clientY);
// }


// node.addEventListener(event, callback)

btn1.addEventListener("click", (event) =>{
          console.log("Button 1 is clicked - handler 1")
          console.log(event);
})


btn1.addEventListener("click", () => {
          console.log("Button 1 is clicked - handler 2")
})
// the callback reference shoule be same to remove
const handler3 =  () => {
          console.log("Button 1 is clicked - handler 3")
}

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
          console.log("Button 1 is clicked - handler 4")
})


btn1.removeEventListener("click", handler3);

let div = document.querySelector("#div-tag")

div.onmouseover = () => {
          console.log('you are inside div');
}
 */

// Question: Create a toggle button that changes the mode of the scrren => light to drak and drak to light


// Method 1: Using style directly in document
/*
let modeButton = document.querySelector("#mode");

let currMode = "light"
modeButton.addEventListener("click", () => {
          // console.log("you are trying to change the mode");
          if(currMode == "light") {
                    currMode = "dark";
                    document.querySelector("body").style.backgroundColor = "black";
          }
          else{
                    currMode = "light";
                    document.querySelector("body").style.backgroundColor = "white";
          }
          console.log(currMode)
}) 
*/


let modeButton = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"


modeButton.addEventListener("click", () => {
          if(currMode == "light"){
                    currMode = "dark";
                    body.classList("dark");
          }
          else{
                    currMode = "light";
                    body.classList("light");
          }
          console.log(currMode)
})