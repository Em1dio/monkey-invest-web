<template>
  <v-app id="body">
    
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>

<style scoped>
#body {
  background-color: #323232
}
</style>