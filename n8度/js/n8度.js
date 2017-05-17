//鼠标划过1
var imgs = document.getElementById('imgs');
var lis = document.querySelectorAll('#lis li');
var index = 0;

  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;   
    lis[i].onmouseover = function() {
       for (var j = 0; j < lis.length; j++) {
      lis[j].style.background = '#fff';
       }
     if (index > 4) {
      index = 0;
    }  
     this.style.background = '#6CB92D';
     imgs.style.left = -this.index * 710 + 'px';
    } 
  }  
  



   

 //鼠标划过2
 var btlis = document.querySelectorAll('#btlis li');
 var imgsm = ['url(n8度img/ar.png)', 'url(n8度img/chelizi.png)', 'url(n8度img/ar.png)'];
 var box = document.getElementById('main-rigone');

   for (var i = 0; i < btlis.length; i++) {
      btlis[i].index = i;
      btlis[i].onmouseover = function() {
      for (var j = 0; j < btlis.length; j++) {
       btlis[j].style.background = '#ccc';
      }
      this.style.background = '#272822';
      box.style.background = imgsm[this.index] + 'no-repeat center 20px/100% 80%';
    }
  }
  

 

