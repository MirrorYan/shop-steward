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
  padding-bottom: 1.875rem;
  position: relative;
  h3, .h3 {
    margin-top: 0;
    color: var(--color-primary-deep);
  }
  .info-number {
    font-weight: normal;
    font-size: .75rem;
    color: var(--text-secondary);
  }
  .info-price {
    font-weight: bold;
    color: var(--color-primary);
  }
  .info-date {
    font-size: .75rem;
    color: var(--text-secondary);
    position: absolute;
    right: 1rem;
    bottom: .5rem;
  }
}
</style>