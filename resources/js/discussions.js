/**
 * @author lucamanno
 */
$(document).ready(function(){
	$("ul.tabSwitcher li").click(function(){
		if($(this).hasClass('tabSelected')){return false;}
		$(".discussionsBlock").toggleClass('discussionsBlockSelected');
		$(this).parent().find("li").toggleClass('tabSelected');
	});
})
