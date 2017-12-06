$('#login-btn').click(function () {
    $.ajax({
//<<<<<<< HEAD
//        method: "GET",
//=======
        method: "POST",
//>>>>>>> origin/HeeYeon
        url: "/home",
        data: { name: "John", location: "Boston" }
    })
        .done(function( data ) {
            console.log(JSON.stringify(data));
        });
});
