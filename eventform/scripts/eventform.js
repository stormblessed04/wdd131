const form = document.querySelector('#eventform');
const typeSelect = document.querySelector("#type-select");
const studentIdContainer = document.querySelector("#student-id-container");
const accessCodeContainer = document.querySelector("#access-code-container");
const studentId = document.querySelector("#student-id");
const accessCode = document.querySelector("#access-code");
const output = document.querySelector("#output");

function updateTypeField() {
    const value = typeSelect.value;

    // Show the student ID field if student is selected, or reset.
    if (value === "student"){
        studentIdContainer.hidden = false;
        studentId.required = true;
    }
    else {
        studentIdContainer.hidden = true;
        studentId.required = false;
    }

    // Show the access code field if guest is selected, or reset
    if (value === "guest"){
        accessCodeContainer.hidden = false;
        accessCode.required = true;
    }
    else {
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    }
}

typeSelect.addEventListener("change", updateTypeField);
updateTypeField();

// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.typeSelect.value;
    const eventDate = form.eventDate.value;
    const studentINum = form.studentId.value.trim();
    const accessCodeVal = form.accessCode.value.trim();

    // Validate the input
    // If the type is student, verify the I# is valid
    if (type === "student" && studentINum.length !== 9) {
        output.textContent = "Please enter a valid I-number";
        return;
    }

    // if the type is guest, verify the access code is valid
    if (type === "guest" && accessCodeVal !== "EVENT131") {
        output.textContent = "Invalid access code.";
        return;
    }

    // Verify the date is after the current date
    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a date after today.";
        return;
    }
    
    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event date: ${eventDate}</p>
    <p>Ticket type: ${type}</p>
    `;
    
    form.reset();
    updateTypeField();
});