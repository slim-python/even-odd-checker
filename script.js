function isCheck(){
    var num = document.getElementById('oddeven').value;
     if ((num%2) ===0){

        document.getElementById('msg').
        innerHTML= num+" is an even number";  
  }
  else{

    document.getElementById('msg').
    innerHTML= num+" is an odd number";  

    }

}
