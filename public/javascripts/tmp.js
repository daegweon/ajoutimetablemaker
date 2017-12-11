$('#login-btn').click(function () {
    $.ajax({
        method: "POST",
        url: "/home",
        data: { name: "John", location: "Boston" }
    })
        .done(function( data ) {
            console.log(JSON.stringify(data));
        });
});
