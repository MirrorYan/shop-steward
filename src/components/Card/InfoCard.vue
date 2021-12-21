<template>
  <Box class="info-card">
    <slot />
  </Box>
</template>

<script>
import Box from './box.vue';

export default {
  components: {
    Box
  }
}
</script>

<style lang="less">
.info-card {
  h3, .h3 {
    margin-top: 0;
  }
}
</style>