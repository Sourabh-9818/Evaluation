document.querySelector("form").addEventListener("submit", record);
function record(){
    event.preventDefault();
    var doctor=document.querySelector("#name").value;
    var docid=document.querySelector("#docID").value;
    var Specialization=document.querySelector("#dept").value;
    var Experience=Pdocument.querySelector("#exp").value;
    var Email=document.querySelector("#email").value;
    var mobile=document.querySelector("#mbl").value;


    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=doctor;

    var td2=document.createElement("td");
    td2.innerText=docid;

    var td3=document.createElement("td");
    td3.innerText=Specialization;

    var td4=document.createElement("td");
    td4.innerText=parseInt(Experience);

    var td5=document.createElement("td");
    td5.innerText=Email;

    var td6=document.createElement("td");
    td6.innerText=mobile;

    var td7=document.createElement("td");
    if(td4.innerText>5){
        td7.innerText="Senior";
    }else if(td4.innerText<=2 || td4.innerText<=5 ){
        td7.innerText="Junior";
    }else{
        td7.innerText="Trainee";
    }
    var td8=document.createElement("td");
    td8.innerText="Delete";
    td8.style.backgroundColor="red";
   td8.addEventListener("click", deleter);
   function deleter(){
    event.target.parentNode.remove();
   }
   tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}




