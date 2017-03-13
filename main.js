$(function () {
	// var $li = $("ul li:eq(1)");
	// var li_text = $li.text();
	// alert(li_text);
	


	// $("ul").append('<li>banana</li>');


	$("#address").focus(function() {
		
        if ($(this).val() == "please input name")
			$(this).val("");
	});



	$("#address").blur(function() {
		
        if ($(this).val() == "")
			$(this).val("please input name");
	});










})


