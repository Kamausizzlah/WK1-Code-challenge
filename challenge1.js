// Student Grade Generator
function studentGrade(marks){
    if (marks > 79){
        return 'A'
    }
    else if (marks >= 60 && marks <= 79){
        return 'B-'
    }
    else if (marks >= 49 && marks <= 59){
        return 'C-'
    }
    else if (marks >= 40 && marks <=49){
        return 'D-'
    }
    else {
        return 'E'
    }
}
console.log(studentGrade())