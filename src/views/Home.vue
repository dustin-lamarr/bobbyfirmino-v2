<template>
  <div class="w-screen h-screen bg-black">
    <Nav 
    @click="logKitClick"
    @home="this.kit = 'home'"
    @away="this.kit = 'away'"
    @third="this.kit = 'third'"
    :class="{ kit: this.kit }"
    />
    <Dashboard 
   :class="{kit: this.kit}"
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

  data() {
  return {
    kit: null,
  }
},
  methods: {
    logKitClick() {
        console.log(this.kit)
    }
  }
}




// console.log(api)
</script>

<style scoped>

</style>
