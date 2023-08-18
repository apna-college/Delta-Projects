
 //!click button
 document.getElementById('Sub_btn').addEventListener('click',calculate)


 //!click button function
function calculate() {
//!user input date
let y1 = document.getElementById('year').value
y1 = Number.parseInt(y1)
let m1 = document.getElementById('month').value
m1 = Number.parseInt(m1)
let d1 = document.getElementById('day').value
d1 = Number.parseInt(d1)

//!Current date
let y2 = new Date().getFullYear()
 y2 = Number.parseInt(y2)
 let m2 = new Date().getMonth()
 m2 = Number.parseInt(m2)+1
 let d2 = new Date().getDate()
 d2 = Number .parseInt(d2)

 //!html output box
 let dayBox = document.getElementById('sp_day')
 let monthBox = document.getElementById('sp_month')
 let yearBox = document.getElementById('sp_year')

//!calculation
var d ;
var m ;
var y ;
 
let month = [31,28,31,30,31,30,31,31,30,31,30,31]
if(y1<=y2 && m1<=12 && d1<=31){
if(d1>d2){
  d2 = d2 + month[m2 - 1]
  m2 = m2 - 1
}
if(m1>m2){
  m2 = m2+12
  y2 = y2-1
}
d = d2-d1;
m = m2-m1;
y = y2-y1
 dayBox.textContent = d
 yearBox.textContent = y
 monthBox.textContent = m
}else{
  d1.value = ""
  m1.value = ""
  y1.value = ""
    alert('Please Enter correct Date')

}

} 
  
 