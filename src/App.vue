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
      <ActionBar :home="home" :away="away" :third="third" />
      <router-view :home="home" :away="away" :third="third"></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import ActionBar from "./components/ActionBar.vue";

export default {
  name: "App",
  components: {
    Nav,
    ActionBar,
  },

  data() {
    return {
      home: true,
      away: null,
      third: null,
    };
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
          break;

        case "third":
          this.home = null;
          this.away = null;
          this.third = true;
          break;
      }
    },
  },
};
</script>