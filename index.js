const eventNameInput = document.querySelector(".event-name-input");
const eventDateInput = document.querySelector(".event-date-input");
const startTimeInput = document.querySelector(".start-time-input");
const endTimeInput = document.querySelector(".end-time-input");
const eventDescriptionInput = document.querySelector(".event-description-input");
const locationInput = document.querySelector(".location-input");
const submitButton = document.querySelector(".submit-button");
const dialogBox = document.querySelector(".dialog-box-div");
const cancelButton = document.querySelector(".dialog-button")

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!eventNameInput.value || !eventDateInput.value || !startTimeInput.value || !endTimeInput.value || !eventDescriptionInput.value || !locationInput.value) {
        dialogBox.style.display = "flex";
    }
    else
        console.log("happy to go");
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialogBox.style.display = "none";
});

