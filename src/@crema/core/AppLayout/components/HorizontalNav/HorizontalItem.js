import React from 'react';
import {Icon, ListItem, ListItemText} from '@mui/material';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../utility/IntlMessages';
import Box from '@mui/material/Box';
import AppNavLink from '../../../AppNavLink';
import Badge from '@mui/material/Badge';

function HorizontalItem(props) {
  const {item, dense} = props;
  const active = isUrlInChildren(item, props.location.pathname);

  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (
        parent.children[i].url === url ||
        url.includes(parent.children[i].url)
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <ListItem
      component={AppNavLink}
      to={item.url}
      activeClassName='active'
      className={clsx('navItemSubmenu', dense && 'dense')}
      exact={item.exact}
      sx={{
        minHeight: 40,
        padding: '4px 12px',
        color: (theme) => theme.palette.text.primary,
        textDecoration: 'none!important',
        '&.active': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.common.white + '!important',
          pointerEvents: 'none',
          '& .list-item-text-primary': {
            color: 'inherit',
          },
          '& .list-item-icon': {
            color: 'inherit',
          },
        },
        '& .list-item-text': {
          padding: '0 0 0 16px',
        },
        '&.dense': {
          padding: '4px 12px',
          minHeight: 40,
          '& .list-item-text': {
            padding: '0 0 0 8px',
          },
        },
      }}
    >
      {item.icon && (
        <Icon
          sx={{
            color: active ? 'white' : 'action',
            mr: 3,
            fontSize: {xs: 16, xl: 18},
          }}
        >
          {item.icon}
        </Icon>
      )}
      <ListItemText
        className='AppNavLinkTextSubmenu'
        primary={<IntlMessages id={item.messageId} />}
      />
      {item.count && (
        <Box ml={4}>
          <Badge
            count={item.count}
            sx={{
              color: item.color,
            }}
          />
        </Box>
      )}
    </ListItem>
  );
}

HorizontalItem.defaultProps = {};

export default withRouter(React.memo(HorizontalItem));

HorizontalItem.propTypes = {
  item: PropTypes.object,
  location: PropTypes.object,
  dense: PropTypes.bool,
};