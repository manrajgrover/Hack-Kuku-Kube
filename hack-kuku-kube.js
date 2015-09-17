var findIt = function(){
    var boxes = document.getElementById("box").getElementsByTagName("span");
    for(var i=1;i<boxes.length;i++){
        if(boxes[i].style.backgroundColor!=boxes[i-1].style.backgroundColor){
            boxes[i].click();
            boxes[i-1].click();
            break;
        }
    }
}
var hackRate = 1; // In Milliseconds
setInterval(function(){findIt();},hackRate);