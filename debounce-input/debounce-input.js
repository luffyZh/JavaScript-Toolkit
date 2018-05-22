  // normal input
var normalInput = document.getElementById('normalInput');
var normalTimes = 0;
normalInput.onkeyup = function (e) {
    console.log('Input Value:', normalInput.value);
    document.getElementById('normalInputValue').innerText = normalInput.value;
    normalTimes++;
    document.getElementById('normalInputChangeTimes').innerText = normalTimes;  
};


// debounce input
var debounceInput = document.getElementById('debounceInput');
// 设置定时器函数
var timeout = null;
var debounceTimes = 0;
// 监听键盘事件
debounceInput.onkeyup = function (e) {
    // 只要在规定时间内又接收到了改事件
    // 就重置定时器，以达到预期效果
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        console.log('Input Value:', debounceInput.value);
        document.getElementById('debounceInputValue').innerText = debounceInput.value;
        debounceTimes++;
        document.getElementById('debounceInputChangeTimes').innerText = debounceTimes;
      }, 600);
};