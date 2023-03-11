// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var pricingImage = document.getElementById("pricingImage");



// When the user clicks on <span> (x), close the modal
span.onclick = function() {

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function searchPrescriptions() {
    modal.style.display = "block";
    return
  }


  function businessBtn() {
    pricingImage.style.display = "none"
    alert("Business Button clicked")
    }

    function individualBtn() {
        alert("Indiviual Button clicked")
        }

