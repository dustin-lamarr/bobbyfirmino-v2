<template>
  <div class="w-screen h-screen bg-black sm:overflow-hidden overflow-y-scroll">
    <Nav
      @click="showKit"
      @default="this.default = true"
      @about="this.about = true"
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
        flex flex-col flex-wrap
        justify-evenly
        items-center
        py-4
        h-auto
        border-b-8
      "
      :class="{
        'bg-red border-orange text-cream': home,
        'bg-cream border-orange text-orange': away,
        'bg-yellow border-red text-red': third,
      }"
      :home="home"
    >
      <ActionBar @click="showAction"
      :home="home"
      :away="away"
      :third="third"
       />
      <template v-if="song">
        <Song />
      </template>
      <template v-if="table">
        <PremTable
          :tableData="tableData"
        />
      </template>
      <template>
        <About v-if="about" />
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
import tableAPI from "../js/api.js";

export default {
  created() {
    tableAPI().then((res) => {
      this.tableData = res.data[0].teams;
      console.log("hit api >:|");
    });
  },

  components: {
    Nav,
    Song,
    About,
    PremTable,
    ActionBar,
  },

  data() {
    return {
      default: true,
      home: true,
      away: null,
      third: null,
      song: null,
      table: null,
      about: null,
      tableData: {},
    };
  },

  computed: {
    
  },

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
          break

           case "third":
          this.home = null;
          this.away = null;
          this.third = true;
          break
      }
    },
    showAction(action) {
      switch (action) {
        case "song":
          this.song = true;
          this.table = null;
          break;

        case "table":
          this.table = true;
          this.song = null;
          break;
      }
    },
    returnHome(clear) {
      if(clear === 'default') {
        this.song = null
        this.table = null
      }
    }
  },
};
</script>

<style scoped></style>
