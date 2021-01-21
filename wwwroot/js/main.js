/* Isaac Corcoran
 * A "Grade Calculator" form that takes as input a percentage of each grade category 
 * listed in the syllabus 
 * Build a JavaScript program that calculates and displays both a final percentage and 
 * a letter grade using the "Grade Calculator" form entries based on the weights listed 
 * in the syllabus.
 * */

let calcButton = document.getElementById("calculateButton"); // create button variable
calcButton.addEventListener("click", function () { // add event listener w/ logic

       /* This was used for testing
        * alert(`assignment: ${document.getElementById("assignment").value}, 
    group: ${document.getElementById("group").value}, 
    quiz: ${document.getElementById("quiz").value}, 
    exam: ${document.getElementById("exam").value}, 
    intex: ${document.getElementById("intex").value}`); */

    // store grades in variables
    let iAssignment = +document.getElementById("assignment").value
    let iGroup = +document.getElementById("group").value
    let iQuiz = +document.getElementById("quiz").value
    let iExam = +document.getElementById("exam").value
    let iIntex = +document.getElementById("intex").value
    // store total in variable
    let iTotal = iAssignment + iGroup + iQuiz + iExam + iIntex
    // get percentage
    let fGrade = iTotal / 100
    let sGrade = ''
    // if statements to find letter grade
    if (fGrade >= .94) {
        sGrade = 'A';
    }
    else if (fGrade >= .9) {
        sGrade = 'A-';
    }
    else if (fGrade >= .87) {
        sGrade = 'B+';
    }
    else if (fGrade >= .84) {
        sGrade = 'B';
    }
    else if (fGrade >= .8) {
        sGrade = 'B-';
    }
    else if (fGrade >= .77) {
        sGrade = 'C+';
    }
    else if (fGrade >= .74) {
        sGrade = 'C';
    }
    else if (fGrade >= .7) {
        sGrade = 'C-';
    }
    else if (fGrade >= .67) {
        sGrade = 'D+';
    }
    else if (fGrade >= .64) {
        sGrade = 'D';
    }
    else if (fGrade >= .6) {
        sGrade = 'D-';
    }
    else {
        sGrade = 'E';
    }
    // DOM manipulation
    document.getElementById("calctitle").innerHTML = "Your Grade:"; // Change H2
    iGradePercent = fGrade * 100
    document.getElementById("output").innerHTML = iGradePercent + "% " + sGrade; // Display grade percentage & letter grade
    document.getElementById("form").style.display = "none"; // hide form

});