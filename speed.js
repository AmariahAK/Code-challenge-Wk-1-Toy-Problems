// Challenge 2: Speed Detector

/**
 * Function to calculate demerit points based on the speed.
 * @param {number} speed - The speed of the car.
 * @returns {number} - The total demerit points.
 */
function calculatePoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed <= speedLimit) {
        return 0; // If speed is within the limit, return 0 points
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint); // Calculate points exceeding the speed limit
        return points <= maxPoints ? points : maxPoints; // Return points, capped at maxPoints
    }
}

/**
 * Function to display demerit points and check if license is suspended.
 * @param {number} points - The demerit points.
 */
function displayPoints(points) {
    console.log("Points:", points);
    if (points > 12) {
        console.log("License suspended");
    }
}

// UI Interaction Logic
const speed = parseFloat(prompt("Enter the speed of the car: "));

if (!isNaN(speed)) {
    const points = calculatePoints(speed);
    displayPoints(points);
} else {
    console.log("Invalid input! Please enter a numeric value.");
}
