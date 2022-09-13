import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import AppAnimate from "../../components/AppAnimate";
import AppGridContainer from "../../components/AppGridContainer";
import ImageAndProgressCard from "./ImageAndProgressCard";

export default function ImageAndProgressGridView({ items }) {
  if (!Array.isArray(items)) return null;

  return (
    <AppAnimate>
      <AppGridContainer>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <ImageAndProgressCard
              title={item.name}
              progress={item.progress}
              imgSrc={item.imgSrc}
            />
          </Grid>
        ))}
      </AppGridContainer>
    </AppAnimate>
  );
}

ImageAndProgressGridView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
