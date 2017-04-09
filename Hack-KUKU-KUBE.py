from selenium import webdriver
import time

browser = webdriver.Chrome('D:/chromedriver')
browser.get("http://kuku-kube.com")
#time.sleep(3)

test = """//starting the game by pressing the START button
document.getElementsByTagName('button')[0].click()
//original script
var findIt = function(){
  var boxes = document.getElementById("box").getElementsByTagName("span");
  boxes[0].click();
  for(var i=1;i<boxes.length;i++){
    if(boxes[i].style.backgroundColor!=boxes[i-1].style.backgroundColor){
      boxes[i].click();
      break;
    }
  }
}
var hackRate = 1; // In Milliseconds
setInterval(function(){findIt();},hackRate);"""

browser.execute_script(test)
