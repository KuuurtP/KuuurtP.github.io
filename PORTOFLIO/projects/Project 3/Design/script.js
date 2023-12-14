function onSubmit() {

  const grade1 = parseInt(document.getElementById("grade1").value);
  const grade2 = parseInt(document.getElementById("grade2").value);
  const grade3 = parseInt(document.getElementById("grade3").value);
  const grade4 = parseInt(document.getElementById("grade4").value);
  const grade5 = parseInt(document.getElementById("grade5").value);


  const averageGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;


  let rating;
  if (averageGrade >= 90) {
    rating = "With honors";
  } else if (averageGrade >= 75) {
    rating = "Passed";
  } else {
    rating = "Failed";
  }


  document.getElementById("average-grade").innerHTML = averageGrade;
  document.getElementById("rating").innerHTML = rating;

  return false;
}
