/**
 * 
 * @param {Number} num 需要计算的结果 
 * @param {精确到的位数} precision 
 */
function safeFloat(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}