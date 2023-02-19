
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUPED_COLUNMS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
