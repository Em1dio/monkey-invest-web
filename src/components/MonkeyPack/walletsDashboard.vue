<template>
  <div>
    <div class="wallet" @click="setActive">
      <div
        v-if="active === id"
        :class="
          value >= 0
            ? 'active-icon value-positive'
            : 'active-icon value-negative'
        "
      >
        <circle-check-icon
          :class="value >= 0 ? 'active-icon-positive' : 'active-icon-negative'"
        />
      </div>
      <div class="wallet-icon">
        <slot />
      </div>
      <div class="wallet-infos">
        <h2>{{ name }}</h2>
        <div class="wallet-value">
          <p
            :class="
              value >= 0 ? 'value value-positive' : 'value value-negative'
            "
          >
            {{ value | toCurrency }}
          </p>
          <p v-if="value >= 0" class="percent positive">
            <arrow-narrow-up-icon />
            {{ percentValue | toPercent }}
          </p>
          <p v-else class="percent negative">
            <arrow-narrow-down-icon />
            {{ percentValue | toPercent }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: -5,
    },
    id: {
      type: String,
      default: '1',
    },
    active: {
      type: String,
      default: '',
    },
    percentValue: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    setActive() {
      if (this.active === false) {
        this.active = !this.active;
      }
      this.$emit('click');
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

.wallets {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-wallets {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-wallets h2 {
  font-size: 12pt;
  color: #e7e7e7;
}

.header-wallets .title-bar {
  margin-top: 5px;
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background: #e27034;
}

.body-wallets {
  margin-top: 20px;
  width: 100%;
  display: flex;
  column-gap: 20px;
}

.wallet {
  display: flex;
  align-items: center;
  width: 240px;
  height: 80px;
  background: #363463;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.wallet-active {
  display: flex;
  align-items: center;
  width: 240px;
  height: 80px;
  background: #4e4a8f;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.wallet:hover {
  transform: scale(1.01);
  background: #4e4a8f;
}

.wallet-icon {
  width: 60px;
  height: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.wallet-icon svg {
  stroke: #e7e7e7;
  width: 30px;
  height: 30px;
  stroke-width: 1.2;
}

.wallet-infos {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.wallet-infos h2 {
  font-size: 10pt;
  color: #e7e7e7;
}

.wallet-value {
  display: flex;
  align-items: flex-end;
}

.wallet-value .value {
  margin-top: 5px;
  padding: 4px 7px;
  font-weight: bold;
  font-size: 9pt;
  border-radius: 20px;
}

.value-positive {
  background: #36f1cd;
  color: rgb(21, 71, 55);
}

.value-negative {
  background: #ff6a64;
  color: #752e2c;
}

.wallet-value .percent {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 10pt;
}

.positive {
  color: #36f1cd;
}

.negative {
  color: #f3807c;
  font-weight: bold;
}

.wallet-value .percent svg {
  width: 19px;
  height: 19px;
  margin-right: -3px;
  stroke-width: 2;
}

/* wallter-infos-container */

.wallet-content {
  margin-top: 40px;
}

.wallet-content-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.wallet-content-header h2 {
  font-size: 12pt;
  color: #e7e7e7;
}

.wallet-content-header .title-bar {
  margin-top: 5px;
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background: #e27034;
}

/* active-icon */

.active-icon-icon {
  width: 30px;
  height: 30px;
  padding: 5px;
  stroke-width: 2;
}
.active-icon-positive {
  stroke: rgb(21, 71, 55);
}
.active-icon-negative {
  stroke: rgb(71, 21, 21);
}

.active-icon {
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 220px;
  margin-top: -70px;
}
</style>
