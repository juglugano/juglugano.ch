/**
 * @author lucamanno
 */
$(document).ready(function(){
	$("ul.tabSwitcher li").click(function(){
		if($(this).hasClass('tabSelected')){return false;}	
		$(".discussionsBlockSelected").removeClass("discussionsBlockSelected");
		var rel = $(this).find("a").attr("rel");
		$("#"+rel).addClass("discussionsBlockSelected");
		$("li.tabSelected").removeClass("tabSelected");
		$(this).addClass("tabSelected");
		$("#bookStatus").text($(this).find("a").attr("rev"));
	});
	
	$(".trunk").each(function(i){
		var $this = $(this);
		if($this.text().length>500){
			$this.truncate(500, {
				chars: /\s/,
				trail: [" <a href='#' class='truncate_show'>...more</a>", " <a href='#' class='truncate_hide'>less</a> "]
			});
		}
	});
	
	$(".moreInfo").each(function(i){
		var $this = $(this);
		$this.bind("click",function(){
			$(this).next().toggle();
		});
	});
	
	var realMail = ["book","lugano","jug","reviews"];
	
	$("#bookReviewsEmail")
						.attr("href","mailto:"+realMail[0]+realMail[3]+"@"+realMail[2]+realMail[1]+".ch")
						.text(realMail[0]+realMail[3]+"@"+realMail[2]+realMail[1]+".ch");
	
});
