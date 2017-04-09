//starting the game by clicking the START button
document.getElementsByClassName('btn btn-play btn-new')[0].click()
//original code
var findIt = function() {
  var hash = {};
  var boxes = document.getElementById("box").getElementsByTagName("span");
  for(var i=0;i<boxes.length;i++) {
    if (hash[boxes[i].style.backgroundColor] === undefined ) {
      hash[boxes[i].style.backgroundColor] = {};
      hash[boxes[i].style.backgroundColor]["count"] = 1;
      hash[boxes[i].style.backgroundColor]["element"] = boxes[i];
    }
    else {
      hash[boxes[i].style.backgroundColor]["count"] += 1;
      hash[boxes[i].style.backgroundColor]["element"] = boxes[i];
    }
  }
  for (var key in hash) {
    if (hash.hasOwnProperty(key) && hash[key]["count"] === 1) {
      hash[key]["element"].click();
    }
  }
}
var hackRate = 1; // In Milliseconds
setInterval(function() { findIt(); }, hackRate);
