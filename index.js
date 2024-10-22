const eventNameInput = document.querySelector(".event-name-input");
const eventDateInput = document.querySelector(".event-date-input");
const startTimeInput = document.querySelector(".start-time-input");
const endTimeInput = document.querySelector(".end-time-input");
const locationInput = document.querySelector(".location-input");
const eventDescriptionInput = document.querySelector(".event-description-input");

const dialogBox = document.querySelector(".dialog-box-div");
const cancelButton = document.querySelector(".dialog-button");
const submitButton = document.querySelector(".submit-button");
const formDiv = document.querySelector(".form-div");
const invitationDiv = document.querySelector(".invitation-div");
const invitaionBody = document.querySelector("body");

const invitationTitle = document.querySelector(".invitation-title");
const invitationDate = document.querySelector(".invitation-date");
const invitationTime = document.querySelector(".invitation-time");
const invitationPlace = document.querySelector(".invitation-place");
const invitationDescription = document.querySelector(".invitation-description");


const formateTime = (timeValue) => {
    let [hour, minute] = timeValue.split(":");
    hour = parseInt(hour);
    let period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${hour}:${minute} ${period}`;
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!eventNameInput.value || !eventDateInput.value || !startTimeInput.value || !endTimeInput.value || !eventDescriptionInput.value || !locationInput.value) {
        dialogBox.style.display = "flex";
    }
    else {
        formDiv.style.display = "none";
        invitationTitle.textContent = eventNameInput.value;

        const dateValue = new Date(eventDateInput.value);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateValue);
        invitationDate.textContent = formattedDate;

        invitationTime.textContent = `${formateTime(startTimeInput.value)} - ${formateTime(endTimeInput.value)}`;

        invitationPlace.textContent = locationInput.value;
        invitationDescription.textContent = eventDescriptionInput.value;
        invitaionBody.style.background = "white";
        invitationDiv.style.display = "flex";

    }
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialogBox.style.display = "none";
});