<template>
  <div class="container">
    <sidebar />
    <app-main />
  </div>
</template>

<script>
import AppMain from './AppMain.vue';
import sidebar from './sidebar';
export default {
  components: {
    AppMain,
    sidebar,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}
</style>
