"use strict";
console.log(`hello from ajax-store.js`);

(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements


    // ------------------------------------------------------------------------------------------
    // // Variable... for JS verion:
    const tbody = document.querySelector('#insertProducts');
    const refreshToolsBtn = document.querySelector('button');
    //
    // Ajax request -- With JS // 'getter function'
    function getTools(){
        $.ajax(`data/inventory.json`).done((tools) => {
            // accessing the object:
            console.log(tools);


            // Function rendering all tools:
            renderTools(tools);
        });
    }
    // JS
    // Function rendering all tools // 'render function'
    function renderTools (tools) {
        tools.forEach(tool => {
            const createdRow = document.createElement('tr');
            createdRow.innerHTML = `
                <td>${tool.title}</td>
                <td>${tool.quantity}</td>
                <td>$ ${tool.price}</td>
                <td>${tool.categories.join(' , ')}</td>
            `;
            tbody.appendChild(createdRow);
        })
    }
    // Call Your ajax request once you are ready to go!!
    getTools();
    // Function for refresh button:
    refreshToolsBtn.addEventListener('click', () => {
        tbody.innerHTML = '';
        getTools();
    });

    // -----------------------------------


    // // With jQuery:
    // $.ajax(`data/inventory.json`).done((tools) => {
    //     for (let i = 0; i < tools.length; i++) {
    //         const createdRow = $('<tr>');
    //         createdRow.html(`
    //             <td>${tools[i].title}</td>
    //             <td>${tools[i].quantity}</td>
    //             <td>${tools[i].price}</td>
    //             <td>${tools[i].categories.join(' , ')}</td>
    //         `);
    //         $('#insertProducts').append(createdRow);
    //     }
    // })

    // ------------------------------------------------------------------------------------------


})();