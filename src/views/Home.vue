<template>
  <div class="page-home">
    <DateRangePicker @changeDate="handleDates" />
    <div class="result-container">
      <Card>
        <template v-slot:image>
          <img src="@/assets/images/sale.svg" alt="销售">
        </template>
        <template v-slot:default>
          <p>销售金额：<span>{{ saleInfo.totalPrices }}</span></p>
          <p>销售数量：<span>{{ saleInfo.totalNums }}</span></p>
          <p>订单数量：<span>{{ saleInfo.counts }}</span></p>
        </template>
      </Card>
      <Card>
        <template v-slot:image>
          <img src="@/assets/images/purchase.svg" alt="进货">
        </template>
        <template v-slot:default>
          <p>进货金额：<span>{{ purchaseInfo.totalPrices }}</span></p>
          <p>进货数量：<span>{{ purchaseInfo.totalNums }}</span></p>
          <p>订单数量：<span>{{ purchaseInfo.counts }}</span></p>
        </template>
      </Card>
      <Card>
        <template v-slot:image>
          <img src="@/assets/images/stoke.svg" alt="库存">
        </template>
        <template v-slot:default>
          <p>库存总额：<span>{{ stokeInfo.totalPrices }}</span></p>
          <p>库存总量：<span>{{ stokeInfo.totalNums }}</span></p>
        </template>
      </Card>
      <Card>
        <template v-slot:image>
          <img src="@/assets/images/back.svg" alt="库存">
        </template>
        <template v-slot:default>
          <p>退货总额：<span>{{ returnedInfo.totalPrices }}</span></p>
          <p>退货总量：<span>{{ returnedInfo.totalNums }}</span></p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { saleCount, purchaseCount, stokeCount, returnedCount } from '@/network/api'
import DateRangePicker from '@/components/DatePicker/RangePicker.vue'
import Card from '@/components/Card/IndexCard.vue'

import { reactive, toRefs } from 'vue';

export default {
  components: {
    DateRangePicker,
    Card
  },
  setup() {
    let info = reactive({
      saleInfo: {
        counts: 0,
        totalNums: 0,
        totalPrices: 0
      },
      purchaseInfo: {
        counts: 0,
        totalNums: 0,
        totalPrices: 0
      },
      stokeInfo: {
        totalNums: 0,
        totalPrices: 0
      },
      returnedInfo: {
        totalNums: 0,
        totalPrices: 0
      }
    });
    function handleDates(dates = [_global.currentDate, _global.currentDate]) {
      saleCount(dates).then(res => info.saleInfo = res);
      purchaseCount(dates).then(res => info.purchaseInfo = res);
      stokeCount(dates).then(res => info.stokeInfo = res);   
      returnedCount(dates).then(res => info.returnedInfo = res);
    }

    return {
      ...toRefs(info),
      handleDates
    }
  },
}
</script>

<style lang="less">

</style>