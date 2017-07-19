 	


 function getData() {
 	//return $.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAlrgwL-xe4r9Yt4zIbMTxEBQOZzGMg2ek&callback=initMap");
 // 	 var mysql = require('./mysql');


 // 	var con = mysql.createConnection({
 //  		host: "sql9.freemysqlhosting.net",
 //  		user: "sql9185922",
 //  		password: "cbZhQ4XAFX"
	// });

	// con.connect(function(err) {
 // 	 if (err) throw err;
 // 	 console.log("Connected!");
	// });	
	console.log("Test");
};

$(document).ready(function(){
	console.log("ready!");
	getData();
});