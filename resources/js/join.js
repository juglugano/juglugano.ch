var manageResponse = function(data){
	var _self = $("form#joinForm");
	var $emailval = $("input[name='email']").val();
	var reCAPTCHA = 'g-recaptcha-response';
	if(data.stat){
		$(_self).hide();
		$(_self).next().html("Thank you for submitting your request to join JUG Lugano!<br/>We will be in touch soon.<br/><br/>Regards.");
		/*if($("input.checkbox:checked").length){
			$("#joinContainer").append("<iframe src='http://groups.google.com/group/juglugano/boxsubscribe?email="+$emailval+"' width='0' height='0'></iframe>")
		}*/
	} else {
		$(_self).find("input").css("border-bottom-color","#ccc");
		var inputsErrorEl = $(_self).next().find("span#form-inputs-error");
		var recaptchaErrorEl = $(_self).next().find("span#recaptcha-error");
		inputsErrorEl.text('');
		recaptchaErrorEl.text('');
		
		for(var i in data.errors){
			if (data.errors[i] != reCAPTCHA) {
				$(_self).find("input[name='"+data.errors[i]+"']").css("border-bottom-color","#fd0000");
				inputsErrorEl.text("Please correct the highlighted fields.");
			}
		}		
		
		if (data.errors.indexOf('g-recaptcha-response') >= 0) {
			recaptchaErrorEl.text("reCAPTCHA validation failed. Please try again.");
		}
	}
}

$(document).ready(function(){
	$("#joinForm").attr("target","ifram");
});
