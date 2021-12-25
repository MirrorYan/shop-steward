import axios from "@/network";

// login
export function userLogin(data) {
  return axios.post('/user/login', data);
}

// Get sale count info
export function saleCount([startDate, endDate] = []) {
  if (startDate && endDate) {
    return axios.get('/sell/log/nums', {
      startDate,
      endDate
    });
  }
  return axios.get('/sell/log/nums');
}

// Get purchase count info
export function purchaseCount([startDate, endDate] = []) {
  if (startDate && endDate) {
    return axios.get('/purchase/log/nums', {
      params: {
        startDate,
        endDate
      }
    });
  }
  return axios.get('/purchase/log/nums');
}


export function stokeCount([startDate, endDate] = []) {
  if (startDate && endDate) {
    return axios.get('/sku/nums', {
      params: {
        startDate,
        endDate
      }
    });
  }
  return axios.get('/sku/nums');
}

export function returnedCount([startDate, endDate] = []) {
  if (startDate && endDate) {
    return axios.get('/return/log/nums', {
      params: {
        startDate,
        endDate
      }
    });
  }
  return axios.get('/return/log/nums');
}

// Get Purchase list
export function getPurchaseList({pageSize=20, pageNum=1, startDate, endDate}) {
  return axios.get('/purchase/log/list/merge', {
    params: {
      pageSize,
      pageNum,
      startDate,
      endDate
    }
  });
}

// Get sales list
export function getSalesList({pageSize=20, pageNum=1, startDate, endDate}) {
  return axios.get('/sell/log/list', {
    params: {
      pageSize,
      pageNum,
      startDate,
      endDate
    }
  });
}

// Get Returned list
export function getReturnedList({pageSize=20, pageNum=1, startDate, endDate}) {
  return axios.get('/return/log/list', {
    params: {
      pageSize,
      pageNum,
      startDate,
      endDate
    }
  });
}