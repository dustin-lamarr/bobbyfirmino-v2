<template>
  <div class="w-screen h-screen bg-black sm:overflow-hidden overflow-y-scroll">
    <Nav
      @click="showKit"
      @homeView="showAction"
      @about="showAction"
      :class="{
        'border-orange text-cream-100': home,
        'border-green text-cream-100': away,
        'border-red-100 text-red-100': third,
      }"
    />
    <div
      class="justify-center border-b-8"
      :class="{
        'bg-red-100 border-orange text-cream-100': home,
        'bg-cream-100 border-orange text-orange': away,
        'bg-yellow-100 border-red-100 text-red-100': third,
      }"
    >
      <ActionBar @click="showAction" :home="home" :away="away" :third="third" />

      <transition mode="out-in">
        <Song v-if="song" />
        <PremTable
          v-else-if="table"
          :home="home"
          :away="away"
          :third="third"
          :tableData="tableData"
        />
        <TrophyWall v-else-if="trophy" />
        <About v-else-if="about" />
        <Socials v-else-if="socials" />
        <Art
          v-else-if="art"
          :edShop="edShop"
          :home="home"
          :away="away"
          :third="third"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import ActionBar from "../components/ActionBar.vue";
import Song from "../components/Song.vue";
import About from "../components/About.vue";
import PremTable from "../components/PremTable.vue";
import TrophyWall from "../components/TrophyWall.vue";
import Socials from "../components/Socials.vue";
import Art from "../components/Art.vue";
import { tableAPI, entireDesignShop, entireDesignListings } from "../js/api.js";

export default {
  components: {
    Nav,
    Song,
    About,
    PremTable,
    ActionBar,
    TrophyWall,
    Socials,
    Art,
  },

  data() {
    return {
      homeView: true,
      home: true,
      away: null,
      third: null,
      song: null,
      table: null,
      about: null,
      trophy: null,
      socials: null,
      art: null,
      tableData: {},
      edShop: {},
      edListings: {},
    };
  },

  computed: {},

  methods: {
    showKit(kit) {
      switch (kit) {
        case "home":
          this.home = true;
          this.away = null;
          this.third = null;
          break;

        case "away":
          this.home = null;
          this.away = true;
          this.third = null;
          break;

        case "third":
          this.home = null;
          this.away = null;
          this.third = true;
          break;
      }
    },
    showAction(action) {
      switch (action) {
        case "song":
          this.song = true;
          this.table = null;
          this.trophy = null;
          this.socials = null;
          this.about = null;
          break;

        case "table":
          tableAPI().then((res) => {
            this.tableData = res.data[0].teams;
          });
          console.log("hit table api >_< ");
          this.table = true;
          this.song = null;
          this.trophy = null;
          this.socials = null;
          this.about = null;
          break;

        case "homeView":
          this.table = null;
          this.song = null;
          this.trophy = null;
          this.socials = null;
          this.about = null;
          break;

        case "about":
          this.about = true;
          this.table = null;
          this.song = null;
          this.trophy = null;
          this.socials = null;
          break;

        case "trophy":
          this.trophy = true;
          this.table = null;
          this.song = null;
          this.socials = null;
          this.about = null;
          break;

        case "socials":
          this.socials = true;
          this.trophy = null;
          this.table = null;
          this.song = null;
          this.about = null;
          break;

        case "art":
          entireDesignShop().then((res) => {
            this.edShop = res.data;
            console.log("hit shop api >_< ");
          });
          entireDesignListings().then((res) => {
            this.edListings = res.data;
            console.log("hit listing api >_< ");
          });
          this.art = true;
          this.socials = null;
          this.trophy = null;
          this.table = null;
          this.song = null;
          this.about = null;
          break;
      }
    },
  },
};
</script>

<style scoped></style>
