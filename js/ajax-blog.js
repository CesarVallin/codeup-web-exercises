(function() {
    "use strict";
    console.log(`hello from ajax-blog.js`);

    // Variables...
    const blogsBody = document.querySelector('#post');

    // Ajax request -- With JS // 'getter function'
    function getBlogs () {
        $.ajax(`data/blog.json`).done((blogs) => {
            console.log(blogs);
            renderBlogs(blogs);
        });
    }

    // Function rendering all blogs // 'render function'
    function renderBlogs (blogs) {
        for (const blog of blogs) {
            const parentDiv = document.createElement('div');
            parentDiv.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <p>Categorie(s):  ${blog.categories.join(' , ')}</p>
                <p>${blog.date}</p>
            `;
            blogsBody.appendChild(parentDiv);
        }
    }

    // Call Your ajax request once you are ready to go!!
    getBlogs();






})();