function Show() {
    var value = document.getElementById('inp').value
    var text = document.getElementById('uname')
  text.innerHTML = value
  text.style.fontSize = value
}
 var hour = new Date().getHours();
 console.log(hour);
 if (hour >= 6 && hour <= 12) {
 alert('Sabah grupu P228')
 document.body.style.backgroundImage="url('https://metbuat.az/images/axsam/images_d/306895_3.jpg')"
 
 }
 else if(hour>12 && hour <=18) {
    alert('Gunortan grupu P228')
    document.body.style.backgroundColor="url('https://news24.az/uploads/posts/2019-08/1567060512_baki.jpg')"
}
else if(hour> 18 && hour <=24) {
    alert('Axsam grupu P228')
    document.body.style.backgroundColor="url('https://news24.az/uploads/posts/2019-08/1567060512_baki.jpg')"
}