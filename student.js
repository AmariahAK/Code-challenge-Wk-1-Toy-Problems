// Challenge 1: Student Grade Generator

/**
 * Function to calculate the grade based on the student's mark.
 * @param {number} mark - The student's mark (0-100).
 * @returns {string} - The corresponding grade.
 */
function calculateGrade(mark) {
    if (mark > 79) {
        return 'A'; // If mark is greater than 79, return 'A'
    } else if (mark >= 60 && mark <= 79) {
        return 'B'; // If mark is between 60 and 79 (inclusive), return 'B'
    } else if (mark >= 50 && mark <= 59) {
        return 'C'; // If mark is between 50 and 59 (inclusive), return 'C'
    } else if (mark >= 40 && mark <= 49) {
        return 'D'; // If mark is between 40 and 49 (inclusive), return 'D'
    } else {
        return 'E'; // Otherwise, return 'E'
    }
}

/**
 * Function to display the calculated grade.
 * @param {string} grade - The calculated grade.
 */
function displayGrade(grade) {
    console.log("Grade:", grade);
}

// UI Interaction Logic
const mark = parseFloat(prompt("Enter student's mark (0-100): "));

if (!isNaN(mark) && mark >= 0 && mark <= 100) {
    const grade = calculateGrade(mark);
    displayGrade(grade);
} else {
    console.log("Invalid input! Please enter a numeric value between 0 and 100.");
}
