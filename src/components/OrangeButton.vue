<template>
  <div>
    <button
      :style="style"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  name: 'OrangeButton',
  data() {
    return {
      hover: false,
    };
  },
  props: {
    unsetAll: {
      type: String,
      default: 'unset',
    },
    width: {
      type: String,
      default: '254px',
    },
    height: {
      type: String,
      default: '51px',
    },
    backgroundColor: {
      type: String,
      default: 'rgba(226, 112, 44, 1)',
    },
    color: {
      type: String,
      default: '#FFF',
    },
    marginTop: {
      type: String,
      default: '100PX',
    },
    cursor: {
      type: String,
      default: 'pointer',
    },
    borderRadius: {
      type: String,
      default: '10px',
    },
    borderColor: {
      type: String,
      default: 'transparent',
    },
    borderWidth: {
      type: String,
      default: '0',
    },
    backgroundHover: {
      type: String,
      default: 'rgb(241, 145, 93)',
    },
    transitionDelay: {
      type: String,
      default: '150ms',
    },
    transitionProperty: {
      type: String,
      default: 'all',
    },
    transitionDuration: {
      type: String,
      default: '100ms',
    },
    transitionTimingFunction: {
      type: String,
      default: 'ease-in-out',
    },
    transition: {
      type: String,
      default: 'ease-in-out 150ms',
    },
  },
  computed: {
    style() {
      return {
        all: this.unsetAll,
        width: this.width,
        height: this.height,
        cursor: this.cursor,
        marginTop: this.marginTop,
        color: this.color,
        borderRadius: this.borderRadius,
        backgroundColor: this.hover
          ? this.backgroundHover
          : this.backgroundColor,
        transition: this.transition,
        transitionDelay: this.transitionDelay,
        transitionDuration: this.transitionDuration,
        transitionProperty: this.transitionProperty,
        transitionTimingFunction: this.transitionTimingFunction,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
      };
    },
  },
};
</script>

<style scoped></style>
