<template>
  <div>
    <orange-button @click="logout">Logout</orange-button>
  </div>
</template>

<script>
import OrangeButton from '../components/OrangeButton.vue';
// import { Menu2Icon } from 'vue-tabler-icons';

export default {
  name: 'Dashboard',
  components: { OrangeButton },
  methods: {
    logout() {
      this.$cookies.remove('token');
      this.$router.replace({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
body {
  padding-left: calc(var(--nav-width) + 188px);
  color: white;
  padding: 0;
  margin: 0;
  background-color: aliceblue;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
