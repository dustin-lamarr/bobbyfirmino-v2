<template>
  <div class="flex-col m-6 text-center transition ease-in duration-150">
    <h2
      class="underline decoration-1 decoration-double text-2xl underline-offset-4 font-cursive"
    >
      Welcome to Bobby Firmino Dot Com
    </h2>
  </div>
</template>

<script>
export default {
  name: "Home",

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

<style scoped></style>
