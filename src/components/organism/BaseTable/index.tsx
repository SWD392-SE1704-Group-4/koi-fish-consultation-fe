// import { ThemeProvider } from "@emotion/react";

import { Box, Typography } from "@mui/joy";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SearchBox from "../../molecule/SearchBox";

const BaseTable: React.FC<any> = (props): JSX.Element => {
  const { rows, columns, variant } = props;

  return (
    <Box>
      <SearchBox sx={{ margin: 1 }} />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default BaseTable;
