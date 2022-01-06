<template>
  <div class="flex flex-row">
    <img :src="this.shopImg" height="150" width="150" class="rounded mr-3" />
    <div class="flex flex-col w-2/5">
      <ul class="list-none text-left">
        <li
          class="font-mono text-lg border-dotted border-b border-cream-100 mb-2"
        >
          {{ this.shopName }}
        </li>
        <li class="font-mono text-sm break-words">{{ this.info }}</li>
      </ul>
      <div class="flex flex-col w-3/5">
      <Carousel :itemsToShow="1">
         <Slide
          v-for="listing in edListings"
        :key="listing.listing_id"
        :title="listing.title"
        
         >

         </Slide>
         
     </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
   edListings: {}
  },
};
</script>
