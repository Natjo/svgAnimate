
# Svg animate

![version](https://img.shields.io/github/manifest-json/v/Natjo/svgAnimate)

Accessible tabulation navigation.

## Usage

### Css
```css
@keyframes svgAnimate{
	100%{
		stroke-dashoffset: 0;
	}
}
path{
	stroke: #9cc3e6; 
	stroke-width: 1;
	fill: none;
}
```
### javascript
```javascript
import svgAnimate from './modules/svgAnimate/svgAnimate';
svgAnimate(document.querySelector('svg'));
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/wvzmZXm?editors=0111)
