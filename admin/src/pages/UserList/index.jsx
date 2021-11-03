import React from "react";
import { useState } from "react";
// Styled Components
import { Container, EditButton, Grid, Image } from "./UserList.styles";
// Material UI Data-Grid
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dataGrid";
import { DeleteOutline } from "@material-ui/icons";
// React Router
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 170,
      renderCell: (params) => {
        return (
          <Grid>
            <Image
              className="data-img"
              src={params.row.avatar}
              alt="jon snow"
            />
            {params.row.username}
          </Grid>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <EditButton className="data-edit">Edit</EditButton>
            </Link>
            <DeleteOutline
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default UserList;
