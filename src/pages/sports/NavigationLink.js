import {Link, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import {useRecoilValue} from 'recoil';
import dataSourceMap from './dataSourceMap';

export default function NavigationLink({id, type, onClick, isLast}) {
  const itemDataSource = useRecoilValue(dataSourceMap[type]);
  const itemData = itemDataSource.find((item) => item.id === id);
  return isLast ? (
    <Typography
      key={itemData.name}
      color='text.primary'
      sx={{
        fontSize: 15,
      }}
    >
      {itemData.name}
    </Typography>
  ) : (
    <Link
      underline='hover'
      key={itemData?.name}
      color='inherit'
      onClick={onClick}
      sx={{
        fontSize: 15,
        cursor: 'pointer',
      }}
    >
      {itemData?.name}
    </Link>
  );
}

NavigationLink.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
};
