<template>
  <div class="header-wallets">
    <h2 :style="headerH2"><slot /></h2>
    <div :style="titleBar"></div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '0px',
    },
    marginTop: {
      type: String,
      default: '5px',
    },
    height: {
      type: String,
      default: '4px',
    },
    borderRadius: {
      type: String,
      default: '5px',
    },
    color: {
      type: String,
      default: '#fff',
    },
    textColor: {
      type: String,
      default: '#fff',
    },
    fontSize: {
      type: String,
      default: '12pt',
    },
  },
  computed: {
    titleBar() {
      return {
        width: this.size,
        marginTop: this.marginTop,
        height: this.height,
        borderRadius: this.borderRadius,
        background: this.color,
      };
    },
    headerH2() {
      return {
        fontSize: this.fontSize,
        color: this.textColor,
      };
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  border: none;
  outline: none;
}

.header-wallets {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
