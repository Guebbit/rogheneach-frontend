<template>
	<div id="rogheneach">
		<div ref="hero-header" class="hero-header">
			<div ref="parallax" class="parallax"
				@mousemove.stop="mouse_parallax($event)"
			>
				<img v-for="this_image in images"
					class="parallax-layer parallax-smooth"
					:src="'assets/images/'+this_image.src"
					:data-parallax-deep="this_image.deep || 0"
					:data-parallax-disallow="this_image.disallow || ''"
				/>
			</div>

			<h3 class="hero-author white-text center-align">
				<b>Myriam Savini</b>
				<br />
				<small>presents</small>
			</h3>
			<h1 class="hero-title">
				<img alt="Rogheneach" title="Rogheneach"
					src="assets/images/logo/thumbnail/rogh-logotype.png"
					data-src="assets/images/logo/rogh-logotype.png"
				/>
			</h1>
			<div class="hero-actions center-align">
				<a href="#buy-volume" class="btn-large cta black-text">{{ $t('header.readme-button') }}</a>
				<a class="btn-large cta btn-primary"
					href="https://mychron.it/"
					target="_blank"
				>
					{{ $t('header.website-button') }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { throttle } from "lodash";
// import { mouseParallax } from "guebbit-javascript-library";

export default {
	name: 'Header',

	data: function(){
		return {
			interval: false
		};
	},

	props: {
		images:{
			type: Array,
			default: function () {
				return [];
			}
		},
	},

	methods: {

		mouse_parallax: throttle(function(event) {
			if(this.interval)
				clearInterval(this.interval);
			this.parallax(event.clientX, event.clientY);
		}, 100),

		parallax: function(x, y){
      return; //TODO
			let element = this.$refs["parallax"];
			if(!element)
				return false;

			let layers = element.children,
				itemXY, i;

			for(i = layers.length; i--; ){
				// TODO itemXY = mouseParallax(x, y, parseInt(layers[i].getAttribute("data-parallax-deep")), layers[i].getAttribute("data-parallax-disallow"));
				layers[i].style.transform = 'translate(' + (itemXY[0] - 50) + '%, ' + (itemXY[1] - 50) + '%)';
			}
		},

		auto_parallax: function() {
			let steps = 50,
				speed = 100, //milliseconds
				Xmax = 1800, Xmin = 0,
				incrementX = (Xmax - Xmin) / steps,
				countdownX = Xmax,
				Ymax = 1200, Ymin = 0,
				incrementY = (Ymax - Ymin) / steps,
				countdownY = Ymax;
			this.interval = setInterval(() => {
				countdownX-=incrementX;
				countdownY-=incrementY;
				this.parallax(countdownX, countdownY);

				if(countdownX < Xmin || countdownY < Ymin)
					clearInterval(this.interval);
			}, speed);
		},

	},


	mounted(){
		// Entrata in scena
		setTimeout(() => {
			this.$refs["hero-header"].classList.add("present-rogheneach");
		}, 1000);
		// Anche senza mouse (ma appena parte, stoppa)
		setTimeout(() => {
			this.auto_parallax();
		}, 2000);
	}
}
</script>
