<template>
  <div id="app">
    <h1>Ongoing Giveaways</h1>

    <router-link to='/foo' :msg="message">go to foo</router-link>
    <!-- <router-view to='/foo'>test</router-view> -->
    <!-- <div class='links'> 
      <router-link v-for="give in list" active-class="is-active" :to="{name: 'Giveaway', params: {id: give.id}}" :key="give.id">{{give.id}}</router-link>

    </div> -->
    <router-view></router-view>
    <h2 v-if="loading">Loading</h2>
    <div v-else>
      <GiveawayList v-bind:giveaways='giveaways' />

    </div>
    <!-- <ul v-else class='giveawaylist'>
      <li v-for='giveaway in giveaways' :key="giveaway.id">
        <div class='giveawayCard'>
          <h2>{{ giveaway.title }}</h2>
          <router-link :to="'/giveaway/' + giveaway.id">Go to {{ giveaway.id }}</router-link>
          <img v-bind:src="giveaway.thumbnail"/>
          <button v-on:click='getGiveaway(giveaway.id)'>log giveaway</button>
        </div>
      </li>
    </ul> -->
      <h2 v-if="error">{{ error }}</h2>
  </div>
</template>

<script>
import GiveawayList from './components/GiveawayList.vue';

export default {
  name: 'App',
  components: {
    GiveawayList,
  },
  mounted() {
    this.$store.dispatch('fetchData')
    
  },
  data: function() {
    return { 
      message: 'hey there', 
    }
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin: auto;
  width: 90%;
  padding:0;
  gap:1em;
}

li {
  margin:auto;
  width: 100%;
  height: 100%;
}

span {
  display: flex;
}

.giveawayCard {
  /* cursor: pointer; */
  background: #2c3e50;
  padding: 1em;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
}
.links {
  display: flex;
  flex-direction: column;
}

.is-active {
  color: red;
}
</style>
