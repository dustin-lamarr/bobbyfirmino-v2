<template>
  <button
    class="
      shadow-md
      border-2
      rounded
      p-1
      tracking-wide
      transition
      duration-0
      hover:scale-110
      "
       :class="{
          'border-orange text-cream-100 shadow-red-300': home,
          'border-green shadow-cream-300': away,
          'border-red shadow-yellow-500': third,
        }"
  >
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props: {
    btnTitle: String,
    home: Boolean,
    away: Boolean,
    third: Boolean,
  },
};
</script>
