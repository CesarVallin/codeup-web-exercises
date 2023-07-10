
$(() => {

    // Equivalent of handler functions:
    function underlineThis(e) {
        // changes only the h2 that was clicked
        $(e.target).css('text-decoration', 'underline');
        // $('p').css()
    }

    function noUnderlineThis() {
        $(this).css('text-decoration', 'none');
    }

    function changeToPointer(e) {
        $(e.target).css('cursor', 'pointer');
    }

    function hideUnorderedList() {
        $('ul').css('display', 'none');
    }

    // Equivalent to .addEventListener:
    $('h2')
        .on('click', underlineThis)
        .on('dblclick', noUnderlineThis)
        .on('mouseenter', changeToPointer)

    $('h1')
        .on('click', hideUnorderedList)

})
