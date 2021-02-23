<template>
  <div :style="divTitulo">
    <span :style="titulo">Monkey</span>
    <span :style="titulo2">Invest</span>
    <span :style="titulo">.</span>
  </div>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    fontSize: {
      type: String,
      default: '1px',
    },
    marginTop: {
      type: String,
      default: '0px',
    },
    color1: {
      type: String,
      default: '#e27034',
    },
    color2: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    divTitulo() {
      return {
        marginTop: this.marginTop,
      };
    },
    titulo() {
      return {
        color: this.color1,
        fontSize: this.fontSize,
        fontWeight: 700,
      };
    },
    titulo2() {
      return {
        color: this.color2,
        fontSize: this.fontSize,
        fontWeight: 700,
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;600;700&display=swap');
</style>
