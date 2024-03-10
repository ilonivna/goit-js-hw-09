const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

// ------- //

function formInputHandler(event) {
    const email = input.value.trim();
    const message = textarea.value.trim();
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data);
}

form.addEventListener("input", formInputHandler);

// ------- //


const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
email: "",
message: "",
};
input.value = data.email;
textarea.value = data.message;

// -------- //


function formSubmitHandler(event) {
    event.preventDefault();
    if (input.value === "" || textarea.value === "") {
        return alert("Fill up the data!")
    } else {
        console.log(data);
        localStorage.removeItem(STORAGE_KEY);
        textarea.value = "";
        input.value = "";
    }
}

form.addEventListener("submit", formSubmitHandler);




