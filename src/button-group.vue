<template>
  <div class="f-button-group irelia">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FallenButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `f-button-group 的子元素应该是 f-button，但是你写的是 ${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;

*, *::before, *::after { box-sizing: border-box; }
.f-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .f-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
