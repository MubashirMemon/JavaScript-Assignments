// Task No 1
function move() {

 var a = document.getElementById('User').value;
 var b = document.getElementById('Email').value;
 var c = document.getElementById('Password').value;
 if(a.length==0){
     alert('PLEASE ENTER USER NAME ')
 }
 else if(b.length==0){
    alert('PLEASE ENTER EMAIL ')
 }
 else if(c.length==0){
    alert('PLEASE ENTER PASSWORD ')
 }

 else{
     console.log(a,b,c)
     document.getElementById('User').value=" "
     document.getElementById('Email').value=" "
     document.getElementById('Password').value=" "

 }

    }

// Task No 2

function read_fun(){
    var a = document.getElementById('para');
    a.innerHTML = a.innerHTML+' text form'
    document.getElementById('hide').disabled=true;

}

function Event_fun() {
     text=document.getElementById('hid').innerHTML
     pera=document.getElementById('para')
     pera.innerHTML=text

     }

