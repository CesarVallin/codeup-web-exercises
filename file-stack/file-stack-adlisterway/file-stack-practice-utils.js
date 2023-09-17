

export class FilePickerAPI {

    static async getFilePicker() {
        const client = await filestack.init(FILE_STACK_API);
        const options = {
            fromSources: ["local_file_system"],
            transformations: {
                crop: { aspectRatio: 1 / 1, force: true},
                circle: true,
            },
            imageMin: [200, 200],
            imageMax: [400, 400],
            onFileUploadFinished: file => {
                console.log(file.url);
                const uploadPreview = document.querySelector("#upload-preview");
                uploadPreview.innerHTML = `
                    <img src="${file.url}">
                `;
                const uploadInput = document.querySelector("#upload-input");
                uploadInput.value = file.url;
            }
        };
        client.picker(options).open();
    }
}

/** for upload preview, you can set the innerHTML here, or simply or use a set up like this:
 *
 *
 * ON HTML
 * <div style="text-align:center;">
 *   <img id="result" style="width:600px" />
 * </div>
 *
 *
 * ON API call
 * const tr = new FilestackTransform('API_KEY')
 * tr.open(FILE_URL).then(res => { // replace FILE_URL with the link to the image
 *   document.getElementById('result').src = res // display result of the transformations
 * })
 *
 *
 * NOTICE -------------------------
 * DOM manipulation works with ().src, which is the image source attribute.
 *
 * */