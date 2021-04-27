<template>
  <select
    @change="$emit('input', $event.target.value)"
    :value="value"
    :style="styled"
  >
    <option v-for="item in items" :key="item.id" :value="item.value">
      {{ item.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'MonkeySelect',
  props: {
    items: Array,
    value: {
      type: String,
      default: '',
    },
    format: {
      type: Boolean,
      default: false,
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '12px',
    },
    backgroundColor: {
      type: String,
      default: '#FFF',
    },
    marginLeft: {
      type: String,
      default: '0px',
    },
    marginRight: {
      type: String,
      default: '0px',
    },
    borderRadius: {
      type: String,
      default: '10px',
    },
    width: {
      type: String,
      default: '100px',
    },
    height: {
      type: String,
      default: '30px',
    },
    minWidth: {
      type: String,
      default: '0px',
    },
    minHeight: {
      type: String,
      default: '0px',
    },
    borderWidth: {
      type: String,
      default: '1px',
    },
    borderStyle: {
      type: String,
      default: 'solid',
    },
    borderColor: {
      type: String,
      default: '#cecece',
    },
    borderFocused: {
      type: String,
      default: '#e85d04',
    },
    letterSpacing: {
      type: String,
      default: '0',
    },
    display: {
      type: String,
      default: 'flex',
    },
    alignItems: {
      type: String,
      default: 'center',
    },
    justifyContent: {
      type: String,
      default: 'center',
    },
    fontFamily: {
      type: String,
      default: 'Sora, sans-serif !important',
    },
    fontWeight: {
      type: String,
      default: 'bold',
    },
    paddingRight: {
      type: String,
      default: '0px',
    },
    paddingLeft: {
      type: String,
      default: '10px',
    },
    maxlength: {
      type: String,
      default: '255',
    },
    min: {
      type: String,
      default: '-9999999',
    },
    textAlign: {
      type: String,
      default: 'center',
    },
  },
  data() {
    return {
      isFocused: false,
      inputValue: this.value,
      valueFormated: '',
    };
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
  },
  computed: {
    styled() {
      return {
        fontSize: this.fontSize,
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius,
        width: this.width,
        height: this.height,
        minWidth: this.minWidth,
        minHeight: this.minHeight,
        borderWidth: this.borderWidth,
        borderStyle: this.borderStyle,
        borderColor:
          this.isFocused === true ? this.borderFocused : this.borderColor,
        display: this.display,
        alignItems: this.alignItems,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
        justifyContent: this.justifyContent,
        letterSpacing: this.letterSpacing,
        marginLeft: this.marginLeft,
        marginRight: this.marginRight,
        paddingRight: this.paddingRight,
        paddingLeft: this.paddingLeft,
        textAlign: this.textAlign,
      };
    },
    formatedValue() {
      return this.valueFormated;
    },
  },
  methods: {
    handleUpdate(e) {
      if (e.target.value === this.inputValue) return;

      this.inputValue = e.target.value;

      this.$emit('input', this.inputValue);
    },
    focus() {
      this.isFocused = !this.isFocused;
    },
  },
};
</script>

<style scoped>
.kbutton {
  all: unset;
  transition: 150ms ease-in-out;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
