$(function () {
	// var $li = $("ul li:eq(1)");
	// var li_text = $li.text();
	// alert(li_text);
	


	$("ul").append('<li style= "color: red">我是jq插进来的banana</li>');


	$("#address").focus(function() {
		
        if ($(this).val() == "please input name")
			$(this).val("");
	});



	$("#address").blur(function() {
		
        if ($(this).val() == "")
			$(this).val("please input name");
	});

	// cookie函数
	var cookie_Name = 'username';
	if($.cookie(cookie_Name)){
		$("#username").val($.cookie(cookie_Name));
	}



	$("#check").click(function () {
		if(this.checked){
			$.cookie(cookie_Name,$("#username").val(),{ path : '/',expires : 10});
		}
		else{
			$.cookie(cookie_Name,null,{ path :'/'});
		}
    });









});


