var connection;
var twillo={
		session:undefined,
		Data:undefined,
}
twillo.enterNumber = function(ele){
	var number = $(ele).find("label").text();
	var inputBox = $("#dialNumber");
	if("Clear" === number){
		inputBox.val('');
	}
	else if ("Delete" === number){
		inputBox.val(inputBox.val().slice(0,-1))
	}
	else{
		inputBox.val(inputBox.val()+number);
	}
};
twillo.showKeyPad  = function() {
	$(".twilloWdgt").hide();
	$("#keypadWdgt").show();	
};
var d = new Date();
var currentTime= d.getTime();
console.log("globeltime="+currentTime);
twillo.showtwilloWdgt = function(obj) {
	$("#keypadWdgt").hide();
	$(".twilloWdgt").show();	
	$('#getuserFrom').text(obj);
	ZOHO.CRM.UI.Dialer.maximize();
	var newdate = new Date();
	currentTime= newdate.getTime();
	console.log("aftermaximize currentTime in seconds ="+(currentTime/1000).toFixed(2));

//	Twilio.Device.incoming($("#dialNumber").val());
};

twillo.holdCall  = function() {
	alert('Holding call');
}
twillo.clientMuteCall  = function() {
		connection.mute(!connection.isMuted());		
	  console.log("muteCall ="+!connection.isMuted());
}

twillo.endCall  = function() {
	connection.disconnect();
	  console.log("the call has ended");
}
twillo.clearAll = function() { jQuery("#dialNumber").val(''); }