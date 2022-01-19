<template>
  <div
    class="flex flex-col m-6 text-center transition ease-in duration-150 h-max p-4"
  >
    <h2 class="text-xl font-mono">
      A Curated List of Art Inspired by Roberto Firmino
    </h2>
    <div
      class="flex flex-row border-4 mt-4 rounded-lg px-4 shadow-md"
      :class="{
        'border-orange text-cream-100 shadow-red-300': home,
        'border-green shadow-cream-300': away,
        'border-red shadow-yellow-500': third,
      }"
    >
      <slot name="artist"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopData: {},
    home: Boolean,
    away: Boolean,
    third: Boolean,
  },
};
</script>
