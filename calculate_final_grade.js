// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade(exam, projects) {
  //param is numbers; declaring a function that checks if both exam param and projects param and return whether i
  //it's 100 or 0 or in between.(there are 4 types of grades)
  let finals = 0;
  if (exam >= 90 || projects > 10) {
    finals = 100;
  } else if (exam >= 75 && projects >= 5) {
    finals = 90;
  } else if (exam >= 50 && projects >= 2) {
    finals = 75;
  } else {
    finals = 0;
  }
  return finals; // final grade
}
