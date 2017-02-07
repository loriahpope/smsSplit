var inputMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed urna vel neque auctor molestie nec et libero. Praesent feugiat augue non odio dictum, ac porttitor tellus maximus. Nullam a mi euismod dolor vulputate mattis. Nullam urna metus, euismod eu lectus eget, aliquet interdum justo. Suspendisse nibh massa, dignissim at nibh vitae, eleifend tincidunt augue. Vestibulum vehicula mauris quam. Nullam id nisl velit.";

// var inputMessage = document.getElementbyId("inputMessage");

var sms = [];

for(var i = 0; i < inputMessage.length; i++){
	if(i%159 == 0){
		var temp = inputMessage.slice(0,160);
		sms.push(temp);
		inputMessage = inputMessage.slice(160);
	} else if(i%159 != 0){
		var temp = inputMessage.slice(0,160);
		sms.push(temp);
		inputMessage = inputMessage.slice(160);
	}
}

console.log(sms);


