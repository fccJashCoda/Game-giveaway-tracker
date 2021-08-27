<template>
  <div>
    <h1>Foo</h1>
    <p>{{ $route.params.msg }}</p>
  </div>
</template>

<script>
  export default {
    name:'Foo',
    props: {
      msg: String
    }
  }
</script>