<template>
  <nav
    class="
      h-12
      w-screen
      items-center
      overflow-hidden
      flex flex-row
      justify-between
      border-b-8
      font-cursive
      text-lg
      tracking-wide
    "
    id="navbar"
  >
    <div class="justify-start ml-4" id="navbarLinks">
      <button
        class=""
        @click="$emit('homeView', 'homeView')"
        alt="go to home view"
      >
        Home
      </button>
      <!-- <button class="pl-3 ">Profile</button> -->
      <!-- <button class="px-3 " id="logout">Logout</button> -->
      <button
        class="pl-2"
        @click="$emit('about', 'about')"
        alt="go to about view"
      >
        About
      </button>
    </div>
    <div class="justify-end flex flex-row mr-4 content-center">
    <span class="animate-ping-slow">  <p class="">Choose a Kit:</p></span>
      <button
        class="px-2 hover:outline-1 hover:outline-offset-2 hover:outline-cream"
        title="Home"
        @click="$emit('click', 'home')"
        alt="change theme to home kit colors"
      >
      
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill: #f7664d" />
        </svg>
        <svg class="inline" width="17px" height="10px">
          <rect width="17px" height="10px" style="fill: #b91331" />
        </svg>
        <svg class="inline" width="17px" height="10px">
          <rect width="17px" height="10px" style="fill: #b91331" />
        </svg>
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill: #f7664d" />
        </svg>
      
      </button>
      <button
        title="Away"
        @click="$emit('click', 'away')"
        id="away"
        alt="change theme to away kit colors"
      >
        <svg class="inline" width="8px" height="10px">
          <rect width="8px" height="10px" style="fill: #ece7e1" />
        </svg>
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill: #1e4e56" />
        </svg>
        <svg class="inline" width="18px" height="10px">
          <rect width="18px" height="10px" style="fill: #ece7e1" />
        </svg>
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill: #f7664d" />
        </svg>
        <svg class="inline" width="8px" height="10px">
          <rect width="8px" height="10px" style="fill: #ece7e1" />
        </svg>
      </button>
      <button
        class="pl-2"
        title="Third"
        @click="$emit('click', 'third')"
        alt="change theme to third kit colors"
      >
        <svg class="inline" width="10px" height="10px">
          <rect width="10px" height="10px" style="fill: #b91331" />
        </svg>
        <svg class="inline" width="10px" height="10px">
          <rect width="10px" height="10px" style="fill: #fef667" />
        </svg>
        <svg class="inline" width="10px" height="10px">
          <rect width="10px" height="10px" style="fill: #b91331" />
        </svg>
        <svg class="inline" width="10px" height="10px">
          <rect width="10px" height="10px" style="fill: #fef667" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
     home: Boolean,
    away: Boolean,
    third: Boolean,
  }
}
</script>

<style></style>
