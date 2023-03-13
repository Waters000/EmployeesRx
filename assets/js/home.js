// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var prescriptionsEl = document.getElementsByClassName("prescriptions");



var pricingImage = document.getElementById("pricingImage");
var indivPricing = document.getElementById("indivPricing");



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

function searchFake() {
    modal.style.display = "block";
    return
  }


  function businessBtn() {
    pricingImage.style.display = "block"
    indivPricing.style.display = "none"
   
    }

    function individualBtn() {
        pricingImage.style.display = "none"
        indivPricing.style.display = "block"
        }

