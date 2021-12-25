<template>
  <div class="page-purchase">
    <DateRangePicker @changeDate="getList" />
    <div class="result-container">
      <InfoCard v-for="item in list" :key="item.productId">
        <h3>{{ item.productName }}
          <br><span class="info-number">No.{{ item.productNo }}</span></h3>
        <span class="info-date">{{ item.sellDate }}</span>
        <p class="icon-user">{{ item.sellUsername }}</p>
        <div class="info-list-item" v-if="item.valueList">
          <div class="info-list-left">
            <el-tag v-for="value in item.valueList" :key="value.valueId">
              {{ value.valueName }}
            </el-tag>
          </div>
          <div class="info-list-right">
            <p class="info-price"><small>¥</small>{{ item.sellPrice }}</p>
            <p class="info-quantity"><small>x</small>{{ item.sellNums }}</p>
          </div>
        </div>
      </InfoCard>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import DateRangePicker from '@/components/DatePicker/RangePicker.vue'
import InfoCard from '@/components/Card/InfoCard.vue'
import { getSalesList } from '@/network/api';

export default {
  components: {
    DateRangePicker,
    InfoCard
  },
  setup() {
    let info = reactive({
      list: []
    });

    let page = {
      pageSize: 20,
      pageNum: 1
    }

    function getList([startDate, endDate] = [_global.currentDate, _global.currentDate]) {
      getSalesList({
        ...page,
        startDate,
        endDate
      })
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

