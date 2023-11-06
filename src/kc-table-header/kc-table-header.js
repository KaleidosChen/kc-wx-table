// components/askComponent/kc-table-header/kc-table-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    columns: {
      type: Array,
      value: [],
    },
    // 边框
    bordered:{
      type:[Boolean,String],
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    setParentWidth(columns){
      let arr=[]
      columns.forEach(c=>{
        if('children' in c){
          let width=this.calcChildrenWidth(c.children)
          arr.push({...c,width:width})
        }else if('width' in c){
          arr.push({...c})
        }else{
          console.error('表格配置错误，不存在width');
        }
      })
      return arr
    },  
    calcChildrenWidth(array){
      let width=0
      array.forEach(i=>{
        if(!'children' in i ){
          this.logMsg('123')
          width+=this.calcChildrenWidth(i.children)
        }else{
          width+=i.width
        }
      })
      return width
    },
  },
  lifetimes: {
    attached() {
      console.log("table-header", this.data.columns);
      let columns=this.data.columns
      let columns1=this.setParentWidth(columns)
      this.setData({
        columns:columns1
      })
    },
  },
});
