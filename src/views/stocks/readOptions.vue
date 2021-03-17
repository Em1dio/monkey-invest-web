<template>
  <div>
    <edit-icon class="button" />
    <trash-icon class="button" @click="removeStock" />
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    id: {
      type: String,
      default: '',
    },
  },

  methods: {
    async removeStock() {
      try {
        const response = await this.$http.delete(`/stocks/${this.id}`);
        if (response.status === 200) {
          this.$emit('readStock');
        } else {
          throw new Error('Teste');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
