<template>
  <div>
    <!-- <div class='give' v-if='giveaway'> -->
    <!-- <div class='give' v-if='getGiveaway'> -->
      <button @click='spillthebeans'></button>
    <div class='give' v-if='getGiveaway'>
      <h1>{{ this.giveaway.title }}</h1>
      <img v-bind:src="this.giveaway.image"/>
      <p>{{this.giveaway.description}}</p>
      <span>id: {{this.giveaway.id}}</span>
      <span>platforms: {{this.giveaway.platforms}}</span>
      <span>status: {{this.giveaway.status}}</span>
      <span>users: {{this.giveaway.users}}</span>
      <span>end_date: {{this.giveaway.end_date}}</span>
      <span>image: {{this.giveaway.image}}</span>
      <span>gp_url: {{this.giveaway.gamerpower_url}}</span>
      <span>instructions: {{this.giveaway.instructions}}</span>
      
      <!-- <span>ogv: {{this.giveaway.open_this.giveaway}}</span> -->
      <!-- <span>ogvurl: {{this.giveaway.open_this.giveaway_url}}</span> -->

      <!-- <span>pub_date: {{this.giveaway.published_date}}</span>
      <span>thumbnail: {{this.giveaway.thumbnail}}</span>
      <span>type: {{this.giveaway.type}}</span>
      <span>worth: {{this.giveaway.worth}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
  data() {
    return {
      giveaway: {} 
    }
  },
  beforeMount() {
    console.log('beforeMount')
    console.log(this.$route.params)
    console.log(this.giveaway)
    console.log(this.$store.getters.getGiveaway(this.$route.params.id))
    this.$store.dispatch('fetchData')
  },
  mounted() {
    console.log('Mount')
    console.log(this.$route.params)
    console.log(this.$store.getters.getGiveaway(this.$route.params.id))
    this.giveaway = this.$store.getters.getGiveaway(this.$route.params.id)
    console.log(this.giveaway)
  },
  computed: {
    getGiveaway() {
      return this.$store.getters.getGiveaway(this.$route.params.id)
    }
  },
  methods: {
    spillthebeans() {
      console.log(this.$store.getters.getGiveaway(this.$route.params.id))
    }
  }
}
</script>

<style scoped>
  .give {
    width: 50em;
    margin: auto;
  }
  img {
    width: 100%;
  }
</style>

