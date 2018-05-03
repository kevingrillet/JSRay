# JSRay
Ray implementation in JavaScript.

## Usage ##

#### HTML ####
```html
<script type="text/javascript" src="ray.js"></script>
```
#### JavaScript ####
#### Static ####
```javascript
var static = function(){
  cRay.width = window.innerWidth;
  cRay.height = window.innerHeight;
  rays.init(
    'cRay', //idCanvas
    10, //number
    'rgb(0, 0, 0)', //background
    [
      'rgba(255, 0, 0, 1)',
      'rgba(255, 127, 0, 1)',
      'rgba(255, 255, 0, 1)',
      'rgba(0, 255, 0, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(139, 0, 255, 1)'
     ] //colors
  );
};
window.addEventListener('load', function() { static(); });
```
#### Animate ####
```javascript
var animate = function(){
  cRay.width = window.innerWidth;
  cRay.height = window.innerHeight;
  rays.init(
    'cRay', //idCanvas
    10, //number
    'rgb(0, 0, 0)', //background
    [
      'rgba(255, 0, 0, 1)',
      'rgba(255, 127, 0, 1)',
      'rgba(255, 255, 0, 1)',
      'rgba(0, 255, 0, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(139, 0, 255, 1)'
    ], //colors
    0.1, //speed (optional)
    25 //fps (optional)
  );
};
window.addEventListener('load', function() { animate(); });
window.addEventListener('resize', function() { animate(); });
```
