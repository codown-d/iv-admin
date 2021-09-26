<template>
  <div class="header-bar">
    <custom-bread-crumb :list="breadCrumbList"></custom-bread-crumb>
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import customBreadCrumb from './custom-bread-crumb'
import './header-bar.less'
export default {
  name: 'HeaderBar',
  components: {
    customBreadCrumb
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    breadCrumbList () {
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
  }
}
</script>
<style>
.header-bar{
   background-image: linear-gradient(rgb(10,26,42), rgb(24,61,106));
}
</style>
