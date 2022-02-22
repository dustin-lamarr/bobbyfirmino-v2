<template>
  <div class="flex flex-col my-4">
    <a :href="shopData.url">
      <img :src="shopData.icon" height="150" width="150" class="rounded mr-3" />
    </a>
  </div>
  <div class="flex flex-col w-2/5 pl-3 mt-4">
    <ul class="list-none text-left">
      <li
        class="font-mono text-lg border-dotted border-b border-cream-100 mb-2"
      >
        <a :href="shopData.url">
          {{ shopData.name }}
        </a>
        <button
          class="rounded ml-4 mb-2 text-xs tracking-tight bg-orange px-0.5"
          @click="this.showMore = true"
          :id="this.shopData.title"
        >
          Show Designs
        </button>
      </li>
      <li class="font-mono text-sm break-words">{{ shopData.title }}</li>
    </ul>
  </div>
  <div
    v-if="this.showMore"
    class="flex flex-col w-3/5 px-4 place-content-center"
  >
    <Carousel :itemsToShow="1" :itemsToScroll="1" :snapAlign="center">
      <Slide v-for="listing in shopData.listings" :key="listing.listing_id">
        <div class="flex justify-center items-center">
          <img :id="listing.listing_id" />
          <a :href="listing.url" class="hover:text-orange">
            <!-- This needs to be moved to computed w/ logic for specific shops. 
            Most will have weird titles because of seo-->
            <h3>{{ listing.title.split(":")[0] }}</h3>
          </a>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import axios from "axios";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  props: {
    shopData: {},
    shopImgData: {},
  },
  data() {
    return {
      showMore: null,
    };
  },
  methods: {
    getListingImgs(shopImgData, id) {
      console.log("img id", id);
      axios
        .request(shopImgData, id)
        .then((res) => {
          console.log("img req ", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
