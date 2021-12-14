<template>
  <div class="flex flex-col md:flex-row pb-6 font-cursive text-lg px-2 leading-tight md:leading-normal flex-wrap">
    <div class="grid grid-cols-5 gap-6">
      <ActionBtn
      :class="{
        homeKit: home,
        awayKit: away,
        thirdKit: third
        }"
        :btnTitle="`Bobby Firmino Song`"
        @click="$emit('click', 'song')"
         alt="display bobby firmino song lyrics"
      />
    
      <ActionBtn
      @click="$emit('click', 'table')"
      :class="{
        homeKit: home,
        awayKit: away,
        thirdKit: third
        }"
        :btnTitle="`EPL Live Table`"
        alt="show english premier league live table"
      />
     
      <button class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'trophy')"
      :class="{
        'border-orange text-cream': home,
        'border-green': away,
        'border-red': third
        }"
        alt="show trophy wall"
      >
        Trophy Wall
      </button>
      <button class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'socials')"
      :class="{
        'border-orange text-cream': home,
        'border-green': away,
        'border-red': third
        }"
        alt="show links to roberto firmino socials"
      >
        Bobby on Socials
      </button>
      <button class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'art')"
      :class="{
        'border-orange text-cream': home,
        'border-green': away,
        'border-red': third
        }"
        alt="show links to roberto firmino inspired artwork"
      >
        Bobby Inspired Art
      </button>
    </div>
  </div>
</template>

<script>
import ActionBtn from "../components/ActionBtn.vue"
export default {
  components: { ActionBtn },
    props: {
        home: Boolean,
        away: Boolean,
        third: Boolean
    },

    data() {
      return {
      homeKit: 'text-cream border-orange',
      awayKit: 'border-green',
      thirdKit: 'border-red'
    }
    }
}
</script>

