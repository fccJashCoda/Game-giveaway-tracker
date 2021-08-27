<template>
  <div>
    <p>Alright</p>
    <div class='give' v-if='give'>
      <h1>{{ give.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giveaway',
  props: {
    give: Object
  },
}
</script>
