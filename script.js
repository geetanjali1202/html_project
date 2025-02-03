
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const designationInput = document.getElementById("designation");

    // Language Patterns for Accented Characters
    const languagePatterns = {
        "French": /[éèêëàâäôöùûüç]/i,
        "Spanish": /[áéíóúñü]/i,
        "German": /[äöüß]/i,
        "Portuguese": /[ãõáâêéíóôúç]/i,
        "Turkish": /[çğıöşü]/i
    };

    function detectLanguage(text) {
        for (const [language, pattern] of Object.entries(languagePatterns)) {
            if (pattern.test(text)) {
                return language;
            }
        }
        return "Unknown"; // Default if no match
    }

    function validateInput(event) {
        const inputText = event.target.value;
        const detectedLang = detectLanguage(inputText);
        
        if (detectedLang !== "Unknown") {
            alert(`Detected language: ${detectedLang}`);
        }
    }

    // Event Listeners for Input Validation
    nameInput.addEventListener("input", validateInput);
    designationInput.addEventListener("input", validateInput);

    // Save Profile Function
    function saveProfile() {
        const name = nameInput.value;
        const dob = document.getElementById("dob").value;
        const designation = designationInput.value;
        const contact = document.getElementById("contact").value;

        // Display the saved profile
        document.getElementById("display-name").textContent = name;
        document.getElementById("display-dob").textContent = dob;
        document.getElementById("display-designation").textContent = designation;
        document.getElementById("display-contact").textContent = contact;

        document.getElementById("profile-display").classList.remove("hidden");

        alert("Profile saved successfully!");
    }

    // Attach function to the button
    window.saveProfile = saveProfile;
});

