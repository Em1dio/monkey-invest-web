<template>
  <div>
    <div class="wallet-content">
      <div class="wallet-infos-card">
        <div class="top-row">
          <div class="row-item">
            <div class="icon-row">
              <cash-icon />
            </div>
            <div class="infos-row">
              <h2>Invested</h2>
              <p :class="stocks.totalBefore > 0 ? 'positive' : 'negative'">
                {{ stocks.totalBefore | toCurrency }}
              </p>
            </div>
          </div>
          <div class="row-item">
            <div class="icon-row">
              <businessplan-icon />
            </div>
            <div class="infos-row">
              <h2>Actual Value</h2>
              <p :class="stocks.totalActual > 0 ? 'positive' : 'negative'">
                {{ stocks.totalActual | toCurrency }}
              </p>
            </div>
          </div>
        </div>
        <div class="bottom-row">
          <div class="row-item">
            <div class="icon-row">
              <scale-icon />
            </div>
            <div class="infos-row">
              <h2>Balance</h2>
              <p
                :class="
                  stocks.totalActual - stocks.totalBefore > 0
                    ? 'positive'
                    : 'negative'
                "
              >
                {{ (stocks.totalActual - stocks.totalBefore) | toCurrency }}
              </p>
            </div>
          </div>
          <div class="row-item">
            <div class="icon-row">
              <discount-icon />
            </div>
            <div class="infos-row">
              <h2>Earn</h2>
              <p v-if="stocks.pctEarn >= 0" class="earn positive">
                <arrow-narrow-up-icon class="positive" />
                {{ stocks.pctEarn | toPercentage }}
              </p>
              <p v-else class="earn negative">
                <arrow-narrow-down-icon class="negative" />
                {{ stocks.pctEarn | toPercent }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    stocks: Object,
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

.wallet-content {
  margin-top: 40px;
}

.wallet-infos-card {
  width: 500px;
  height: 180px;
  background: #363463;
  border-left: solid 6px #e27034;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.row-item {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.top-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.bottom-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.icon-row {
  margin-right: 5px;
}

.icon-row svg {
  width: 40px;
  height: 40px;
  stroke: #e7e7e7;
}

.infos-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.infos-row h2 {
  font-size: 10pt;
  font-weight: 500;
  color: #e7e7e7;
}

.infos-row p {
  font-size: 10pt;
  font-weight: 500;
}

.earn {
  font-size: 10pt;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}

.positive {
  color: #36f1cd;
}

.negative {
  color: #cf4747;
}

.earn svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}
</style>
