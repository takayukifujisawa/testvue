Vue.use(VueTables.ClientTable);

new Vue({
  el: "#app",
  data: {
    columns: [
      'id',
      'name',
      'email',
      'group_name'
    ],
    data: getData(),
    options: {
	    filterByColumn: true, 
      listColumns: {
        group_name: [
          {
            id: '人事部',
            text: '人事部x'
          },
          {
            id: '総務部',
            text: '総務部y'
          }
        ],
        name: [
          {
            id: 'sample1', text: 'sample1'
          }
        ]
      },
      headings: {
        id: 'id',
        name: '名前',
        email: 'メールアドレス',
        group_name: 'ほあああ'
      },
      sortable: [
        'id', 'name'
      ],
      texts: {
        filterPlaceholder: '検索する'
      }
    }
  }
});

function getData() {
  return [
    {
      'id': 1,
      'name': 'sample1',
      'email': 'sample1@example.com',
      'group_name': '人事部'
    },
    {
      'id': 2,
      'name': 'sample2',
      'email': 'sample2@example.com',
      'group_name': '人事部'
    },

    {
      'id': 3,
      'name': 'sample3',
      'email': 'sample3@example.com',
      'group_name': '経理部'
    },
    {
      'id': 4,
      'name': 'sample4',
      'email': 'sample4@example.com',
      'group_name': '総務部'
    },
    {
      'id': 5,
      'name': 'sample1',
      'email': 'sample1x@example.com',
      'group_name': '総務部'
    },
  ];
}
