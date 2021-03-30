<template>
  <div>
    <div class="walletCard">
      <div class="header-card">
        <h1>{{ data.name }}</h1>
        <p
          :class="
            data.totalActual - data.totalBefore >= 0
              ? 'financial-income positive'
              : 'financial-income negative'
          "
        >
          {{ calcPercent(data.totalBefore, data.totalActual) | toPercent }}
        </p>
      </div>
      <div class="body-card">
        <div class="info">
          <p>Owner</p>
          <p>{{ data.ownerUsername }}</p>
        </div>
        <div class="info">
          <p>Public</p>
          <eye-icon v-if="data.isPublic" stroke-width="2" size="14" />
          <eye-off-icon v-else stroke-width="2" size="14" />
        </div>
        <div class="info">
          <p>Balance</p>
          <p
            :class="
              data.totalActual - data.totalBefore >= 0 ? 'positive' : 'negative'
            "
          >
            {{ data.totalActual | toCurrency }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: Object,
  },
  data() {
    return {
      showModal: false,
      stocks: [],
      styled: {
        width: '1000px',
      },
    };
  },
  methods: {
    calcPercent(before, now) {
      return this.$commonMethods.calcPercent(before, now);
    },
    async readStock(activeWallet) {
      try {
        const response = await this.$http.get(
          `/stocks/${activeWallet}`,
          this.stock,
        );
        this.stocks = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
}
.walletCard {
  display: flex;
  flex-direction: column;
  width: 246px;
  height: 146px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.header-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.body-card {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  row-gap: 5px;
}

.header-card h1 {
  font-size: 18pt;
  font-weight: 100;
}

.financial-income {
  font-size: 14pt;
  font-weight: 700;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
}

.negative {
  color: #8b1e1e;
  stroke: #8b1e1e;
}

.positive {
  color: #2e8b1e;
  stroke: #2e8b1e;
}

.modal {
  display: flex;
  width: 1000px;
}
</style>
