import React from "react";
import { Grid } from "@mui/material";
import AppCard from "../../components/AppCard";
import AppGridContainer from "../../components/AppGridContainer";
import SaleStaticChart from "./SaleStaticsChart";

const SaleStatics = ({ kpis, shouldHaveBorder }) => {
  return (
    <AppCard
      sxStyle={{
        border: shouldHaveBorder && "1px solid",
        borderColor: "grey.200",
      }}
    >
      <AppGridContainer>
        <Grid item xs={12} md={12}>
          <SaleStaticChart kpis={kpis} />
        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default SaleStatics;
