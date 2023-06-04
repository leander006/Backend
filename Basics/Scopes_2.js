var teacher = "sanket";

function fun() {
  console.log(subject);
  subject = "js";
}

function gun() {
  console.log(subject);
  var subject = "js";
}

console.log(teacher);

fun();

/**
 * Since we don't have a formal declaration to subject in fun we get undeclareds
 * since scope is not created
 */
gun();

/**
 * Since we have formal declaration to subject in gun we get undefined
 * since scope is allready created
 */
