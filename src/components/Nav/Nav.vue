<template>
  <nav class="navigation">
    <router-link class="nav-item" v-for="item in navList" :key="item.name" :to="item.link" >
      <Icon :name="item.name" />
      <span class="nav-text">{{ item.text }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from './NavIcon.vue'

export default {
  components: {
    Icon
  },
  setup () {
    const navList = [{
      name: 'home',
      text: '首页',
      link: '/'
    }, {
      name: 'purchase',
      text: '进货单',
      link: '/purchase'
    }, {
      name: 'sale',
      text: '售货单',
      link: '/sale'
    }, {
      name: 'returned',
      text: '退货单',
      link: '/returned'
    }, {
      name: 'stoke',
      text: '仓库',
      link: '/stoke'
    }];

    return {
      navList
    }
  }
}
</script>

<style lang="less">
nav {
  display: flex;
  width: 100%;
  background: var(--white);
  box-shadow: 0 -3px 13px rgba(0, 0, 0, .06);
  border: 8px 8px 0 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  .nav-item {
    flex: 1;
    padding: 15px;
    text-align: center;
    color: #666;
  }
  .nav-text {
    display: block;
  }
}
</style>