function selectButton(button) {
    // Remove the 'highlighted' class from all buttons in the same set
    var buttonSet = button.parentElement;
    var buttons = buttonSet.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }

    // Add the 'highlighted' class to the clicked button
    button.classList.add("selected");
}

function submitSet(setNumber) {
    var buttonSet = document.getElementsByClassName("button-set")[setNumber - 1];
    var selectedButton = buttonSet.getElementsByClassName("button selected")[0];
    if(setNumber == 1){
      if (selectedButton.textContent.includes('Phishing')) {
          showSuccessMessage1();
      } else {
        showIncorrectMessage1();
      }
    }
    if(setNumber == 2){
      if (selectedButton.textContent.includes('Phishing')) {
          showSuccessMessage2();
      } else {
        showIncorrectMessage2();
      }
    }
    if(setNumber == 3){
      if (selectedButton.textContent.includes('Phishing')) {
          showSuccessMessage3();
      } else {
        showIncorrectMessage3();
      }
    }
    if(setNumber == 4){
      if (selectedButton.textContent.includes('Safe')) {
          showSuccessMessage4();
      } else {
        showIncorrectMessage4();
      }
    }
}

function showSuccessMessage1() {
document.getElementById('hiddenCorrect1').removeAttribute('hidden');
}
function showIncorrectMessage1() {
document.getElementById('hiddenWrong1').removeAttribute('hidden');
}
function showSuccessMessage2() {
document.getElementById('hiddenCorrect2').removeAttribute('hidden');
}
function showIncorrectMessage2() {
document.getElementById('hiddenWrong2').removeAttribute('hidden');
}
function showSuccessMessage3() {
document.getElementById('hiddenCorrect3').removeAttribute('hidden');
}
function showIncorrectMessage3() {
document.getElementById('hiddenWrong3').removeAttribute('hidden');
}
function showSuccessMessage4() {
document.getElementById('hiddenCorrect4').removeAttribute('hidden');
}
function showIncorrectMessage4() {
document.getElementById('hiddenWrong4').removeAttribute('hidden');
}

function showAlert(message, type) {
const alertContainer = document.getElementById('alertContainer');
alertContainer.textContent = message;
alertContainer.className = `alert-container alert ${type}`;
alertContainer.style.display = 'block';
}
addEventListener('submit',submit);

function netflix_link(){
var message = document.getElementById("netflix");
message.style.display = "block";
}
function netflix_hide_link(){
var message = document.getElementById("netflix");
message.style.display = "none";
}
function google_link(){
var message = document.getElementById("google");
message.style.display = "block";
}
function google_hide_link(){
var message = document.getElementById("google");
message.style.display = "none";
}
function onepass_link(){
var message = document.getElementById("onepass");
message.style.display = "block";
}
function onepass_hide_link(){
var message = document.getElementById("onepass");
message.style.display = "none";
}
function dropbox_link(){
var message = document.getElementById("dropbox");
message.style.display = "block";
}
function dropbox_hide_link(){
var message = document.getElementById("dropbox");
message.style.display = "none";
}