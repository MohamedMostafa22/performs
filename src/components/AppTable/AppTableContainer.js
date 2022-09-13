import TableContainer from "@mui/material/TableContainer";

const AppTableContainer = ({ children, sxStyle }) => {
  return (
    <TableContainer
      sx={{
        "& tr > th, & tr > td": {
          whiteSpace: "nowrap",
        },
        ...sxStyle,
      }}
    >
      {children}
    </TableContainer>
  );
};

export default AppTableContainer;
