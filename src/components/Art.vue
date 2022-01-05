<template>
  <div
    class="flex flex-col m-6 text-center transition ease-in duration-150 h-max p-4"
  >
    <h2
      class="underline decoration-1 decoration-double text-xl underline-offset-4 font-cursive font-mono"
    >
      A Curated List of Art Inspired by Roberto Firmino
    </h2>
    <div
      class="flex flex-row border-4 mt-4 rounded-lg p-4 shadow-md"
      :class="{
        'border-orange text-cream-100 shadow-red-300': home,
        'border-green shadow-cream-300': away,
        'border-red shadow-yellow-500': third,
      }"
    >
      <!-- add kit classes -->
      <img
        :src="this.entireDesign.icon_url_fullxfull"
        height="150"
        width="150"
        class="rounded"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entireDesign: {},
    home: Boolean,
    away: Boolean,
    third: Boolean,
  },
};
</script>
