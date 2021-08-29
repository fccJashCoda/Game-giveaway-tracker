<template>
  <div>
    <p>Alright</p>
    <div class='give' v-if='giveaway'>
      <h1>{{ giveaway.id }}</h1>
      <button @click='getGiveaway(giveaway.id)' >log giveaway</button>
      <!-- <p>{{giveawayaway.description}}</p>
          <span>id:{{giveawayaway.id}}</span>
          <span>platforms:{{giveawayaway.platforms}}</span>
          <span>status:{{giveawayaway.status}}</span>
          <span>users:{{giveawayaway.users}}</span>
          <span>end_date:{{giveawayaway.end_date}}</span>
          <span>image:{{giveawayaway.image}}</span>
          <span>gp_url:{{giveawayaway.gamerpower_url}}</span>
          <span>instructions:{{giveawayaway.instructions}}</span>
          <span>ogv:{{giveawayaway.open_giveawayaway}}</span>
          <span>ogvurl:{{giveawayaway.open_giveawayaway_url}}</span>
          <span>pub_date:{{giveawayaway.published_date}}</span>
          <span>thumbnail:{{giveawayaway.thumbnail}}</span>
          <span>type:{{giveawayaway.type}}</span>
          <span>worth:{{giveawayaway.worth}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
  props: {
    giveaway: Object
  },
  methods: {
    getGiveaway(id) {
      console.log(this.$store.getters.getGiveaway(id))
      return id
    }
  },
}
</script>

