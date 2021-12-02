<template>
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
      border-orange
    "
  >
    <div>
      <h1 class="text-center text-cream flex-col">
        Best in the World, Bobby Firmino
      </h1>
      <p
        class="
          text-center
          font-light
          text-cream
          pl-4
          pt-4
          whitespace-pre-wrap
          break-normal
          leading-relaxed
          w-auto
        "
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
    <slot/>
  </div>
</template>

<script>

export default {
 
};
</script>
