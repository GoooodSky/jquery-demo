$(document).ready(function(){ 
	$("#search").click(function(){ 
		$.ajax({ 
		    type: "GET", 	
			url: "http://localhost/ajaxupload/serverjson.php?number=" + $("#keyword").val(),
			dataType: "json",
			success: function(data) {
				if (data.success) { 
					$("#searchResult").html(data.msg);
				} else {
					$("#searchResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			},     
		});
	});
	

});