import { styled } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { Fonts } from "../../enums/appEnums";

const TableHeaderRow = styled(TableRow)(({ theme }) => {
  return {
    "& th": {
      fontSize: 14,
      padding: 8,
      fontWeight: Fonts.MEDIUM,
      color: theme.palette.text.primary,
      "&:first-of-type": {
        paddingLeft: 20,
      },
      "&:last-of-type": {
        paddingRight: 20,
      },
    },
  };
});

const TableHeader = ({ children, ...rest }) => {
  return <TableHeaderRow {...rest}>{children}</TableHeaderRow>;
};

export default TableHeader;
