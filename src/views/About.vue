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
      Visit our
      <a
        href="https://www.facebook.com/UtahLFC"
        class="hover:text-cream-100 text-orange"
        >Facebook page</a
      >
      to learn more.
    </p>
    <br />

    bobbyfirmino.com created and maintained by
    <a
      href="http://www.dustinlamarr.com"
      class="hover:text-cream-100 text-orange font-medium"
      >Dustin LaMarr
    </a>
  </div>
</template>

<script>
export default {
  name: "About",
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
