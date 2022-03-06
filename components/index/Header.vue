<template>
  <div id="rogheneach">
    <div ref="hero-header"
         class="hero-header"
         @mousemove.stop="mouse_parallax($event)"
    >
      <img v-for="this_image in headerImages"
           ref="parallax-items"
           class="parallax-layer parallax-smooth"
           :src="$config.assetUrl+this_image.thumbnail"
           :data-src="$config.assetUrl+this_image.src"
           :data-parallax-movement-intensity="this_image.intensity"
           :data-parallax-movement-intensity-x="this_image.intensityx"
           :data-parallax-movement-intensity-y="this_image.intensityy"
           :data-parallax-movement-speed="this_image.speed"
      />
      <h3 class="hero-author white-text center-align">
        <b>Myriam Savini</b>
        <br/>
        <small>presents</small>
      </h3>
      <h1 class="hero-title">
        <img alt="Rogheneach" title="Rogheneach"
             :src="$config.assetUrl+'images/logo/thumbnail/rogh-logotype.png'"
             :data-src="$config.assetUrl+'images/logo/rogh-logotype.png'"
        />
      </h1>
      <div class="hero-actions center-align">
        <a href="#buy-volume" class="btn-large cta black-text">{{ $t('header.readme-button') }}</a>
        <a class="btn-large cta btn-primary"
           href="https://myriamsaviniart.tumblr.com/"
           target="_blank"
        >
          {{ $t('header.website-button') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {throttle} from "lodash";
import {mouseParallax, executeMouseParallax} from "guebbit-javascript-library";

export default {
  name: 'Header',

  data() {
    return {
      parallax: null,
      activatedParallax: false,
      headerImages: [
        {
          src: "images/index/parallax/0.png",
          thumbnail: "images/index/parallax/thumbnail/0.png",
          intensity: 0
        },
        {
          src: "images/index/parallax/1.png",
          thumbnail: "images/index/parallax/thumbnail/1.png",
          intensity: 5,
          speed: 20000
        },
        {
          src: "images/index/parallax/2.png",
          thumbnail: "images/index/parallax/thumbnail/2.png",
          intensity: 10,
          speed: 10000
        },
        {
          src: "images/index/parallax/3.png",
          thumbnail: "images/index/parallax/thumbnail/3.png",
          intensityx: 10,
          intensityy: 5,
          speed: 20000
        },
        {
          src: "images/index/parallax/4.png",
          thumbnail: "images/index/parallax/thumbnail/4.png",
          intensityx: 10,
          intensityy: 5,
          speed: 20000
        }
      ]
    };
  },

  props: {
    images: {
      type: Array,
      default: function () {
        return [];
      }
    },
  },


  methods: {
    mouse_parallax: throttle(function (event) {
      if(!this.activatedParallax)
        return;
      executeMouseParallax(this.parallax, event.clientX, event.clientY)
    }, 100),
  },


  mounted() {
    // init
    this.parallax = mouseParallax(this.$refs["parallax-items"]);
    // Fade in background
    setTimeout(() => {
      this.$refs["hero-header"].classList.add("present-rogheneach");
    }, 1000);
    // Move in single direction, ignoring the mouse
    setTimeout(() => {
      executeMouseParallax(this.parallax, 40, 1200)
    }, 2000);
    // Activate true mouse parallax after speeding up all parallax-layers
    setTimeout(() => {
      // speed up all elements
      for(let i = this.headerImages.length; i--; )
        // this.headerImages[i].speed = this.headerImages[i].speed / 10;
        this.$set(this.headerImages[i], 'speed', this.headerImages[i].speed / 20)
      // update with the new values
      // this.$forceUpdate();
      // after changes
      this.$nextTick(() => {
        // re init is needed
        this.parallax = mouseParallax(this.$refs["parallax-items"]);
        // unlock
        this.activatedParallax = true;
      })
    }, 8000);
  }
}
</script>
