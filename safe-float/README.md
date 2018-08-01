## 精确到指定的位数 Number.toFixed(n) VS Number.toPrecision(n)

### Number.toFixed(n)
截取到小数点后面的第n位，必要时进行四舍五入，返回字符串，不符合会在后面补0
```
(1.005).toFixed(2); // '1.01'
(1.005).toFixed(3); // '1.005';
(1.0).toFixed(2); // '1.00'
```
### Number.toPrecision(n)
截取整个数字的前n位，必要时进行四舍五入，返回字符串，不符合会在后面补0
```
(1.005).toPrecision(3); // '1.01'
(1.005).toPrecision(2); // '1.0'
(1.0).toPrecision(3); // '1.00'
```