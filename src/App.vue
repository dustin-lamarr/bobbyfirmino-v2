<template>
<Home/>
<About/>
<Song/>
</template>

<script>

import Home from './views/Home.vue'
import About from './views/About.vue'
import Song from './views/Song.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Song
  }
}
</script>

