const buttons=document.querySelectorAll(".box")
const body=document.querySelector("body")

buttons.forEach(function(button){

    button.addEventListener("click",function(event){
        console.log(event);
        console.log(event.target);

        body.style.color="black";
        if (event.target.id=="box1"){
            console.log("Gray selected");
            body.style.backgroundColor="grey";
        }
        else if (event.target.id=="box2"){
            console.log("White selected");
            body.style.backgroundColor="white";
        }
        else if (event.target.id=="box3"){
            console.log("Blue selected");
            body.style.backgroundColor="blue";
            body.style.color="white";
        }
        else if (event.target.id=="box4"){
            console.log("Yellow selected");
            body.style.backgroundColor="yellow";
        }
    })
})