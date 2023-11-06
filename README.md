# kc-wx-table

1. 安装
2. 使用
3. 配置
4. API

# 1. 安装

1.1 安装使用 npm，`npm install kc-wx-table`

1.2 构建 npm

# 2.使用

2.1 引入 kc-wx-table 组件

> "usingComponents": {
> "kc-table":"kc-wx-table/kc-table"
> }

2.2 页面中写入组件

```
<kc-table columns="{{columns}}" dataSource="{{dataSource}}" striped="{{true}}" bordered="{{true}}"></kc-table>
```

# 3.配置

```
tableColumns =[{
  title: '编号',
  dataIndex: 'id',
  width:200
},
{
  title: '姓名',
  dataIndex:'name',
  width:200,
},
{
  title: '金额',
  dataIndex: 'money',
  width:300
},
]
```

```
dataSource=[
    {id:1,name:22,money:200},
    {id:1,name:22,money:200},
    {id:1,name:22,money:200},
    {id:1,name:22,money:200},
    {id:1,name:22,money:200},
    {id:1,name:22,money:200}
    ]
```

# 4.API

|    字段    |  类型   |             描述             |
| :--------: | :-----: | :--------------------------: |
|  columns   |  Array  |         表格列配置项         |
| dataSource |  Array  |            数据源            |
|  striped   | Boolean | 是否使用斑马纹（默认 false） |
|  bordered  | Boolean | 显示单元格边框（默认 false） |
