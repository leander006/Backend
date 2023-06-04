var teacher = "sanket";

function func() {
  console.log(subject); // Undefined only memory is assign
  var teacher = "Pulkit";
  var subject = "js";
  teachingAssi = "vaibhav";

  console.log(teacher); // Pulkit both memory and data is assign
  console.log(teachingAssi); // Vaibhav both memory and data is assign
}
func();
console.log(teacher); // sanket both memory and data is assign
console.log(teachingAssi); // Vaibhav both memory and data is assign
