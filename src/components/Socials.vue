<template>
  <div class="flex flex-row pb-6 font-cursive px-2">
    <div class="grid grid-cols-4 gap-6">
      <img class="shadow-md border-2 rounded p-1 tracking-wide"
      @click="$emit('click', 'socials')"
      src="../assets/ig.svg"
      height="200px"
      width="200px"
      />
      
    </div>
  </div>
</template>