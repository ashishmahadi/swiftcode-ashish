var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){
$scope.messages = [
	{
		sender:"BOT",
	    text: "Hey",
	    time:"1:05"
	},
	{  
		sender:"user",
	    text: "wassup?",
	    time:"1:05"
	},
	{
		sender:"BOT",
	    text: "nm, how are you?",
	    time:"1:06"
}
];
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       jsonData.time
       console.log(jsonData);
   };

});