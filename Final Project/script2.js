document.body.addEventListener("keydown", creepyInvert);
function creepyInvert(event){
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "blue";
    }else{
        document.body.style.backgroundColor ="white";
    }
}
