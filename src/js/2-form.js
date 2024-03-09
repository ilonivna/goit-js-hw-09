const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

// ------- //

function formInputHandler(event) {
    event.preventDefault();
    const email = input.value;
    const message = textarea.value;
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data);
    console.log(data)
}
form.addEventListener("input", formInputHandler);

// ------- //

const jsn = localStorage.getItem(STORAGE_KEY);
const data = JSON.parse(jsn);
textarea.value = data.message;
input.value = data.email;

// -------- //


function formSubmitHandler(event) {
    event.preventDefault()
    if (input.value === "" || textarea.value === "") {
        alert("Fill up the data!")
    } 
        console.log(data)
    localStorage.removeItem(STORAGE_KEY);
    textarea.value = "";
    input.value = ""
}

form.addEventListener("submit", formSubmitHandler);




