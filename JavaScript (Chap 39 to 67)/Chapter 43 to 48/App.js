// Task No 1
function alt(){
    alert('Click on the Link Button')
}

// Task No 2
function pur(){

    alert('Thanks for Shopping' + "\n"+ "Thanks for Purchasing Mobile from Us")

}

//Task No 3
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }


// Task N0 4
function f1(){
    document.getElementById('img1').src='images/car2.png'
    document.getElementById('img1').style.width='700px'
    document.getElementById('txt').innerText='IMAGES 2'
    }
function f2(){

    document.getElementById('img1').src='images/car.png'
    document.getElementById('txt').innerText='IMAGES 1'
}


//  Task N0 5 
function increment(){
    data=document.getElementById('val').innerHTML;
    data++;
    document.getElementById('val').innerHTML=data
}
function decrement(){
    data=document.getElementById('val').innerHTML;
    data--;
    document.getElementById('val').innerHTML=data
} 
function Reset(){
    data=document.getElementById('val').innerHTML;
    data=0;
    document.getElementById('val').innerHTML=data
}
