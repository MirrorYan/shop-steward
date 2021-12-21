<template>
  <div class="shadow-box">
    <slot />
  </div>
</template>

<style lang="less">
.shadow-box {
  --box-shadow: #c4c4c4;

  padding: 1rem;
  box-shadow:  0px 0px 13px var(--box-shadow);
  border-radius: 10px;

  + .shadow-box {
    margin-top: 20px;
  }
}
</style>