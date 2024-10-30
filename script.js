// Convert pounds to kilograms
function convertLbsToKg() {
    const lbs = document.getElementById("lbsInput").value;
    const kgResult = document.getElementById("kgResult");
    
    if (lbs) {
        const kg = (lbs * 0.453592).toFixed(2);
        kgResult.textContent = `${lbs} lbs = ${kg} kg`;
    } else {
        kgResult.textContent = "Please enter a weight in lbs.";
    }
}

// Convert height in feet and inches to centimeters
function convertHeightToCm() {
    const heightInput = document.getElementById("heightInput").value.trim();
    const cmResult = document.getElementById("cmResult");
    
    // Parse input in format "5 11"
    const heightParts = heightInput.split(" ");
    if (heightParts.length === 2) {
        const feet = parseInt(heightParts[0]);
        const inches = parseInt(heightParts[1]);
        
        if (!isNaN(feet) && !isNaN(inches)) {
            const totalInches = feet * 12 + inches;
            const cm = (totalInches * 2.54).toFixed(2);
            cmResult.textContent = `${feet}'${inches}" = ${cm} cm`;
            return;
        }
    }
    cmResult.textContent = "Use format 'feet inches' (e.g., 5 11).";
}