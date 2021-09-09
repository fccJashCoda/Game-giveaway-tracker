<template>
  <div id="app">
    <h1>Ongoing Giveaways</h1>

    <router-link to='/' >Home</router-link>
    
    <router-view></router-view>
    <h2 v-if="loading">Loading</h2>
    <h2 v-if="error">{{ error }}</h2>
    <footer>
      <div>
        <p>some footer copypasta</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.$store.dispatch('fetchData')
    console.log('App mounted at: ', new Date().toLocaleTimeString())
  },
  data: function() {
    return { 
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
html, body {
  margin: 0;
  padding:0;
}
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
  /* grid-template-columns: repeat(4,1fr); */
  margin: auto;
  width: 90%;
  padding:0;
  gap:1em 0.5em;
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
  text-align: start;
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
footer,header {
  background: #333;
  color: #fff;
  padding: 6em;
}

@media (min-width: 800px) {
  ul {
    grid-template-columns: repeat(2,1fr);
  }
}
@media (min-width: 900px) {
  ul {
    grid-template-columns: repeat(3,1fr);
  }
}
@media (min-width: 1440px) {
  ul {
    grid-template-columns: repeat(6,1fr);
  }
}
</style>
