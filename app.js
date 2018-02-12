//Drawing a pie chart from an object

let results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
]

let cx = document.querySelector("canvas").getContext("2d")
//determine number of total counts
let total = results.reduce((sum, choice)=>{
  return sum + choice.count
}, 0)

//Start at the top of the circle. 90 degrees is 2Pi here
let currentAngle = -0.5 * Math.PI

//for each element in the object
results.forEach((result)=>{
  let sliceAngle = (result.count/total)*2*Math.PI //multiplying the percentage (0-1) by the size of a full circle 2*Pi
  cx.beginPath()
  //start at the middle of the canvas, from a current Angle position til a sliceAngle on
  // center=100,100, radius=100
  // from current angle, clockwise by slice's angle
  cx.arc(100,100,100, currentAngle, currentAngle + sliceAngle)
  //change value of current Angle
  currentAngle += sliceAngle
  //draw a line from the point to the center of the canvas
  cx.lineTo(100,100)
  //fill style and method call
  cx.fillStyle = result.color
  cx.fill()
})
