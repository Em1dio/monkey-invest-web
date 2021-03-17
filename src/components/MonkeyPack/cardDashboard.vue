<template>
  <div>
    <div class="card" @click="$emit('click')">
      <div class="icon" :style="styled">
        <slot stroke-width="1"></slot>
      </div>
      <p class="text">{{ title }}</p>
      <p class="text" v-if="type === 'currency'">{{ value | toCurrency }}</p>
      <p class="text" v-if="type === 'percentage'">{{ value | toPercent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    backgroundColor: {
      type: String,
      default: '#E27034',
    },
  },
  computed: {
    styled() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 173px;
  height: 202px;
  background: #f2f5fa;
  border-radius: 20px;
  transition: all 0.2s;
  margin-left: 10px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}

.icon {
  display: flex;
  align-items: center;
  width: 61px;
  height: 61px;
  border-radius: 20px;
  padding: 5px;
}

.text {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #000000;
}
</style>
