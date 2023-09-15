import {FilePickerAPI} from "./file-stack-practice-utils.js";

(async () => {

    console.log("inside file-picker.js")

    const clickBtn = document.querySelector("#upload-image");

    clickBtn.addEventListener("click", async(e) =>  {
        console.log("inside upload-image event listener")
        e.preventDefault();
        const filePickerObject = await FilePickerAPI.getFilePicker();
        console.log(filePickerObject);

    });

    /**
     * This step is just to show rendered results within the same HTML file.
     * However, very informative.
     * */
    /** For testing form */
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent form from submitting normally

        const usernameDisplay = document.querySelector("#username-display");
        const emailDisplay = document.querySelector("#email-display");
        const imageDisplay = document.querySelector("#image-display");

       /** Get form data */
        const formData = new FormData(form)
        const username = formData.get("username");
        const email = formData.get("email");
        const image = formData.get("url");

        // InnerHTML...
        usernameDisplay.innerHTML = `<p>${username}</p>`;
        emailDisplay.innerHTML = `<p>${email}</p>`;
        if (image) {
            imageDisplay.innerHTML = `<img src="${image}">`;
        } else {
            imageDisplay.innerHTML = `<p>Oops, no image</p>`;
        }

    })





}) ();