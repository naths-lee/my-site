const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");

editJobBtn.addEventListener("click", function () {
    const newTitle = prompt("Enter your new job title:");
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});

const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
    const max = 200;
    const remaining = max - msgBox.value.length;
    counter.textContent = remaining;
});

function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill out both Name and Email.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

const dateDisplay = document.getElementById("dateDisplay");
const today = new Date().toDateString();
dateDisplay.textContent = "Today’s Date: " + today;

const greet = document.getElementById("greetMessage");
const hour = new Date().getHours();

if (hour < 12) {
    greet.textContent = "Good morning! ";
} else if (hour < 18) {
    greet.textContent = "Good afternoon! ";
} else {
    greet.textContent = "Good evening! ";
}