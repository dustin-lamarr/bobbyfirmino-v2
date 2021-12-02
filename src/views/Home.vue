<template>
  <div class="w-screen h-screen bg-black">
    <Nav 
    @home="homeKit"
    @away="this.kit = 'away'"
    @third="this.kit = 'third'"
    />
    <Dashboard 
   :class="{home: this.home, away: this.away, third: this.third}"
    >
    <PremTable/>
    </Dashboard>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
import Nav from '../components/Nav.vue'
import PremTable from '../components/PremTable.vue'
// import api from '../js/api.js'

export default {
  components: {
    Nav,
    Dashboard,
    PremTable
  },

  props: {
  },

  data() {
  return {
    kit: null,
    home: null,
    away: null,
    third: null
  }
},

  method: {
    homeKit() {
      this.home = true
      const nav = document.getElementById('nav')
      nav.classList.add('border-orange')
      console.log(nav)
    }
  }
 
}


// console.log(api)
</script>

<style scoped>
.home {

}
</style>
