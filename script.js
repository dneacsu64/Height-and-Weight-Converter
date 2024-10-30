// Convert pounds to kilograms
function convertLbsToKg() {
    const lbs = document.getElementById("lbsInput").value;
    if (lbs) {
        const kg = (lbs * 0.453592).toFixed(2); // Conversion factor for lbs to kg
        document.getElementById("kgResult").textContent = `${lbs} lbs is equal to ${kg} kg.`;
    } else {
        document.getElementById("kgResult").textContent = "Please enter a weight in pounds.";
    }
}

// Convert height in feet and inches to centimeters
function convertHeightToCm() {
    const heightInput = document.getElementById("heightInput").value.trim();
    const heightParts = heightInput.split(" ");

    if (heightParts.length === 2) {
        const feet = parseInt(heightParts[0]);
        const inches = parseInt(heightParts[1]);

        if (!isNaN(feet) && !isNaN(inches)) {
            const totalInches = feet * 12 + inches;
            const cm = (totalInches * 2.54).toFixed(2); // Conversion factor for inches to cm
            document.getElementById("cmResult").textContent = `${feet} feet ${inches} inches is equal to ${cm} cm.`;
            return;
        }
    }
    document.getElementById("cmResult").textContent = "Please enter height in the format 'feet inches' (e.g., 5 11 or 6 2).";
}
