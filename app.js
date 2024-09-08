var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactnumberElement = document.getElementById("contactnumber"); // Fix ID here
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var workexperienceElement = document.getElementById("workexperience"); // Fix ID here
    if (nameElement &&
        emailElement &&
        contactnumberElement &&
        educationElement &&
        skillsElement &&
        workexperienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contactnumber = contactnumberElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var workexperience = workexperienceElement.value;
        var Generate = "\n      <section>\n      <h2>Resume</h2> \n      <p><strong>Name:</strong> ".concat(name_1, "</p> <!-- Fixed missing '>' -->\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Contact Number:</strong> ").concat(contactnumber, "</p>\n    </section>\n\n    <section>\n    <h3>Education</h3>\n    <p>").concat(education, "</p> \n    </section>\n    \n    <section>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    </section>\n    \n    <section>\n    <h3>Experience</h3>\n    <p>").concat(workexperience, "</p>\n    </section>\n        ");
        var GenerateElement = document.getElementById("Generate");
        if (GenerateElement) {
            GenerateElement.innerHTML = Generate;
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
    else {
        console.error("one or more output");
    }
});
