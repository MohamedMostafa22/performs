import { Box, Divider, List } from "@mui/material";
import PieGraph from "./PieGraph";
import PropTypes from "prop-types";
import Category from "./Category";
import AppCard from "../../components/AppCard";

export default function GraphCard({ graphData, progress, title }) {
  return (
    <AppCard sxStyle={{ height: 1 }} title={title}>
      <Box
        sx={{
          "& text": {
            fill: (theme) => theme.palette.text.primary,
          },
        }}
      >
        <PieGraph graphData={graphData} progress={progress} />
      </Box>
      <Divider />
      <Box
        sx={{
          pt: 3,
        }}
      >
        <List>
          {graphData.map((category) => {
            if (category.name !== "") {
              return <Category category={category} key={category.name} />;
            }
            return null;
          })}
        </List>
      </Box>
    </AppCard>
  );
}

GraphCard.defaultProps = {
  graphData: [],
  progress: 0,
  title: "",
};

GraphCard.propTypes = {
  graphData: PropTypes.array,
  progress: PropTypes.number,
  title: PropTypes.string,
};
