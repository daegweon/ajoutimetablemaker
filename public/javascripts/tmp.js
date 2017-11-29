$('#test-btn').click(function () {
    $.ajax({
        method: "GET",
        url: "/login/test",
        data: { name: "John", location: "Boston" }
    })
        .done(function( data ) {
            $('#test-h1').text(data.test);
            console.log(JSON.stringify(data));
        });
});
