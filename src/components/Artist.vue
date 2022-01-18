<template>
  <div class="flex flex-col">
    <a :href="shopData.url">
      <img
        :src="shopData.icon_url_fullxfull"
        height="150"
        width="150"
        class="rounded mr-3"
      />
    </a>
    </div>
    <div class="flex flex-col w-2/5 pl-3">
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
      <div class="flex flex-col w-3/5">
        <Carousel :itemsToShow="1" :itemsToScroll="10">
          <Slide
            v-for="(listing, id) in listingData"
            :key="id"
          >
          <div class="flex">
            <h3>{{ listing.title.split(':')[0] }}</h3>
          </div>
          </Slide>
        </Carousel>
      </div>
    
  
</template>

<script>

export default {
  components: {
    
  },
  props: {
    shopData: {},
    listingData: {},
  },
};
</script>
