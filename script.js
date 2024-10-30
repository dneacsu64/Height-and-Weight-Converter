// Convert pounds to kilograms as you type
document.getElementById("lbsInput").addEventListener("input", function () {
    const lbs = this.value;
    const kgResult = document.getElementById("kgResult");
    
    if (lbs) {
        const kg = (lbs * 0.453592).toFixed(2); // Conversion factor for lbs to kg
        kgResult.textContent = `${lbs} lbs is equal to ${kg} kg.`;
        kgResult.style.visibility = "visible";
    } else {
        kgResult.style.visibility = "hidden";
    }
});

// Convert height in feet and inches to centimeters as you type
document.getElementById("heightInput").addEventListener("input", function () {
    const heightInput = this.value.trim();
    const cmResult = document.getElementById("cmResult");
    
    // Expecting height input in the format "5 11" (feet inches)
    const heightParts = heightInput.split(" ");
    if (heightParts.length === 2) {
        const feet = parseInt(heightParts[0]);
        const inches = parseInt(heightParts[1]);
        
        if (!isNaN(feet) && !isNaN(inches)) {
            const totalInches = feet * 12 + inches;
            const cm = (totalInches * 2.54).toFixed(2); // Conversion factor for inches to cm
            cmResult.textContent = `${feet} feet ${inches} inches is equal to ${cm} cm.`;
            cmResult.style.visibility = "visible";
            return;
        }
    }
    cmResult.style.visibility = "hidden";
});
