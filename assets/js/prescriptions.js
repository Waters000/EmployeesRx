var divs = document.getElementById("crypto-div");


function searchPrescriptions() {
  //alert('this is window')
    var input = document.getElementById("search");
   var divs = document.getElementsByClassName("prescriptions");
  var number = divs.length
  console.log("this is div : " + number)
   //  divs.style.display = "none";
    filter = input.value.toUpperCase();
    for (i = 0; i < divs.length; i++) {
      h2 = divs[i].getElementsByTagName("p")[0];
   //   console.log("line 14: " + h2)
      txtValue = h2.innerText;
    //  console.log(txtValue)
  //    txtValue = h2.toString();
     console.log("textValue" + txtValue)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
      } else {
        divs[i].style.display = "none";
      }
    }
  }