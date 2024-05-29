import { Box, Typography } from "@mui/material";

type propsType = {
  datasource: any[];
  gridCols: {
    key: string;
    label: string;
    displayField?: any;
  }[];
};
const Table = (props: propsType) => {
  const { datasource, gridCols } = props;
  return (
    <>
      <Box component={"table"}>
        <Typography component={"thead"}>
          {gridCols?.map((col, ind) => (
            <Typography
              key={ind}
              component={"th"}
              sx={{ border:'2px solid gray' ,padding:'5px ', fontSize:'20px'}}
            >
              {col.label}
            </Typography>
          ))}
        </Typography>
        <Box component={"tbody"} className="text-center ">
          {datasource?.slice(0, 20)?.map((rows: any, rowindex: any) => (
            <Typography component={"tr"} key={rowindex}>
              {gridCols.map((col, ind) => (
                <Typography
                  component={"td"}
                  className="border-2 border-x-emerald-600"
                  key={ind}
                >
                  <Typography component={"a"} >
                    {col.displayField ? col.displayField(rows) : rows[col.key]}
                  </Typography>
                </Typography>
              ))}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Table;
