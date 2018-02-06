var express = require('express');
var app = express();
var request = require('request');
//so i dont have to type '.ejs' after all my file names
app.set("view engine", "ejs");
//tells express to serve the content of the public directory
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("search");
});













app.get("/location", function(req, res){
  var query = req.query.zipCode;
  // console.log(query);
  // var url =  "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encodeURIComponent(query);
  var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + query + ",us&appid=eff3fabcb8e44fd98fecacc79fe132c5";
  // console.log(url);
  request(url, function (error, response, body) {
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      // console.log(data["weather"][0]["icon"]);
      res.render("location", {data: data, query: query});
    }
  });

  // var url2 = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d18dc07dcd654e6f815d80d10c42ce31";
  // request(url2, function (error, response, body) {
  //   if(!error && response.statusCode == 200){
  //     var newsData = JSON.parse(body);
  //     console.log(newsData["articles"][0]["title"]);
  //     res.render("location", {newsData: newsData});
  //   }
  // });

});





// request('https://api.darksky.net/forecast/955afc0d9f116fc7342b76d7c3373150/38.980237,-76.940161', function (error, response, body) {
//   if(!error && response.statusCode == 200){
//     var data = JSON.parse(body);
//     console.log("Current Temp: " + data["currently"]["temperature"]);
//     console.log("Current Humidity: " + data["currently"]["humidity"]);
//     console.log("Current Wind Speed:" + data["currently"]["windSpeed"]);
//     console.log("Current Minutely Summary: " + data["minutely"]["summary"]);
//     console.log("Current Hourly Summary: " + data["hourly"]["summary"]);
//     console.log("Current Hourly Icon: " + data["hourly"]["icon"]);
//     console.log("Current Daily Summary: " + data["daily"]["summary"]);
//   }
// });


// <div class="news">
//   <% for(var i = 0; i < newsData["totalResults"]; i++) {%>
//     <!-- <li> <%= newsData["articles"][i]["title"]  %> </li>
//
//   <% } %>
// </div> -->


app.listen(8000, function(){
  console.log("Server starting on port 8000");
})
