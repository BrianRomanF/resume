const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentYear");
yearElement.textContent = currentYear;

let counter = 0
function addCSS() {
  counter++
  if (counter % 2 !== 0) {
    document.getElementById("head").innerHTML = '  <title>Brian Roman - Resume</title> \n<link rel="stylesheet" href="style.css" />'
  } else {

    document.getElementById("head").innerHTML = '  <title>Brian Roman - Resume</title> '

  }
}
