function loadMap() {
     if (GBrowserIsCompatible()) {
       var map = new GMap2(document.getElementById("map"));
       map.setCenter(new GLatLng(46.010708,8.958148), 15);
	var point = new GLatLng(46.010708,8.958148);
	var marker = new GMarker(point);
	GEvent.addListener(marker, "click", function() {
	  //TODO add event
	});			
	map.addOverlay(marker);
     }
};

			$(document).ready(function(){
				$("a[rel='external']").attr("target","_blank");
				$("head").append('<link rel="stylesheet" type="text/css" href="../css/beautifier.html"/>');
				
				loadMap();
				
				//Accordion
				//$("h3.sectorTitle").css("cursor","pointer").click(function(){$(this).next().show();$("h3.sectorTitle").not(this).next().hide()});.not(":eq(0)").next().hide();
				
				$("#registerToEvent").click(function(){
					var id = $(this).attr("rel");
					openDialog(id);
				});
				
				$("#showBuildingMap").click(function(){
					var id = $(this).attr("rel");
					openDialog(id);				
				});
								
				$(".closeDialog").click(function(){
					var dialogId = $(this).parents('div').attr('id');
					closeDialog(dialogId);
				})
				
				var openDialog = function(id){
					var dialogId = id;
					$("#overlay").css({
						width: $(document).width(),
						height: $(document).height(),
						opacity: 0.7,
						zIndex: 10
					}).fadeIn('200').click(function(){
						closeDialog(id);
					});					
					$("#"+dialogId).fadeIn(400);
				};
				
				var closeDialog = function(id){
					$("#"+id).fadeOut('100');
					$("#overlay").fadeOut('100');
					setTimeout(restoreForm,200);
				};
				
				var restoreForm = function(){
					$("#registrationFeedback").text("");
					$("#registrationDialog form").show();						
				}				
				
				$("#registrationDialog form").submit(function(){
					var _self = this;
					
					var url = new String(location.href);
					var l = url.lastIndexOf('../index.html');
					var p = url.substr(l,url.length);
					p = p.replace(/^[0-9A-Za-z]+$/g,"");
					
					$.ajax({
						url: '/save/registerToEvent',
						dataType: 'json',
						type: 'post',
						data: $(this).find("input").serialize(),
						success: function(data,textStatus){
							if(data.stat){
								$(_self).hide();
								$("#registrationFeedback").html("<br/><br/>Thank you for your registration to the next JUG Lugano meeting.<br/>We will be in touch soon.<br/><br/>Regards");
								var cl = function(){
									closeDialog("registrationDialog");
								};
								setTimeout(cl,4000);
							} else {
								$("#registrationFeedback").text("");
								$(_self).find("input").css("border-bottom-color","#ccc");
								for(var i in data.errors){
									$(_self).find("input[name='"+data.errors[i]+"']").css("border-bottom-color","#fd0000");
								}
								console.log($(_self+" .errors"));
								$("#registrationFeedback").text("please correct the highlighted fields");
							}
						}
					});
					return false;
				});
				
			});

