<template>
  <h1 class="page-title">{{ $route.meta.title }}</h1>
  <router-view class="layout" />
  <Nav />
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  padding: 10px 15px 100px;
}

.page-title {
  margin: 0 0 20px;
  text-align: center;
}

.layout {
  max-width: 1000px;
  margin: auto;
}
</style>
