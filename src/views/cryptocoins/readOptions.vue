<template>
  <div>
    <edit-icon class="button" />
    <trash-icon class="button" @click="remove" />
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    remove() {
      this.$emit('remove');
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
