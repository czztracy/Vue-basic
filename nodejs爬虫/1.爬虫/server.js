//var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
//var mysql = require('mysql');
//var connection = mysql.createConnection({
//	host: 'localhost',
//	user: 'laoyao',
//	password: '123456789',
//	database: 'wangyiyanxuan'
//});
//connection.connect();
/*http.get("http://m.qdaily.com/mobile/special_columns.html",function(res){
	var data = "";
	res.on("data",function(chunk){
		data+=chunk
	})
	res.on("end",function(){
		console.log(data)
	})
})*/
fs.readFile("./index.html", function(err, data) {
	if(err) throw err;
//	console.log(data.toString());
	var html = data.toString();
	const $ = cheerio.load(html)
//	console.log($(".item").eq(2).find("img").attr("src"))
	var item = $(".com-grid-paper");
//	console.log(item);
	var json = [];
	for(var i = 0 ; i < 60; i++){
		var data = {
			id:item.eq(i).attr("data-guid"),
			img:item.eq(i).find(".imgcover img").attr("src"),
			title:item.eq(i).find(".title").html(),
			desc:item.eq(i).find(".description").html(),
			pic:item.eq(i).find(".category img").attr("src"),
			num:item.eq(i).find(".num").html()
			
		};
		json.push(data);
	}
		console.log(json)
//	console.log(item.eq(66).find(".category img").attr("src"));
	/*for(var i = 0; i < item.length; i++) {
		console.log($(".item").eq(i).find("img").attr("src"));
		console.log($(".item").eq(i).find("span").eq(5).html());
		console.log($(".item").eq(i).find("span").eq(8).html());
		var img = $(".item").eq(i).find("img").attr("src");
		var title = $(".item").eq(i).find("span").eq(5).html();
		var price = $(".item").eq(i).find(".price span").eq(2).html()?$(".item").eq(4).find(".price span").eq(2).html():0
//		connection.query(`INSERT INTO goods (img, title, price) VALUES ('${img}','${title}',${price})`, function(error, results, fields) {
//			if(error) throw error;
			//console.log('The solution is: ', results[0]);
		});*/
//	}
});