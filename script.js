var row=1;
var submit= document.getElementById("Submit");
submit.addEventListener("click", displayDetails);

var reset = document.getElementById("reset");
reset.addEventListener("click",resetValues);

function resetValues(){
    var FName = document.getElementById("FName").value=null;
    var LName = document.getElementById("LName").value=null;
    var email = document.getElementById("email").value=null;
    var phone = document.getElementById("phone").value=null; 
}

function displayDetails() {
    var FName=document.getElementById("FName").value;
    var LName=document.getElementById("LName").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;

    if(!LName|| !FName|| !email|| !phone){
        alert("Please fill all the boxes");
        return;
    }
    var display=document.getElementById("display");
    
    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);

    cell1.innerHTML=FName;
    cell2.innerHTML=LName;
    cell3.innerHTML=email;
    cell4.innerHTML=phone;
   
    row++;

}
