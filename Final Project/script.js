function getRandomColor() {
    var colors = ["blue", "black"]; 
    var randomColorstuff = Math.floor(Math.random() * colors.length); 
    return colors[randomColorstuff];  
}
function C() {
    var changesthing = document.querySelectorAll(".flash");
    changesthing.forEach(function(element) {
        var randomColorstuff2 = getRandomColor();
        element.style.backgroundColor = randomColorstuff2;
    });
}
setInterval(C, 100);
function ThumbsUp() {
    const thumb = document.getElementById("likebutton");
  
    
    if (thumb.src.includes("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFfuLotiui9e2RxSGMfMQc177XoHotsgo7tqTxEoxKZQOoXGpdAAdMYPP7HGehUY8oro&usqp=CAU")) {
      thumb.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlpbxsww0eTS516PJHf_RktzFwuNvH1fvxQ&s"; 
    } else {
      thumb.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFfuLotiui9e2RxSGMfMQc177XoHotsgo7tqTxEoxKZQOoXGpdAAdMYPP7HGehUY8oro&usqp=CAU";  
    }
  }
  


