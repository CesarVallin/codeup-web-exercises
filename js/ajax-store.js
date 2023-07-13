"use strict";
console.log(`hello from ajax-store.js`);

(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements



    // // Variable... for JS verion:
    // const tbody = document.querySelector('#insertProducts');
    //
    // // With JS:
    // $.ajax(`data/inventory.json`).done((tools) => {
    //     // accessing the object:
    //     console.log(tools);
    //     tools.forEach(tool => {
    //         console.log(`
    //             Tool tile: ${tool.title}
    //             Tool Quantity: ${tool.quantity}
    //             Tool Price: ${tool.price}
    //             Tool Categories: ${tool.categories}
    //         `);
    //         console.log(tool.categories);
    //     });
    //     tools.forEach(tool => {
    //        const createdRow = document.createElement('tr');
    //        createdRow.innerHTML = `
    //             <td>${tool.title}</td>
    //             <td>${tool.quantity}</td>
    //             <td>${tool.price}</td>
    //             <td>${tool.categories.join(' <> ')}</td>
    //        `;
    //        tbody.appendChild(createdRow);
    //     });
    //
    // });

    // With jQuery:
    $.ajax(`data/inventory.json`).done((tools) => {
        for (let i = 0; i < tools.length; i++) {
            const createdRow = $('<tr>');
            createdRow.html(`
                <td>${tools[i].title}</td>
                <td>${tools[i].quantity}</td>
                <td>${tools[i].price}</td>
                <td>${tools[i].categories.join(' , ')}</td>
            `);
            $('#insertProducts').append(createdRow);
        }
    })



})();