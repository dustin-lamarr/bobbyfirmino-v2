<template>
  <div class="flex flex-row pb-6 font-cursive text-lg px-2 leading-tight md:leading-normal">
    <div class="grid grid-cols-4 gap-6">
      <button class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'song')"
      :class="{
        'border-orange text-cream': home,
        'border-green': away,
        'border-red': third
        }"
      >
        Bobby Firmino Song
      </button>
      <button class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'table')"
      :class="{
        'border-orange text-cream': home,
        'border-green': away,
        'border-red': third
        }"
      >
        EPL Live Table
      </button>
      <button class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'trophy')"
      :class="{
        'border-orange text-cream': home,
        'border-green': away,
        'border-red': third
        }"
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
      >
        Bobby on Socials
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        home: Boolean,
        away: Boolean,
        third: Boolean
    }
}
</script>

