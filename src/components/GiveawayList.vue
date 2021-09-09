<template>
  <div>
    <h1>Giveaways</h1>
    <ul>
      <li v-for='giveaway in giveaways' :key="giveaway.id">
        <div class='giveawayCard'>
          <img v-bind:src="giveaway.thumbnail"/>
          <h2>{{ giveaway.title }}</h2>
          <p>{{ giveaway.description }}</p>
          <logos :platformList="giveaway.platforms"></logos>
          <router-link :to="'/giveaway/' + giveaway.id">Go to {{ giveaway.id }}</router-link>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
  import Logos from './Logos.vue'

  export default {
    name: 'GiveawayList',
    components: {
      Logos
    },
    methods: {
      getGiveaway(id) {
        console.log('giveaway ', this.$store.getters.getGiveaway(id))
        return id
      }
    },
    mounted() {
      this.$store.dispatch('fetchData')
      console.log(this.giveaways)
    },
    computed: {
      giveaways() {
        return this.$store.state.giveaways
      },
      loading() {
        return this.$store.state.loading
      },
      error() {
        return this.$store.state.error
      },
    },

  }
</script>