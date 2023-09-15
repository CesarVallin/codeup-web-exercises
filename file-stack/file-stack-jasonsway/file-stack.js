
import {FilePickerAPI} from "./file-stack-utils.js";

(async () => {

    // await FilePickerAPI.getFilePicker();

    const click = document.querySelector("#click-here");

    click.addEventListener("click", async() =>  {
        const filePickerObject = await FilePickerAPI.getFilePicker();
    })


}) ();