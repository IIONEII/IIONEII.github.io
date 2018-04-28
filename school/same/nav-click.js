$(document).ready(function() {
	var navLi=$(".nav-bar > li");
	function reset() {
		$(".first-bar > img").attr('src','/images/first.png');
		$(".second-bar > img").attr('src','/images/second.png');
		$(".third-bar > img").attr('src','/images/third.png');
		$(".fourth-bar > img").attr('src','/images/fourth.png');
	}
    $(".first-bar").click(function() { reset();location.href='index.html';$(".first-bar > img").attr('src','/images/first1.png'); });
    $(".second-bar").click(function() { reset();location.href='footer.html';$(".second-bar > img").attr('src','/images/second1.png'); });
    $(".third-bar").click(function() { reset();location.href='chat.html';$(".third-bar > img").attr('src','/images/third1.png'); });
    $(".fourth-bar").click(function() { reset();location.href='mine.html';$(".fourth-bar > img").attr('src','/images/fourth1.png'); });
});