// components/askComponent/kc-table-body/kc-table-body.js
Component({
  properties: {
    columns: {
      type: Array,
      value: [],
    },
    dataSource: {
      type: Array,
      value: [],
    },
    // 斑马纹
    striped:{
      type:Boolean,
      value:false
    },
    // 边框
    bordered:{
      type:Boolean,
      value:false
    }
  },
  data: {
    tableData: [],
    widthObject:{}  
  },
  methods: {
    getTableDataIndex(columns) {
      let arr = [];
      columns.forEach((column) => {
        if (column?.dataIndex) {
          arr.push(column.dataIndex);
        }
        if (column?.children) {
          arr.push(this.getTableDataIndex(column.children));
        }
      });
      arr = arr.flat();
      // console.log('body-column:',arr);
      return arr;
    },
    setTableData(columns, data) {
      const dataIndex = this.getTableDataIndex(columns);
      // console.log(dataIndex);
      const list = data;
      let arr = [];
      list.forEach((item) => {
        let obj = [];
        for (let attr of dataIndex) {
          obj.push({dataIndex:attr,value:item[attr]})
        }
        arr.push(obj);
      });
      // console.log(arr);
      return arr;
    },
    setWidthObject(columns){
      let dataIndexList= this.getDataWidthList(columns);
      // console.log('dataIndexList',dataIndexList);
      this.setData({
        widthObject:dataIndexList
      })
    },
    getDataWidthList(columns){
      let arr = [];
      columns.forEach((column) => {
        if (column?.dataIndex) {
          arr.push({dataIndex:column.dataIndex,width:column.width});
        }
        if (column?.children) {
          arr.push(this.getDataWidthList(column.children));
        }
      });

      arr = arr.flat();
      return arr;
    },
    init() {
      // console.log(this.data.columns);
      // console.log(this.data.dataSource);
      let columns = this.data.columns;
      let dataSource = this.data.dataSource;

      this.setWidthObject(columns)
      const tableData = this.setTableData(columns, dataSource);

      this.setData({
        tableData,
      });
    },
  },

  lifetimes: {
    attached() {
      this.init();
    },
  },
});
