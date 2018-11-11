$(document).ready(function () {
    $('#submitWeather').submit(function (e) {
        e.preventDefault();
        var city = $("#city").val();
        console.log(city);

        if (city != '') {
            $.ajax({
                  // Get Api
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric"
                    + "&APPID=3380b72a9f8096670a3070be6016b450",
                type: "GET",
                datatype: "jsonp",
                success: function (data) {
                    console.log(data);
                    /* $("#temp").text(data.name);
                     $("#humidity").text(data.sys . country);
                     $("#wind").text(data.weather[0].description);
                     $("#main").append( data.maine.temp);*/


                     // Creat Items
                    $('.description').text(data.weather[0].description);
                    $('.name').text(data.name);
                    $('.temp').text(data.main.temp);
                    $('.humidity').text(data.main.humidity);
                    $('.wind').text(data.wind.speed);

                    $('.wwww').text(data.main.temp_min);
                    $('.fffff').text(data.main.temp_max);

                    console.log(descr);
                    $("#city").val('')
                }


            });
        } else {
            $("#error").html('fild cannot be empty')
        }



    });
});
/*
function show(data) {
    return "<h3><strong>weather</strong>:" + data.weather[0].main + "</h3>" +
        "<h3><strong>weather</strong>:" + data.weather[0].description + "</h3>";





}*/
