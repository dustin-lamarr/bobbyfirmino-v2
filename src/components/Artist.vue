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
     <!-- <carousel :perPage="1">
         <slide/>
         
     </carousel> -->
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
 components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    img: "",
    shopName: "",
    title: "",
  },
};
</script>
