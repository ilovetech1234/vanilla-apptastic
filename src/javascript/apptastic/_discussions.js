jQuery(function() {
	
	$("#PagerAfter").remove();
	
	$("#PagerBefore").each(function() {
		
		$(this).addClass("btn-group");
		$(this).children().addClass("btn btn-mini");
		$(this).find(".Highlight").addClass("active");
		$(this).find("span").addClass("disabled");
		
		$(".CommentHeading").prepend(this);
		
	});
	
});