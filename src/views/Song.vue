<template>
  <div class="flex-col m-6 text-center transition ease-in duration-150">
        <h2
          class="underline decoration-1 decoration-double text-2xl underline-offset-4 font-cursive"
        >
          Best in the World, Bobby Firmino
        </h2>
        <p
          class="pl-4 pt-4 whitespace-pre-wrap break-normal leading-relaxed w-auto text-xl font-normal"
        >
          There's something that the Kop wants you to know,
          <br />
          The best in the world his name is Bobby Firmino.
          <br />
          Our number nine, Give the ball to him and he'll score every time.
          <br />
          Sim señhor, Pass the ball to Bobby and he will score.
        </p>
      </div>
</template>

<script>
export default {
  name: "Song",

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
