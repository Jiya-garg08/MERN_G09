// Get all required HTML elements

const form = document.getElementById("feedbackForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const feedbackInput = document.getElementById("feedback");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const feedbackError = document.getElementById("feedbackError");

const storedData = document.getElementById("storedData");
const sessionUser = document.getElementById("sessionUser");


// Load stored data whenever the page opens

window.onload = function () {

    // Read feedback details from Local Storage
    const feedback = localStorage.getItem("feedbackData");

    // If data exists, display it
    if (feedback !== null) {

        const data = JSON.parse(feedback);

        storedData.innerHTML =
            "<b>Name :</b> " + data.name + "<br><br>" +
            "<b>Email :</b> " + data.email + "<br><br>" +
            "<b>Course :</b> " + data.course + "<br><br>" +
            "<b>Feedback :</b> " + data.feedback;

    }

    // Read student name from Session Storage
    const user = sessionStorage.getItem("sessionUser");

    // If session data exists, display current user
    if (user !== null) {

        sessionUser.innerHTML = "Current Session User: " + user;

    }

};


// Validate Student Name

function validateName() {

    // Check if name is empty
    if (nameInput.value.trim() === "") {

        nameError.innerHTML = "Name is required.";
        return false;

    }

    // Check minimum length
    if (nameInput.value.trim().length < 3) {

        nameError.innerHTML = "Name must contain at least 3 characters.";
        return false;

    }

    // Remove error if valid
    nameError.innerHTML = "";
    return true;
}


// Validate Email

function validateEmail() {

    // Email pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Check if email is empty
    if (emailInput.value.trim() === "") {

        emailError.innerHTML = "Email is required.";
        return false;

    }

    // Check email format
    if (!emailInput.value.match(emailPattern)) {

        emailError.innerHTML = "Enter a valid email.";
        return false;

    }

    // Remove error
    emailError.innerHTML = "";
    return true;

}


// Validate Course

function validateCourse() {

    // Check if user selected a course
    if (courseInput.value === "") {

        courseError.innerHTML = "Please select a course.";
        return false;

    }

    // Remove error
    courseError.innerHTML = "";
    return true;

}


// Validate Feedback

function validateFeedback() {

    // Check if feedback is empty
    if (feedbackInput.value.trim() === "") {

        feedbackError.innerHTML = "Please enter feedback.";
        return false;

    }

    // Remove error
    feedbackError.innerHTML = "";
    return true;

}


// Remove error messages automatically

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
courseInput.addEventListener("change", validateCourse);
feedbackInput.addEventListener("input", validateFeedback);


// Submit Form

form.addEventListener("submit", function (e) {

    // Prevent page refresh
    e.preventDefault();

    // Validate all fields
    const validName = validateName();
    const validEmail = validateEmail();
    const validCourse = validateCourse();
    const validFeedback = validateFeedback();

    // If every field is valid
    if (validName && validEmail && validCourse && validFeedback) {

        // Create an object containing all details
        const data = {

            name: nameInput.value,
            email: emailInput.value,
            course: courseInput.value,
            feedback: feedbackInput.value

        };

        // Store complete object in Local Storage
        localStorage.setItem("feedbackData", JSON.stringify(data));

        // Store only student name in Session Storage
        sessionStorage.setItem("sessionUser", nameInput.value);

        // Display current session user
        sessionUser.innerHTML = "Current Session User: " + nameInput.value;

        // Display feedback below the form
        storedData.innerHTML =
            "<b>Name :</b> " + data.name + "<br><br>" +
            "<b>Email :</b> " + data.email + "<br><br>" +
            "<b>Course :</b> " + data.course + "<br><br>" +
            "<b>Feedback :</b> " + data.feedback;

        // Display success message
        alert("Feedback Submitted Successfully!");

        // Clear form fields
        form.reset();

    }

});


// Delete Stored Data

document.getElementById("deleteBtn").addEventListener("click", function () {

    // Remove Local Storage data
    localStorage.removeItem("feedbackData");

    // Remove Session Storage data
    sessionStorage.removeItem("sessionUser");

    // Display default message
    storedData.innerHTML = "No feedback stored.";

    // Remove current session user
    sessionUser.innerHTML = "";

    // Show confirmation message
    alert("Stored Data Deleted.");

});