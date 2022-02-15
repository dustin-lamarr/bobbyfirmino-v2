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
      <template v-if="song">
        <transition mode="out-in">
          <Song />
        </transition>
      </template>
      <template v-else-if="table">
        <transition mode="out-in">
          <PremTable
            :home="home"
            :away="away"
            :third="third"
            :tableData="tableData"
          />
        </transition>
      </template>
      <template v-else-if="trophy">
        <transition mode="out-in">
          <TrophyWall />
        </transition>
      </template>
      <template v-else-if="about">
        <transition mode="out-in">
          <About />
        </transition>
      </template>
      <template v-else-if="socials">
        <transition mode="out-in">
          <Socials />
        </transition>
      </template>
      <template v-else-if="art">
        <Art :home="home" :away="away" :third="third">
          <template v-slot:artist>
            <Artist :shopData="edShop" :shopImgs="this.edData.edListingImgs"/>
          </template>
        </Art>
      </template>
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
import Artist from "../components/Artist.vue";
import { tableAPI, getShop } from "../js";

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
    Artist,
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
      edData: {
        shop: {
          method: "GET",
          url: "/.netlify/functions/edShop",
        },
        listings: {
          method: "GET",
          url: "/.netlify/functions/edListings",
        },
        entireDesignImgs: {
          url: "/.netlify/functions/edListingImgs",
        },
      },
      edShop: {},
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
          this.getEntireDesign();
          this.art = true;
          this.socials = null;
          this.trophy = null;
          this.table = null;
          this.song = null;
          this.about = null;
          break;
      }
    },
    getEntireDesign() {
      getShop(this.edData.shop, this.edData.listings).then((res) => {
        this.edShop = res;
        console.log("front end shop object ", this.edShop);
      });
    },
  },
};
</script>

<style scoped></style>
