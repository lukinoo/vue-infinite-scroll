<script setup lang="ts"></script>
<template>
  <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped lang="less">
@white_color: #fff;

.loader {
  display: inline-block;
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  div {
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: 0.2rem solid @white_color;
    border-radius: 50%;
    border-color: @white_color transparent transparent transparent;
    animation: loader_animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes loader_animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
