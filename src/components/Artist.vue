<template>
  <div class="flex flex-row">
    <img :src="this.img" height="150" width="150" class="rounded mr-3" />
    <div class="flex flex-col w-2/5">
      <ul class="list-none text-left">
        <li
          class="font-mono text-lg border-dotted border-b border-cream-100 mb-2"
        >
          {{ this.shopName }}
        </li>
        <li class="font-mono text-sm break-words">{{ this.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: "",
    shopName: "",
    title: "",
  },
};
</script>
