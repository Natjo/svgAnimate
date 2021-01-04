function svgAnimate(el){
	var inc = 0;
	el.querySelectorAll('path').forEach((path, i) => {
		const length = path.getTotalLength();
		path.style.animationDelay = `${i*length}ms`;
		path.style.animationName = 'svgAnimate';
		path.style.animationFillMode = 'forwards';
		path.style.animationTimingFunction = 'linear';
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		path.style.animationDuration = `${length}ms`;
		inc = inc + length;
	});
}

export default svgAnimate;
