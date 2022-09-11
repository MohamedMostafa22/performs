import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeader from '@crema/core/AppTable/TableHeader';
import {styled, TableCell, TableRow, useTheme} from '@mui/material';
import {AppTableContainer} from '@crema';

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));

const TableItem = ({data}) => {
  const theme = useTheme();

  const scoreColors = {
    1: theme.palette.analytics.notStarted,
    2: theme.palette.analytics.notStarted,
    3: theme.palette.analytics.inProgress,
    4: theme.palette.analytics.done,
    5: theme.palette.analytics.done,
  };

  return (
    <TableRow className='item-hover'>
      <StyledTableCell align='left'>{data.name}</StyledTableCell>
      <StyledTableCell
        align='justify'
        sx={{
          color: scoreColors[data.score],
          pl: 6,
        }}
      >
        {data.score}
      </StyledTableCell>
    </TableRow>
  );
};

TableItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }),
};

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Name</TableCell>
      <TableCell align='left'>Score</TableCell>
    </TableHeader>
  );
};

const MetricsTable = ({metrics}) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {metrics.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default MetricsTable;

MetricsTable.defaultProps = {
  metrics: [],
};

MetricsTable.propTypes = {
  metrics: PropTypes.array,
};
