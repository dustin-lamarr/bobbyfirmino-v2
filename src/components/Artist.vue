<template>
  <div class="flex flex-col my-4">
    <a :href="shopData.url">
      <img
        :src="shopData.icon_url_fullxfull"
        height="150"
        width="150"
        class="rounded mr-3"
      />
    </a>
  </div>
  <div class="flex flex-col w-2/5 pl-3 mt-4">
    <ul class="list-none text-left">
      <li
        class="font-mono text-lg border-dotted border-b border-cream-100 mb-2"
      >
        <a :href="shopData.url">
          {{ shopData.shop_name }}
        </a>
      </li>
      <li class="font-mono text-sm break-words">{{ shopData.title }}</li>
    </ul>
  </div>
  <div class="flex flex-col w-3/5 pl-4 place-content-center">
    <Carousel :itemsToShow="1" :itemsToScroll="1">
      <Slide v-for="(listing, id) in listingData" :key="id">
        <div class="flex">
          <a :href="listing.url" class="hover:text-orange"
            ><h3>{{ listing.title.split(":")[0] }}</h3></a
          >
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  props: {
    shopData: {},
    listingData: {},
  },
};
</script>
