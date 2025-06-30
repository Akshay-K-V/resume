let dynamicText = () =>{
   let pTag = document.getElementById("message");
    pTag.innerText = textBox.value;
    pTag.style.color = "black";
}


//text box
let textBox = document.getElementById("box1");
textBox.addEventListener("keyup", function(event) {
    dynamicText();
});
