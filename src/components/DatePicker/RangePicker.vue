<template>
  <div class="date-range-picker">
    <el-date-picker
      v-model="dateStart"
      type="date"
      placeholder="开始日期"
      :clearable="false"
      :editable="false"
      :disabled-date="disabledStartDate"
      @change="changeStartDate"
    />
    <span>-</span>
    <el-date-picker
      v-model="dateEnd"
      type="date"
      placeholder="结束日期"
      :clearable="false"
      :editable="false"
      :disabled-date="disabledEndDate"
      @change="changeEndDate"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { formatDate } from '@/tools';

export default {
  setup (props, context) {
    const state = reactive({
      dateStart: _global.currentDate,
      dateEnd: _global.currentDate,
      disabledStartDate(time) {
        return time.getTime() > Date.now();
      },
      disabledEndDate(time) {
        return (time.getTime() > Date.now()) || (time.getTime() < state.dateStart.getTime());
      },
      changeStartDate(time) {
        if (time.getTime() > state.dateEnd.getTime()) {
          state.dateEnd = state.dateStart;
        }
        triggerChangeDate();
      },
      changeEndDate() {
        triggerChangeDate();
      }
    });

    function triggerChangeDate() {
      context.emit('changeDate', [formatDate(state.dateStart), formatDate(state.dateEnd)]);
    }

    triggerChangeDate();

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less">
.date-range-picker {
  margin-bottom: 30px;
  text-align: center;
} 
</style>