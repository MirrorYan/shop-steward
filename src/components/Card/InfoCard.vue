<template>
  <Box class="info-card">
    <h3><slot name="title" /></h3>
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
  padding-bottom: 1.875rem;
  position: relative;
  p {
    margin: 0;
  }
  h3, .h3 {
    margin: 0 15px 5px 0;
  }
  .info-date {
    font-size: .75rem;
    color: var(--text-secondary);
    position: absolute;
    right: 1rem;
    bottom: .5rem;
  }
  .info-number {
    font-weight: normal;
    font-size: .75rem;
    color: var(--text-secondary);
  }
  .info-list-item {
    display: flex;
    margin-top: 20px;
  }
  .info-list-left {
    flex: 1;
  }
  .info-list-right {
    text-align: right;
  }
  .info-price {
    font-weight: bold;
  }
  .info-quantity {
    color: var(--text-secondary);
    font-size: .75rem;
  }

  .el-tag {
    margin: 3px;
  }
}
</style>