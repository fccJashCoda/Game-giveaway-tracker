<template>
  <div>
    <div class='give' v-if='giveaway'>
      <h1>{{ this.giveaway.title }}</h1>
      <img v-bind:src="this.giveaway.image"/>
      <p>{{this.giveaway.description}}</p>

      <div>
        <span>Giveaway start: {{this.giveaway.published_date}}</span>
        <span>Giveaway end: {{this.giveaway.end_date}}</span>
      </div>

      <span>platforms: {{this.giveaway.platforms}}</span>
      <span>Status: {{this.giveaway.status}}</span>

      <span>type: {{this.giveaway.type}}</span>
      <span>worth: {{this.giveaway.worth}}</span>
      <ul>
        <li 
          v-for="instruction in splitInstructions" 
          :key='instruction'>
          {{ instruction }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
  data() {
    return {
      giveaway: this.getGiveaway || null
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchData')
  },
  mounted() {
    this.giveaway = this.$store.getters.getGiveaway(this.$route.params.id)
    if (!this.giveaway) {
      this.$router.go(-1)
    }
  },
  computed: {
    getGiveaway() {
      return this.$store.getters.getGiveaway(this.$route.params.id)
    },
    splitInstructions() {
      return this.giveaway.instructions.split('\r\n')
    }
  },
  methods: {
    spillthebeans() {
      console.log(this.$store.getters.getGiveaway(this.$route.params.id))
    },
    goHome() {
      this.$router.go(-1)
      console.log(this.$router)
      console.log(this.$router.getRoutes())
    },
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

  ul {
    display: block;
  }
</style>

