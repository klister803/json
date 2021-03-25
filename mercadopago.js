$(document).ready(function(){
	$(".payment-form").submit(function(event) {
		event.preventDefault();
		var url = $(this).attr("url");
		var data = $(this).serialize();
		
		$.ajax({
			type : 'POST',
			url  : url,
			crossDomain: true,
			data : data,
			dataType: 'json',
			success :  function(response){
				if(response.codigo == 1)
				{
					$("#mensagem").html(response.mensagem);
					if(response.url != null)
					{
						setTimeout(function() {
							window.location.href = response.url;
							$("#mensagem").html("");
						}, 2000);
					}
				}else{
					$("#mensagem").html(response.mensagem);
				}
			}
		});
	});
});