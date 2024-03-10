const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

// ------- //

function formInputHandler(event) {
    const email = input.value;
    const message = textarea.value;
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data);
}

form.addEventListener("input", formInputHandler);

// ------- //

const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
try {
    const data = JSON.parse(jsn);
    input.value = data.email;
    textarea.value = data.message;
} catch {
    console.log("No saved data")
}

// -------- //


function formSubmitHandler(event) {
    event.preventDefault();
    if (input.value === "" || textarea.value === "") {
        return alert("Fill up the data!")
    } else {
        console.log(localStorage.getItem(STORAGE_KEY));
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    }
}

form.addEventListener("submit", formSubmitHandler);




