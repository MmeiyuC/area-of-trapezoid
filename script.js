let basea
let baseb
let height
let area

// This is a code for the button:
document.getElementById('calculate').addEventListener('click', calculatearea)

function calculatearea () {
  basea = document.getElementById('basea').value
  baseb = document.getElementById('baseb').value
  height = document.getElementById('height').value
  basea = parseFloat(basea)
  baseb = parseFloat(baseb)
  height = parseFloat(height)
  area = (basea + baseb) / 2 * height // This is the calculation of the area of a trapezoid
  alert(area)
}
