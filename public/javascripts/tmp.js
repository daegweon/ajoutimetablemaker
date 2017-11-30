$('#login-btn').click(function () {
    $.ajax({
        method: "GET",
        url: "/home",
        data: { name: "John", location: "Boston" }
    })
        .done(function( data ) {
            console.log(JSON.stringify(data));
        });
});