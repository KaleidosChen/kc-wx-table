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
  },
  data: {
    tableData: [],
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
      return arr;
    },
    setTableData(columns, data) {
      const dataIndex = this.getTableDataIndex(columns);
      // console.log(dataIndex);
      const list = data;
      let arr = [];
      list.forEach((item) => {
        let obj = {};
        for (let attr of dataIndex) {
          obj[attr] = item[attr];
        }
        arr.push(obj);
      });
      // console.log(arr);
      return arr;
    },
    init() {
      console.log(this.data.columns);
      console.log(this.data.dataSource);
      let columns = this.data.columns;
      let dataSource = this.data.dataSource;

      const tableData = this.setTableData(columns, dataSource);
      console.log("tableData", tableData);
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
