var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById('profilephoto');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactnumberElement = document.getElementById("contactnumber"); // Fix ID here
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var workexperienceElement = document.getElementById("workexperience"); // Fix ID here
    if (profilepictureInput &&
        nameElement &&
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
        var profilephotoFile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilephotoURL = profilephotoFile ? URL.createObjectURL(profilephotoFile) : "";
        var Generate = "\n      ".concat(profilephotoURL ? "<img src=\"".concat(profilephotoURL, "\" alt=\"profilephoto\" class=\"profilephoto\">") : '', "\n      <section>\n      <h2>Resume</h2> \n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p> <!-- Fixed missing '>' -->\n      <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n      <p><strong>Contact Number:</strong> <span id=\"edit-contectnumber\" class=\"editable\"> </span> ").concat(contactnumber, "</p>\n    </section>\n\n    <section>\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p> \n    </section>\n    \n    <section>\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    </section>\n    \n    <section>\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(workexperience, "</p>\n    </section>\n        ");
        var GenerateElement = document.getElementById("Generate");
        if (GenerateElement) {
            GenerateElement.innerHTML = Generate;
            GenerateElement.style.display = 'block';
        }
    }
    else {
        console.error("one or more output");
    }
});
// function makeEditable() {
//   const editableElements = document.querySelectorAll('.editable');
//   editableElements.forEach(element => {
//     element.addEventListener('click' , function() {
//       const currentElement = element as HTMLElement;
//       const currentValue = currentElement.textContent || "";
//       if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
//          const input = document.createElement('input')
//          input.type ='text'
//          input.value = currentValue
//          input.classList.add('editing-input')
//          input.addEventListener('blur' , function() {
//           currentElement.textContent = input.value;
//           currentElement.style.display = 'inline'
//           input.remove()
//          })
//  currentElement.style.display = 'none'
//  currentElement.parentNode?. insertBefore(input, currentElement)
//  input.focus()
// }
// })
// })
// }
