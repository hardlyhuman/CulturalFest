<script>
	var controller = new ScrollMagic.Controller({vertical: false});
</script>
 
<div id="parallaxText">
	<h1 class="layer1">PARALLAX</h1>
	<h1 class="layer2">PARALLAX</h1>
	<h1 class="layer3">
		PARALLAX
		<a href="#" class="viewsource">view source</a>
	</h1>
	
</div>
<script>
	// build tween
	var tween = new TimelineMax ()
		.add([
			TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
			TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
		]);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: $(window).width()})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
</s
