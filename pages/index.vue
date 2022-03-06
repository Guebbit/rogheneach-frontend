<template>
  <div>
    <rogh-menu />
    <rogh-header />
    <rogh-story-description/>

    <div id="buy-volume">
      <rogh-volume-buy
        v-for="volume in $t('volumeBuy.volumes')"
        :id="volume.id"
        :key="volume.id"
        :cover="volume.cover"
        :spine="volume.spine"
        :title="volume.title"
        :subtitle="volume.subtitle"
        :badges="volume.badges"
        :description="volume.description"
        :links="volume.links"
        :buy="volume.buy"
        :price="volume.price"
      />
    </div>

    <rogh-author-who/>
    <rogh-making-of/>
    <gen-footer/>
  </div>
</template>


<script>
import RoghMenu from '~/components/generic/Menu.vue'
import RoghHeader from '~/components/index/Header.vue'
import genFooter from '~/components/generic/Footer.vue'
import RoghStoryDescription from '~/components/index/StoryDescription.vue'
import RoghAuthorWho from '~/components/index/AuthorWho.vue'
import RoghVolumeBuy from '~/components/index/VolumeBuy.vue'
import RoghMakingOf from '~/components/index/MakingOf.vue'

import { scripts } from "guebbit-javascript-library";
import {intersectionHelper} from "guebbit-javascript-library";

export default {
  name: 'App',

  components: {
    RoghMenu,
    RoghHeader,
    genFooter,
    RoghStoryDescription,
    RoghAuthorWho,
    RoghVolumeBuy,
    RoghMakingOf,
  },

  middleware: 'language',

  head() {
    let metaArray = [],
      metaFile = this.$t('meta.og');

    for (var meta in metaFile)
      if (metaFile.hasOwnProperty(meta))
        metaArray.push({
          property: meta,
          content: metaFile[meta]
        });

    return {
      title: this.$t('meta.title'),
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        ...metaArray,
        {
          name: 'description',
          property: 'description',
          content: this.$t('meta.description')
        },
        //SVG
        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'msapplication-config',
          content: 'favicon/browserconfig.xml'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ],
    }
  },

  created() {
    //setto il linguaggio di default
    //this.$i18n.locale = document.querySelector('html').getAttribute('lang') || 'en';
  },

  mounted() {
    scripts.lazyload();
    scripts.activator();
  }
}
</script>

<style lang="scss">

// theme-vars
$primary-color: #DE4327;
$secondary-color: #F6DA3D;
$title-color: #465587;
$background-color: #000000;

// vars
$book4-height: 400px;
$book4-spine: 20px;
$book4-rotation: 3;
$webtoon-color: #58896f;

@import '../assets/scss/materialize-guebbit/materialize-guebbit';

@import '../assets/scss/heropanel2';
@import '../assets/scss/book4';
@import '../assets/scss/simplecard2';
@import '../assets/scss/simplefooter1';
@import '../assets/scss/heart';
@import '../assets/scss/index';
</style>
