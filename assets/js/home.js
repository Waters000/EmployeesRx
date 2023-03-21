// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var prescriptionsEl = document.getElementsByClassName("prescriptions");
var pricingImage = document.getElementById("pricingImage");
var indivPricing = document.getElementById("indivPricing");
var specialWordEl = document.getElementById("specialWord");



var specialWord = ["Future ", "Netflix ", "Best ", "Solution ", "New Way ", "Start | Cancel anytime "]
var index = 0;

function spcecialWord() {

  var arrayLength = (specialWord.length - 1)

  if (index < arrayLength) { 
    index++;
     
  } else {
    index = 0
  }
  
  var word = specialWord[index]
 

  specialWordEl.textContent = word




//console.log(word)

}

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

// shows modal when starting to search
function searchFake() {
    modal.style.display = "block";
    return
  }

// shows business pricing plan
function businessBtn() {
    pricingImage.style.display = "block"
    indivPricing.style.display = "none"
   
    }

    // shows individual pricing plan
  function individualBtn() {
        pricingImage.style.display = "none"
        indivPricing.style.display = "block"
        }



      spcecialWord()
        setInterval(spcecialWord, 5000);