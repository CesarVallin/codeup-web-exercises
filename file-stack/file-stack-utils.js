export class FilePickerAPI {

    static async getFilePicker() {
        const client = await filestack.init(FILE_STACK_API);
        const options = {
            fromSources: ["local_file_system", "url"],
            transformations: {
                crop: { aspectRatio: 1 / 1, force: true },
            },
            maxFiles: 1,
            imageMin: [200, 200],
            imageMax: [200, 200],
            onUploadDone: response => {
                console.log(response.filesUploaded[0].url);

            }
        };
        client.picker(options).open();
    }
}