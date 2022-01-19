<template>
  <div
    class="
      flex flex-col
      md:flex-row
      font-cursive
      text-lg
      px-2
      leading-tight
      md:leading-normal
      flex-wrap
      py-4
      justify-evenly
    "
  >
    <div class="grid grid-cols-5 gap-6">
      <ActionBtn
        :home="home"
        :away="away"
        :third="third"
        :btnTitle="`Bobby Firmino Song`"
        @click="$emit('click', 'song')"
        alt="display bobby firmino song lyrics"
      />

      <ActionBtn
        @click="loadTable, $emit('click', 'table')"
        :home="home"
        :away="away"
        :third="third"
        :btnTitle="`EPL Live Table`"
        alt="show english premier league live table"
      />

      <ActionBtn
        @click="$emit('click', 'trophy')"
        :home="home"
        :away="away"
        :third="third"
        alt="show trophy wall"
        :btnTitle="`Trophy Wall`"
      />

      <ActionBtn
        @click="$emit('click', 'socials')"
        :home="home"
        :away="away"
        :third="third"
        alt="show links to roberto firmino socials"
        :btnTitle="`Bobby on Socials`"
      />

      <ActionBtn
        @click="$emit('click', 'art')"
        :home="home"
        :away="away"
        :third="third"
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
  }
};
</script>
