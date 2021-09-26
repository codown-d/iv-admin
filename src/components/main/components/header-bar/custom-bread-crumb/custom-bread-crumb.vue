<template>
  <div class="custom-bread-crumb">
    <div class="bread-crumb-p">
      <div
        class="bread-crumb-item bread-crumb-left"
        v-for="item in list.slice(0, 3)"
        @click="$router.push(item)"
        :key="`bread-crumb-${item.name}`"
      >
        <div class="bread-crumb-item-inner">
          <span class="bread-crumb-name bread-crumb-name-l">{{
            item.meta.title||item.name
          }}</span>
        </div>
      </div>
      <div class="bread-crumb-mid"></div>
      <div
        class="bread-crumb-item bread-crumb-right"
        v-for="item in list.slice(3)"
        @click="$router.push(item)"
        :key="`bread-crumb-${item.name}`"
      >
        <div class="bread-crumb-item-inner">
          <span class="bread-crumb-name bread-crumb-name-r">{{
            item.meta.title||item.name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './custom-bread-crumb.less'
export default {
  name: 'customBreadCrumb',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {}
}
</script>
<style lang="less">
@screen-xl:8px;
.bread-crumb-item {
    padding: @screen-xl;
}
.bread-crumb-name{
   line-height: 64px-2*@screen-xl;
}
</style>
<style>
.custom-bread-crumb {
  width: calc(100% - 200px);
  margin-left: -45px;
  height: 100%;
}
.bread-crumb-p {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
}
.bread-crumb-item-inner {
  height: 100%;
  background-image: radial-gradient(rgb(33 77 118 / 23%), #3362952b, #3388e187);
}
.bread-crumb-item {
  height: 100%;
  cursor: pointer;
  text-align: center;
  flex: 1;
  display: block;
  padding: 8px;
  background-image: linear-gradient(rgb(1, 15, 28), rgb(31, 77, 137));
}
.bread-crumb-name {
  color: rgb(68, 206, 241);
}
.bread-crumb-name-l {
  display: block;
  transform: skewX(-36deg);
}
.bread-crumb-name-r {
  display: block;
  transform: skewX(36deg);
}
.bread-crumb-left {
  transform: skew(36deg, 0deg);
  padding-right: 0px;
}
.bread-crumb-mid {
  width: 400px;
}
.bread-crumb-right {
  padding-left: 0px;
  transform: skew(-36deg, 0deg);
}
</style>
