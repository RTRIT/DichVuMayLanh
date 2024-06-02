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
        
    }
  }