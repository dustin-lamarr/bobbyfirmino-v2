<template>
  <div class="w-screen h-screen bg-black sm:overflow-hidden overflow-y-scroll">
    <Nav
      @click="showKit"
      @homeView="showAction"
      @about="showAction"
      :class="{
        'border-orange text-cream': home,
        'border-green text-cream': away,
        'border-red text-red': third,
      }"
    />
    <Dashboard :home="home" :away="away" :third="third">
      <template v-slot:action>
        <ActionBar
          @click="showAction"
          :home="home"
          :away="away"
          :third="third"
        />
      </template>
      <template v-slot:content>
        <Song v-if="song" />
        <PremTable
          v-if="table"
          :tableData="tableData"
          :home="home"
          :away="away"
          :third="third"
        />
        <TrophyWall v-if="trophy" />
        <About v-if="about" />
        <Socials v-if="socials" />
      </template>
    </Dashboard>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Dashboard from "../components/Dashboard.vue";
import ActionBar from "../components/ActionBar.vue";
import Song from "../components/Song.vue";
import About from "../components/About.vue";
import PremTable from "../components/PremTable.vue";
import TrophyWall from "../components/TrophyWall.vue";
import Socials from "../components/Socials.vue";
import tableAPI from "../js/api.js";

export default {
  created() {
    tableAPI().then((res) => {
      this.tableData = res.data[0].teams;
      // console.log("hit api >:|");
    });
  },

  components: {
    Nav,
    Dashboard,
    Song,
    About,
    PremTable,
    ActionBar,
    TrophyWall,
    Socials,
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
      tableData: {},
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
      }
    },
  },
};
</script>

<style scoped></style>
