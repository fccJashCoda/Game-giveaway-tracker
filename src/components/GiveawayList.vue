<template>
  <div>
    <h1>Giveaways</h1>
    <ul>
      <!-- <li v-for='giveaway in giveaways' :key="giveaway.id">
        <h3>{{ giveaway.title }}</h3>
        <Giveaway v-bind:giveaway='giveaway' />
      </li> -->
      <li v-for='giveaway in giveaways' :key="giveaway.id">
        <div class='giveawayCard'>
          <h2>{{ giveaway.title }}</h2>
          <router-link :to="'/giveaway/' + giveaway.id">Go to {{ giveaway.id }}</router-link>
          <img v-bind:src="giveaway.thumbnail"/>
          <button v-on:click='getGiveaway(giveaway.id)'>log giveaway</button>
        </div>
      </li>
    </ul>
    
    <!-- {{ this.giveaways }} -->
  </div>
</template>

<script>
  // import Giveaway from './Giveaway.vue'

  export default {
    name: 'GiveawayList',
    components: {
      // Giveaway
    },
    mounted() {
        console.log(this.giveaways)
    },
    props: {
      giveaways: Array
    }
  }
</script>