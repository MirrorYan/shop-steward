/**
 * 
 * @param {*} date 
 * @returns 
 */
export function formatDate(date) {
  if (typeof date !== 'object' || !(date instanceof Date)) return;
  let month = date.getMonth() + 1,
        day = date.getDate();
  month < 10 && (month = '0'+month);
  day < 10 && (day = '0'+day);
  return `${date.getFullYear()}-${month}-${day}`;
}