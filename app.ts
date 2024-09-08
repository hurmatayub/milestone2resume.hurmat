document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function(event) {
    event.preventDefault();

   const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const contactnumberElement = document.getElementById("contactnumber") as HTMLInputElement; // Fix ID here
  const educationElement = document.getElementById("education") as HTMLTextAreaElement;
  const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
  const workexperienceElement = document.getElementById("workexperience") as HTMLTextAreaElement; // Fix ID here

    if (
      nameElement &&
      emailElement &&
      contactnumberElement &&
      educationElement &&
      skillsElement &&
      workexperienceElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const contactnumber = contactnumberElement.value;
      const education = educationElement.value;
      const skills = skillsElement.value;
      const workexperience = workexperienceElement.value;

      const Generate = `
      <section>
      <h2>Resume</h2> 
      <p><strong>Name:</strong> ${name}</p> <!-- Fixed missing '>' -->
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contactnumber}</p>
    </section>

    <section>
    <h3>Education</h3>
    <p>${education}</p> 
    </section>
    
    <section>
    <h3>Skills</h3>
    <p>${skills}</p>
    </section>
    
    <section>
    <h3>Experience</h3>
    <p>${workexperience}</p>
    </section>
        `;

      const GenerateElement = document.getElementById("Generate")
      if (GenerateElement) {
        GenerateElement.innerHTML = Generate
      } else {
        console.error("the resume output elements are missing");
      }
    } else {
      console.error("one or more output");
    }
  });



