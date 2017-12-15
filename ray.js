"use strict";
var rays = new Object({
	canvas: false,
	context: false,
	number: 0,
	interval: false,
	speed: 0,
	first: true,
	init: function(idCanvas, number, background, colors, speed, fps) {
		this.canvas = document.getElementById(idCanvas);
		this.context = this.canvas.getContext('2d');
		this.number = number;
		this.canvas.style.background = background;
		var gradient = this.context.createRadialGradient(
			0, 0, 0, 0, 0, Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)) / 2
		);
		if (colors.length <= 1) {
			gradient.addColorStop(0, colors[0]);
		} else {
			for (var i = 0; i < colors.length; i++) {
				gradient.addColorStop(i / (colors.length - 1), colors[i]);
			}
		}
		this.context.fillStyle = gradient;
		clearInterval(this.interval);
		this.first = true;
		this.speed = speed || 0;
		if (this.speed > 0 && ((typeof fps === 'undefined') ? '0' : fps) > 0) {
			this.interval = setInterval(function() {
				rays.draw();
			}, fps / 1000);
		} else {
			rays.draw();
		}
	},
	draw: function() {
		this.context.save();
		this.context.setTransform(1, 0, 0, 1, 0, 0);
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.restore();
		var angle = 180 / this.number,
			midx = this.canvas.width / 2,
			midy = this.canvas.height / 2;

		if (this.first) {
			this.context.translate(midx, midy);
			this.first = false;
		} else if (this.speed > 0) {
			this.context.rotate(this.speed * Math.PI / 180);
		}
		for (var i = 0; i < this.number; i++) {
			this.context.beginPath();
			this.context.moveTo(0, 0);
			this.context.lineTo(Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)), 0);
			this.context.rotate(angle * Math.PI / 180);
			this.context.lineTo(Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)), 0);
			this.context.moveTo(0, 0);
			this.context.fill();
			this.context.closePath();
			this.context.rotate(angle * Math.PI / 180);
		};
	}
});