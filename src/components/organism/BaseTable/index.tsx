import { Box, Typography } from "@mui/joy";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ThemeProvider } from "@emotion/react";
import SearchBox from "../../molecule/SearchBox";
import { Experimental_CssVarsProvider as MUICssVarsProvider } from '@mui/material/styles';

const BaseTable: React.FC<any> = (props): JSX.Element => {
  const { rows, columns, variant, rowId } = props;

  return (
    <MUICssVarsProvider>
      <div>
        <DataGrid
          getRowId={rowId}
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          checkboxSelection={false}
          disableRowSelectionOnClick
          disableColumnFilter
        />
      </div>
    </MUICssVarsProvider>
  );
}

export default BaseTable;
