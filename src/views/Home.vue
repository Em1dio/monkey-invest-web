<template>
  <div class="home">
    <Logo />
    <Login />
  </div>
</template>

<script>
import Logo from '../components/MonkeyPack/Logo';
import Login from '../components/Login';

export default {
  name: 'Home',
  components: { Logo, Login },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #e5e5e5;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
