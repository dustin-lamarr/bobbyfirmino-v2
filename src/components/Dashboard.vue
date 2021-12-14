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
      'bg-red-100 border-orange text-cream-100': home,
      'bg-cream-100 border-orange text-orange': away,
      'bg-yellow-100 border-red-100 text-red-100': third,
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
