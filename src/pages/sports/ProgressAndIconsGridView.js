import { Grid } from "@mui/material";
import AppAnimate from "../../components/AppAnimate";
import AppGridContainer from "../../components/AppGridContainer";
import IconAndProgressCard from "./IconAndProgressCard";

export default function ProgressAndIconsGridView({ items, onClick }) {
  return (
    <AppAnimate>
      <AppGridContainer>
        {items?.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <IconAndProgressCard
              text={item.name}
              value={item.name}
              bgColor="grey.200"
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
