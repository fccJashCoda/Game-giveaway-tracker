<template>
  <div>
    <h1>Giveaways</h1>
    <ul>
      <li v-for='giveaway in giveawayList' :key="giveaway.id">
        <Giveaway  v-bind='giveaway' />
      </li>
    </ul>
    {{ this.giveawayList}}
  </div>
</template>

<script>
  import Giveaway from './Giveaway.vue'

  export default {
    name: 'GiveawayList',
    components: {
      Giveaway
    },
    props: {
      giveawayList: Array
    }
  }
</script>