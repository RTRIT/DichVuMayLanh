module.exports = {
    ifeq: function(a, b, options){
      if (a === b) {
        return options.fn(this);
        }
      return options.inverse(this);
    },
    bar: function(){
      return "BAR!";
    },
    limit3: function(serviceList){
        if(!Array.isArray(serviceList)){
            return [];
        }else{
            return serviceList.slice(0,3);
        }
    },
    regName: function(str){
        return str.replace(/ /g, "-");
        
    },
    sumUp: function(str){
        return str.split(" ", 12).join(" ")+"...";
    },

    option: function(mtt){
      if(mtt==1){
        return "Đang chờ xử lý";
      }else if(mtt==2){
        return "Đã chấp nhận";
      }else if(mtt=3){
        return "Đã thanh toán";
      }else{
        return "Đã huỷ";
      }
    }
  }