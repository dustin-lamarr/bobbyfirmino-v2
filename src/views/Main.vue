<template>
  <div class="w-screen h-screen bg-black">
    <Nav
      @home="homeKit"
      @away="awayKit"
      @third="thirdKit"
      @about="renderAbout"
      @default="renderHome"
      :class="{
        'border-orange text-cream': home,
        'border-green text-cream': away,
        'border-red text-red': third,
      }"
    />
    <div
      class="
        bg-red
        w-auto
        self-center
        flex flex-row
        md:flex-wrap
        justify-evenly
        items-center
        py-4
        h-1/2
        border-b-8
      "
      :class="{
        'bg-red border-orange text-cream': home,
        'bg-cream border-green text-black': away,
        'bg-yellow border-red text-red': third,
      }"
    >
    <template v-if="homeView">
      <Song/>
      <PremTable :class="{ 'border-orange': home, 'border-red': third }" />
    </template>
      <About v-if="aboutView" />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Song from "../components/Song.vue";
import About from "../components/About.vue";
import PremTable from "../components/PremTable.vue";
// import api from '../js/api.js'

export default {
  components: {
    Nav,
    Song,
    About,
    PremTable,
  },

  props: {},

  data() {
    return {
      kit: null,
      home: true,
      away: null,
      third: null,
      homeView: true,
      aboutView: null,
    };
  },
  methods: {
    homeKit() {
      this.home = true;
      this.away = false;
      this.third = false;
    },
    awayKit() {
      this.away = true;
      this.home = false;
      this.third = false;
    },
    thirdKit() {
      this.third = true;
      this.home = false;
      this.away = false;
    },
    renderAbout() {
      this.aboutView = true;
      this.homeView = false;
      console.log("about click")
    },
    renderHome() {
      this.homeView = true
      this.aboutView = false
    }
  },
};

// console.log(api)
</script>

<style scoped></style>
