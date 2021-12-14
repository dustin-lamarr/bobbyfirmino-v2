<template>
  <div
    class="
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
  >
    <slot name="action"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    home: Boolean,
    away: Boolean,
    third: Boolean,
  },
};
</script>
