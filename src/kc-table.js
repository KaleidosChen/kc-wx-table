Component({
  properties: {
    // 列配置
    columns: {
      type: Array,
      value: [],
    },
    // 表数据
    dataSource: {
      type: Array,
      value: [],
    },
    // 斑马纹
    striped:{
      type:[Boolean,String],
      value:false
    },
    // 边框
    bordered:{
      type:[Boolean,String],
      value:false
    }
  },
  data: {},
  methods: {},
  lifetimes: {},
});
