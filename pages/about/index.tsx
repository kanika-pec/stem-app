import {  CellExpand, CopyIconLight, DataTable, DeleteIconBlack, LozengeSelect } from "@attentive-platform/stem-ui";

const statusDropdownItems = [
  { value: 1, name: 'Completed', color: 'success' },
  { value: 2, name: 'Draft', color: 'warning' },
  { value: 3, name: 'Incomplete', color: 'error' }
];

const columns = [ {
  Header: 'File Name',
  columns: [
      {
          Header: '',
          accessor: 'fileName',
          Footer: 'Total',
          width: '20rem',
          isExpandable: true,
          ExpandableComponent: ({ row }: any) => <div>{row.original.fileName}</div>,
          // For expandable rows, use the code: `Cell: ({ row }) => CellExpand({ row, accessorKey: 'fileName' })`
          Cell: ({ row }: any) => CellExpand({ row, accessorKey: 'fileName' }),
          isSticky: true
      }
  ],
  Footer: 'OVERALL',
  allowColumnConfig: true,
  sortAlphabetically: true,
  handleSortAsc: () => {},
  handleSortDesc: () => {},
  isSticky: true
},
{
  Header: 'Date Added',
  columns: [
      {
          Header: 'First col',
          accessor: 'dateAdded',
          Footer: '',
          width: '10rem',
          minWidth: '10rem'
      },
      {
          Header: 'Second col',
          accessor: 'dateAdddded',
          Footer: '',
          width: '10rem',
          minWidth: '10rem'
      },
      {
          Header: 'Third col',
          accessor: 'dateAddddded',
          Footer: '',
          width: '10rem',
          minWidth: '10rem'
      },
      {
          Header: 'Fourth col',
          accessor: 'asdf',
          Footer: '',
          width: '10rem',
          minWidth: '10rem'
      }
  ],
  Footer: '',
  ellipsis: true,
  allowColumnConfig: true,
  showRightSeparator: true
},
{
  Header: 'Margin',
  columns: [
      {
          accessor: 'margin',
          Footer: '',
          width: '20rem'
      }
  ],
  Footer: '20%',
  allowColumnConfig: true
},
{
  Header: 'Status',
  columns: [
      {
          accessor: 'status',
          Footer: '',
          width: '20rem'
      }
  ],

  headerBgColor: 'green',
  Footer: ''
},
{
  Header: 'Area',
  columns: [
      {
          accessor: 'area',
          Footer: 'Total area',
          width: '20rem'
      }
  ],

  Footer: '283,549 sqft',
  allowColumnConfig: true
},
{
  Header: 'Actions',
  columns: [
      {
          accessor: 'actions',
          Footer: '',
          width: '20rem',
          isSticky: true
      },
      {
          accessor: 'actions2',
          Footer: '',
          Header: 'adss',
          isSticky: true
      }
  ],
  Footer: '',
  isSticky: true
}]

const data = [
  ...new Array(10).fill(0).map((_, index) => ({
      fileName: `Takeoff ${index + 1}`,
      dateAdded: '23rd September, 2020',
      margin: '10%',
      color: index % 2 === 0 ? '#D5E9BE' : '#90DCFE',
      status: <LozengeSelect size='small' value={2} dropdownItems={statusDropdownItems} />,
      area: Math.floor(Math.random() + 1 * 100),
      actions: (
          <div>
              <CopyIconLight />
              <DeleteIconBlack />
          </div>
      ),
      subRows: [
          {
              fileName: 'Takeoff nest 1',
              dateAdded: '23rd September, 2020',
              margin: '10%',
              status: <LozengeSelect size='small' value={2} dropdownItems={statusDropdownItems} />,
              area: Math.floor(Math.random() + 1 * 100),
              actions: (
                  <div>
                      <CopyIconLight />
                      <DeleteIconBlack />
                  </div>
              ),
              subRows: [
                  {
                      fileName: 'Takeoff nest 1.1',
                      dateAdded: '23rd September, 2020',
                      margin: '10%',
                      status: <LozengeSelect size='small' value={2} dropdownItems={statusDropdownItems} />,
                      area: Math.floor(Math.random() + 1 * 100),
                      actions: (
                          <div>
                              <CopyIconLight />
                              <DeleteIconBlack />
                          </div>
                      )
                  },
                  {
                      fileName: 'Takeoff nest 1.2',
                      dateAdded: '23rd September, 2020',
                      margin: '10%',
                      status: <LozengeSelect size='small' value={2} dropdownItems={statusDropdownItems} />,
                      area: Math.floor(Math.random() + 1 * 100),
                      actions: (
                          <div>
                              <CopyIconLight />
                              <DeleteIconBlack />
                          </div>
                      )
                  }
              ]
          },
          {
              fileName: 'Takeoff nest 2',
              dateAdded: '23rd September, 2020',
              margin: '10%',
              status: <LozengeSelect size='small' value={2} dropdownItems={statusDropdownItems} />,
              area: Math.floor(Math.random() + 1 * 100),
              actions: (
                  <div>
                      <CopyIconLight />
                      <DeleteIconBlack />
                  </div>
              ),
              subRows: [
                  {
                      fileName: 'Takeoff nest 2.1',
                      dateAdded: '23rd September, 2020',
                      margin: '10%',
                      status: <LozengeSelect size='small' value={2} dropdownItems={statusDropdownItems} />,
                      area: Math.floor(Math.random() + 1 * 100),
                      actions: (
                          <div>
                              <CopyIconLight />
                              <DeleteIconBlack />
                          </div>
                      )
                  }
              ]
          }
      ]
  }))
]

export default function Home() {
  return (
    <div style={{padding: '2rem'}}>
      <p style={{marginBottom: '2rem'}}>About page</p>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
