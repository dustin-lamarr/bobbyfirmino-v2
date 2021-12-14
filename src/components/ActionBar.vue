<template>
  <div
    class="
      flex flex-col
      md:flex-row
      pb-6
      font-cursive
      text-lg
      px-2
      leading-tight
      md:leading-normal
      flex-wrap
    "
  >
    <div class="grid grid-cols-5 gap-6">
      <ActionBtn
        :class="{
          'border-orange text-cream': home,
          'border-green': away,
          'border-red': third,
        }"
        :btnTitle="`Bobby Firmino Song`"
        @click="$emit('click', 'song')"
        alt="display bobby firmino song lyrics"
      />

      <ActionBtn
        @click="$emit('click', 'table')"
        :class="{
          'border-orange text-cream': home,
          'border-green': away,
          'border-red': third,
        }"
        :btnTitle="`EPL Live Table`"
        alt="show english premier league live table"
      />

      <ActionBtn
        @click="$emit('click', 'trophy')"
        :class="{
          'border-orange text-cream': home,
          'border-green': away,
          'border-red': third,
        }"
        alt="show trophy wall"
        :btnTitle="`Trophy Wall`"
      />

      <ActionBtn
        @click="$emit('click', 'socials')"
        :class="{
          'border-orange text-cream': home,
          'border-green': away,
          'border-red': third,
        }"
        alt="show links to roberto firmino socials"
        :btnTitle="`Bobby on Socials`"
      />

      <ActionBtn
        @click="$emit('click', 'art')"
        :class="{
          'border-orange text-cream': home,
          'border-green': away,
          'border-red': third,
        }"
        alt="show links to roberto firmino inspired artwork"
        :btnTitle="`Bobby Inspired Art`"
      />
    </div>
  </div>
</template>

<script>
import ActionBtn from "../components/ActionBtn.vue";
export default {
  components: { ActionBtn },
  props: {
    home: Boolean,
    away: Boolean,
    third: Boolean,
  },
};
</script>
