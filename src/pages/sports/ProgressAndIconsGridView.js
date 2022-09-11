import {Grid} from '@mui/material';
import IconAndProgressCard from './IconAndProgressCard';
import AppAnimate from '@crema/core/AppAnimate';
import AppGridContainer from '@crema/core/AppGridContainer';
import PropTypes from 'prop-types';

export default function ProgressAndIconsGridView({items, onClick}) {
  if (!Array.isArray(items)) return null;
  return (
    <AppAnimate>
      <AppGridContainer>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <IconAndProgressCard
              text={item.name}
              value={item.name}
              bgColor='grey.200'
              // iconElement={item.icon}
              icon={item.icon}
              progress={item.progress}
              isIconFullWidth={item.isFullWidth}
              onClick={() => onClick(item.id)}
            />
          </Grid>
        ))}
      </AppGridContainer>
    </AppAnimate>
  );
}

ProgressAndIconsGridView.defaultProps = {
  onClick: () => {},
};

ProgressAndIconsGridView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      icon: PropTypes.element,
    }),
  ),
  onClick: PropTypes.func,
};
