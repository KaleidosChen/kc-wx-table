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
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
  lifetimes: {
    attached() {
      console.log("table-header", this.data.columns);
    },
  },
});
