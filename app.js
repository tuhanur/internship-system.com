let calculate  =document.querySelector('#calc');

// grade 
let automata = document.querySelector('#automata');
let network = document.querySelector('#network');
let software = document.querySelector('#software');
let entre = document.querySelector('#entre');
let ip = document.querySelector('#ip');
let wireless = document.querySelector('#wireless');
let value = document.querySelectorAll('select');

let dd = document.querySelector('.dd');
let d = document.querySelector('.d');

let dd3 = document.querySelector('.dd3');
let d3 = document.querySelector('.d3');

let dd2 = document.querySelector('.dd2');
let d2 = document.querySelector('.d2');

let dd1 = document.querySelector('.dd1');
let d1 = document.querySelector('.d1');

let display_Grade = document.querySelector('.display_grade');



let result = document.querySelector('.result');
let ygrade = document.querySelector('.ygrade');
calculate.addEventListener('click',()=>{
    console.log('wireles :',wireless.value);
    console.log('network :',network.value);
    console.log('ip :',ip.value);
    console.log('entre :',entre.value);
    console.log('software :',software.value);
    console.log('automata :',automata.value);

     let  a = document.getElementById('a');
     let  i = document.getElementById('i');
     let  w = document.getElementById('w');
     let  s = document.getElementById('s');
     let  e = document.getElementById('e');
     let  n = document.getElementById('n');
     let  gpa = document.getElementById('gpa');

     ///
     let td =document.querySelector('table tr td');
     //

 

    

     a.innerHTML = '<b class = "text text-primary">'+automata.value+'<b>';
     i.innerHTML = '<b class = "text text-primary">'+ip.value+'<b>';
     w.innerHTML = '<b class = "text text-primary">'+wireless.value+'<b>';
     s.innerHTML = '<b class = "text text-primary">'+software.value+'<b>';
     e.innerHTML = '<b class = "text text-primary">'+entre.value+'<b>';
     n.innerHTML = '<b class = "text text-primary">'+network.value+'<b>';
     


    let GPA = ((wireless.value*5)+(automata.value*5)+(network.value*5)+(software.value*5)+(ip.value*7)+(entre.value*5))/32;  
    GPA = GPA.toFixed(2);
    
    
    if(automata.value == 'NG' || software.value == 'NG' || wireless.value == 'NG' || entre.value == 'NG' || ip.value == 'NG' || network.value){
        gpa.innerHTML = ' <h2 class = "alert alert-danger"> <span id = "adj"> INCOMPLETE  <span> </h2>';
    }
  
    if(GPA == 4) {
        dd.style.display = 'block';
        d.style.display = 'block';
        gpa.innerHTML = ' <h2 class = "alert alert-primary"> <span id = "adj"> GPA  <span></h2>';
        display_Grade.innerHTML = ' <h2 class = "alert alert-primary"> <span id = "adj"> '+GPA+'  <span></h2>'
        dd3.style.display =   'none';
        d3.style.display  =   'none';
        dd2.style.display =   'none';
        d2.style.display  =   'none';
        dd1.style.display =   'none';
        d1.style.display  =   'none';
    }

    if(GPA < 4 && GPA >=3 ) {
        dd3.style.display = 'block';
        d3.style.display = 'block';
        dd.style.display = 'none';
        d.style.display = 'none';
        dd2.style.display =   'none';
        d2.style.display  =   'none';
        dd1.style.display =   'none';
        d1.style.display  =   'none';
        gpa.innerHTML = ' <h2 class = "alert alert-primary"> <span id = "adj"> GPA  <span></h2>';
        display_Grade.innerHTML = ' <h2 class = "alert alert-primary"> <span id = "adj"> '+GPA+'  <span></h2>' 
    }

    if(GPA > 2 && GPA < 3 ){
         gpa.innerHTML = ' <h2 class = "alert alert-info"> <span id = "adj"> GPA  <span></h2>';
         display_Grade.innerHTML = ' <h2 class = "alert alert-info"> <span id = "adj"> '+GPA+'  <span></h2>'
        dd3.style.display =   'none';
        d3.style.display  =   'none';
        dd.style.display =   'none';
        d.style.display  =   'none';
        dd2.style.display =   'none';
        d2.style.display  =   'none';
        dd1.style.display =   'block';
        d1.style.display  =   'block';
    }

    if(GPA < 2 ){
        gpa.innerHTML = ' <h2 class = "alert alert-danger"> <span id = "adj"> GPA  <span></h2>';
        display_Grade.innerHTML = ' <h2 class = "alert alert-danger"> <span id = "adj"> '+GPA+'  <span></h2>'
        dd3.style.display =   'none';
        d3.style.display  =   'none';
        dd.style.display =   'none';
        d.style.display  =   'none';
        dd2.style.display =   'block';
        d2.style.display  =   'block';
        dd1.style.display =   'none';
        d1.style.display  =   'none';
    }


    
    else {
        gpa.innerHTML = ' <h2 class = "alert alert-primary"> <span id = "adj"> GPA  <span></h2>';
        display_Grade.innerHTML = ' <h2 class = "alert alert-primary"> <span id = "adj"> '+GPA+'  <span></h2>'
       
    }
  
    
   
});


window.onload = function(){

    dd.style.display = 'none';
    d.style.display = 'none';

    dd1.style.display = 'none';
    d1.style.display = 'none';

    dd3.style.display = 'none';
    d3.style.display = 'none';

    dd2.style.display = 'none';
    d2.style.display = 'none';

     value.forEach(input => {
    if(input.value == 'A'){
        input.value = 4;
    }
    if(input.value == 'A-'){
        input.value = 3.75;
    }
    if(input.value == 'B'){
        input.value = 3;
    }
    if(input.value == 'B+'){
        input.value = 3.5;
    }
    if(input.value == 'B-'){
        input.value = 2.75;
    }
    if(input.value == 'C+'){
        input.value = 2.5;
    }
    if(input.value == 'C'){
        input.value = 2;
    }
    if(input.value == 'C-'){
        input.value = 1.75;
    }
    if(input.value == 'D'){
        input.value = 1;
    }
    if(input.value == 'F'){
        input.value = 0;
    }
 });
}
   

