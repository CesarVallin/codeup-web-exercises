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

    });

    /**
     *
     * Certainly! The code you're asking about is using the FormData constructor to create a new FormData object. FormData is a built-in JavaScript object that allows you to easily capture and manipulate form data from HTML forms.
     *
     * Here's a breakdown of that part of the code:
     *
     * const formData = new FormData(form);: This line creates a new FormData object named formData. It takes one argument, which is the HTML form element (form) you want to capture data from. When you pass a form element to the FormData constructor, it automatically collects all the form input values within that form.
     *
     * const username = formData.get("username");: After creating the FormData object, you can use the get method to retrieve the values of specific form fields by their name attribute. In this case, it's retrieving the value of the input field with the name "username" and assigning it to the variable username.
     *
     * const email = formData.get("email");: Similarly, this line retrieves the value of the input field with the name "email" and assigns it to the variable email.
     *
     * So, the purpose of this code is to gather the values of the "username" and "email" input fields from the form and store them in the username and email variables, respectively. This makes it easy to access and work with the form data in JavaScript.
     *
     * */





}) ();