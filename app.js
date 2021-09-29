function checkloveper(){

    let name = document.getElementById('name');
    let lname = document.getElementById('lname');
  
    if (name ==="Madhan" && lname ==="Sushmitha" || (name === "MadhanNisanth" || "Madhan Nisanth" && lname === "sushmitha")) {
    
   
    document.getElementById('lovevalue').value = "100" + "%" + "Perfect couple"; 
    } 
    else(name ==="Madhan" && lname ==="Sushmitha" || (name === "MadhanNisanth" || "Madhan Nisanth" && lname === "sushmitha"))
    {
      var lovdata = Math.random() * 20;
      document.getElementById("lovevalue").value = "100" + "%" + "Perfect couple" ;
    
    
    }
    
    let formData = {
      name:name.value,
      lname:lname.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST",'/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function (){
      console.log(xhr.responseText);
      if(xhr.responseText == 'success'){
        name.value = "";
        lname.value = "";
      }else{
        alert ("Some thing went wrong")
      }
    }
    xhr.send(JSON.stringify(formData));
   }