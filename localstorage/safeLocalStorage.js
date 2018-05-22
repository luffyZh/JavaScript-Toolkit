(function(){
  var safeLocalStorage = function(key, value) {
    try{
      localStorage.setItem(key,value);
    }catch(oException){
      if(oException.name == 'QuotaExceededError'){
          console.log('已经超出本地存储限定大小！');
              // 可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
          localStorage.clear();
          localStorage.setItem(key,value);
      }
    }
  }
  this.safeLocalStorage = safeLocalStorage;
})();