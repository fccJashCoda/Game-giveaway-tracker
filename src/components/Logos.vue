<template>
  <div>
    <ul>
      <li v-for="platform in splits" :key='platform'>
        <font-awesome-icon :icon="[reference[platform] === 'tired' ? 'fas' : 'fab',reference[platform]]"></font-awesome-icon>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Logos',
    props: {
      platformList: String,
    },
    data() {
      return {
        reference: {
          'Epic Games Store': 'tired',
          'Ubisoft Connect': 'tired',
          'Playstation 4': 'playstation',
          'Playstation 5': 'playstation',
          'PS5': 'playstation',
          'Xbox 360': 'xbox',
          'Xbox One': 'xbox',
          'Xbox Series X|S': 'xbox',
          'PC': 'windows',
          'Steam':'steam',
          'Itch.io':'itch-io',
          'Android':'android',
          'iOS':'app-store-ios',
          'DRM-Free':'tired',
          'Battle.net':'battle-net',
          'Nintendo Switch':'tired',
          'Twitch':'twitch',
        }
      }
    },
    computed: {
      splits() {
        return this.platformList.split(', ')
      }
    }
  }
</script>
<style>
</style>