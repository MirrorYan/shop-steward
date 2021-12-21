<template>
  <Box class="index-card">
    <div class="index-card-image">
      <slot name="image" />
    </div>
    <div class="index-card-content">
      <slot />
    </div>
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
.index-card {
  display: table;
  width: 100%;
}
.index-card-image,
.index-card-content {
  display: table-cell;
  vertical-align: middle;
}
.index-card-image {
  width: 40%;
  padding-right: 1rem;
  text-align: center;
  border-right: 2px solid var(--color-primary);
}
.index-card-content {
  padding-left: 20px;
}
</style>