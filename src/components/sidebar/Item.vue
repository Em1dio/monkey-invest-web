<template>
  <form class="item" @click="$emit('click')">
    <div>
      <slot></slot>
    </div>
    <p class="text">{{ this.text }}</p>
  </form>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
}

.item:hover {
  background-color: #2c3e50;
  color: white;
  transition: 0.3s;
}

.text {
  padding-left: 1rem;
}
</style>
