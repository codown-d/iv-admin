<template>
  <div class="blank">{{ $route.name }}</div>
</template>

<script>
export default {
  name: 'blank',
  data () {
    return {}
  },
  watch: {
    $route (to, from) {
    }
  }
}
</script>
<style></style>
