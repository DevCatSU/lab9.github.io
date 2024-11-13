function getMarks() {
    var numSub = parseInt(prompt("How many subjects are you taking?"));

    var sum = 0; 
    var avg; 
    var grade = "";


    for (var i = 1; i <= numSub; i++) {
        var mark = parseInt(prompt("Enter marks for Subject " + i));
        sum += mark;
    }

    avg = sum / numSub;

    if (avg >= 80) {
        grade = "A";
    } else if (avg >= 70) {
        grade = "B";
    } else if (avg >= 60) {
        grade = "C";
    } else if (avg >= 50) {
        grade = "D";
    } else if (avg >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    alert("Your total marks are: " + sum + "\n" + "Your average is: " + avg + "\n" + "Your grade is: " + grade);
}