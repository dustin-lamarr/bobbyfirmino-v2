<template>
  <button class="shadow-md border-2 rounded p-1 tracking-wide">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props: {
    btnTitle: String,
  },
};
</script>
