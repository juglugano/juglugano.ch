$(document).ready(function(){
	
	var attachBeahviour = function(){
		$(".memberBox .name").click(function(){
			var $this = $(this);
			var $status = $this.find("span.toggle");
			$this.next().slideToggle('fast');
			var status = $status.text();
			if(status=="+"){$status.text('-')}else{$status.text('+')};
		});
	}
	
	attachBeahviour();
});