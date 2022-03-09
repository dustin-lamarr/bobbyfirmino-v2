<template>
  <div class="w-screen h-screen bg-black sm:overflow-hidden overflow-y-scroll">
    <Nav
      @click="showKit"
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
      <ActionBar
        @click="showAction"
        :home="home"
        :away="away"
        :third="third"
        :actionView="actionView"
      />
    
      <template>
        
           <div class="flex-row m-6 text-start transition ease-in duration-150">
    <p>
      This site is sponsored by LFC Utah.
      <br />
      <br />
      LFC Utah is currently looking for anyone interested in getting involved
      with the supporter's club, and especially needs members with paid
      membership to LFC.
      <br />
      <br />
      Visit our <a href="https://www.facebook.com/UtahLFC" class="hover:text-cream-100 text-orange">Facebook page</a> to
      learn more.
    </p>
    <br />


    bobbyfirmino.com created and maintained by
    <a href="http://www.dustinlamarr.com" class="hover:text-cream-100 text-orange font-medium"
      >Dustin LaMarr
    </a>
  </div>
        
      </template>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import ActionBar from "../components/ActionBar.vue";
import Song from "../components/Song.vue";
import PremTable from "../components/PremTable.vue";
import TrophyWall from "../components/TrophyWall.vue";
import Socials from "../components/Socials.vue";
import Art from "../components/Art.vue";
import Artist from "../components/Artist.vue";

export default {
  components: {
    Nav,
    Song,
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
      actionView: {
        song: null,
        table: null,
        about: null,
        trophy: null,
        socials: null,
        art: null,
      },
      home: true,
      away: null,
      third: null,

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
    }
  },
};
</script>

<style scoped></style>
