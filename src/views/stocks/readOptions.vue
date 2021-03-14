<template>
  <div>
    <edit-icon class="button" />
    <trash-icon class="button" @click="removeStock" />
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    removeStock() {
      this.$emit('removed-stock');
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
