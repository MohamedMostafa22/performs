import { Backdrop, Button, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import PlayersAutoComplete from "./PlayersAutoComplete";
import { useQuery } from "react-query";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useState } from "react";
import ReactToPdf from "react-to-pdf";
import { useCallback } from "react";
import AppGridContainer from "../../components/AppGridContainer";
import AppLoader from "../../components/AppLoader";
import apiRequests from "../../apiRequests";
import PlayerDetails from "./PlayerDetails";

export default function Search() {
  const navigate = useNavigate();
  const { playerId } = useParams();

  const [elem, setElem] = useState();
  const [pdfOptions, setPdfOptions] = useState({});
  const [isExporting, setIsExporting] = useState(false);
  const ref = useCallback(
    (node) => {
      setElem(node);
      const w = node?.offsetWidth;
      const h = node?.offsetHeight;
      const orientation = w > h ? "landscape" : "portrait";
      const format =
        orientation === "landscape" ? [w * 2, h * 2] : [h * 2, w * 2];
      const unit = "px";
      const hotfixes = ["px_scaling"];

      setPdfOptions({
        orientation,
        format,
        unit,
        hotfixes,
      });
    },
    [isExporting]
  );

  const { data: playerDetails, isLoading } = useQuery(
    ["playerDetails", { playerId }],
    () => apiRequests.fetchPlayerDetails({ player_id: playerId }),
    {
      enabled: !!playerId,
    }
  );

  const playerData =
    playerDetails?.player?.data && playerDetails?.player?.data[0];

  if (isLoading) return <AppLoader />;

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isExporting}
      >
        <AppLoader />
      </Backdrop>
      <ReactToPdf
        targetRef={elem}
        filename={playerData?.name}
        options={pdfOptions}
        onComplete={() => setIsExporting(false)}
        scale={2}
      >
        {({ toPdf }) => (
          <>
            <AppGridContainer
              sx={{
                mb: 8,
              }}
            >
              <Grid item xs={12} sm={6} md={3}>
                <PlayersAutoComplete
                  selectedPlayerId={playerId || undefined}
                  onChange={(newValue) => {
                    if (newValue) navigate(`/search/${newValue.id}`);
                    else navigate("/search/");
                  }}
                />
              </Grid>
              <Grid sm={0} md={6} />
              {playerId !== false && (
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    fullWidth
                    size="large"
                    variant="outlined"
                    sx={{
                      height: "100%",
                    }}
                    endIcon={<FileDownloadIcon />}
                    disabled={!playerDetails}
                    onClick={(e) => {
                      setIsExporting(true);
                      setTimeout(() => {
                        toPdf(e);
                      }, 1000);
                    }}
                  >
                    Export
                  </Button>
                </Grid>
              )}
            </AppGridContainer>
            {playerId && (
              <PlayerDetails
                ref={ref}
                playerId={playerId}
                isExporting={isExporting}
              />
            )}
          </>
        )}
      </ReactToPdf>
    </>
  );
}
