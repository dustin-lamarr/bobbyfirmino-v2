<template>
  <nav
    class="
      h-10
      w-screen
      items-center
      overflow-hidden
      flex flex-row
      justify-between
      border-b-8 
    "
    id="navbar"
  >
    <div class="justify-start ml-4" id="navbarLinks">
      <a class="font-normal" href="/">Home</a>
      <a class="pl-3 font-normal" href="/profile">Profile</a>
      <a class="px-3 font-normal" id="logout">Logout</a>
      <a class="font-normal" href="/about" @click="$emit('about')">About</a>
    </div>
    <div class="justify-end flex flex-row mr-4 content-center">
      <p class="">Choose a Kit:</p>
      <button class="px-2" title="Home" @click="$emit('home')">
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill:#F7664D"/>
        </svg>
        <svg class="inline" width="17px" height="10px">
          <rect width="17px" height="10px" style="fill: #b91331" />
        </svg>
        <svg class="inline" width="17px" height="10px">
          <rect width="17px" height="10px" style="fill: #b91331" />
        </svg>
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill:#F7664D"/>
        </svg>
      </button>
      <button title="Away" @click="$emit('away')" id="away">
        <svg class="inline" width="8px" height="10px">
          <rect width="8px" height="10px" style="fill:#ECE7E1"/>
        </svg>
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill:#1E4E56"/>
        </svg>
        <svg class="inline" width="18px" height="10px">
          <rect width="18px" height="10px" style="fill:#ECE7E1"/>
        </svg>
        <svg class="inline" width="3px" height="10px">
          <rect width="3px" height="10px" style="fill:#F7664D"/>
        </svg>
        <svg class="inline" width="8px" height="10px">
          <rect width="8px" height="10px" style="fill:#ECE7E1"/>
        </svg>
      </button>
      <button class="pl-2" title="Third" @click="$emit('third')">
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

<script></script>

<style >


</style>