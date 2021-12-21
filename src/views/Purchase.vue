<template>
  <div class="page-purchase">
    <DateRangePicker @changeDate="getList" />
    <div class="result-container">
      <InfoCard v-for="(item, index) in list" :key="`purchase${index}`">
        <h3>{{ item.productName }}</h3>
      </InfoCard>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import DateRangePicker from '@/components/DatePicker/RangePicker.vue'
import InfoCard from '@/components/Card/InfoCard.vue'
import { getPurchaseList } from '@/network/api';

export default {
  components: {
    DateRangePicker,
    InfoCard
  },
  setup() {
    let info = reactive({
      list: []
    });

    function getList(dates = [_global.currentDate, _global.currentDate]) {
      getPurchaseList(dates)
        .then(res => {
          console.log(res.content);
          info.list = res.content;
        })
    }

    return {
      ...toRefs(info),
      getList
    }
  }
}
</script>

