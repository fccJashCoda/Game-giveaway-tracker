<template>
  <div id="app">
    <router-link to='/foo' :msg="message">go to foo</router-link>
    <!-- <router-view to='/foo'>test</router-view> -->
    <!-- <div class='links'> 
      <router-link v-for="give in list" active-class="is-active" :to="{name: 'Giveaway', params: {id: give.id}}" :key="give.id">{{give.id}}</router-link>

    </div> -->
    <router-view></router-view>
    <ul  class='giveawaylist'>
      <li v-for='giveaway in list' :key="giveaway.id">
        <div class='giveawayCard'>
          <h2>{{ giveaway.title }}</h2>
          <!-- <p>{{giveaway.description}}</p>
          <span>id:{{giveaway.id}}</span>
          <span>platforms:{{giveaway.platforms}}</span>
          <span>status:{{giveaway.status}}</span>
          <span>users:{{giveaway.users}}</span>
          <span>end_date:{{giveaway.end_date}}</span>
          <span>image:{{giveaway.image}}</span>
          <span>gp_url:{{giveaway.gamerpower_url}}</span>
          <span>instructions:{{giveaway.instructions}}</span>
          <span>ogv:{{giveaway.open_giveaway}}</span>
          <span>ogvurl:{{giveaway.open_giveaway_url}}</span>
          <span>pub_date:{{giveaway.published_date}}</span>
          <span>thumbnail:{{giveaway.thumbnail}}</span>
          <span>type:{{giveaway.type}}</span>
          <span>worth:{{giveaway.worth}}</span> -->
          <img v-bind:src="giveaway.thumbnail"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    this.fetchData()
  },
  data: function() {
    return { message: 'hey there', list: [] }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:7555/')
        const payload = await response.json();
        this.list = payload.store;
      } catch (err) {
        throw new Error('Something went south')
      }
    },
  }
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

  gap:1em;
}

span {
  display: flex;
}

.giveawayCard {
  width: 25em;
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
