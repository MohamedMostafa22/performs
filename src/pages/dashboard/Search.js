import {AppGridContainer, AppLoader} from '@crema';
import {Backdrop, Button, Grid} from '@mui/material';
import PlayerDetails from './PlayerDetails';
import {Route, Switch, useHistory, useParams} from 'react-router-dom';
import PlayersAutoComplete from './PlayersAutoComplete';
import toNumber from 'lodash/toNumber';
import {useQuery} from 'react-query';
import apiRequests from 'apiRequests';
import isNil from 'lodash/isNil';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {useState} from 'react';
import ReactToPdf from 'react-to-pdf';
import {useCallback} from 'react';

export default function Search() {
  const history = useHistory();
  const params = useParams();
  const playerId = params && params['0'] !== '' && toNumber(params['0']);
  const [elem, setElem] = useState();
  const [pdfOptions, setPdfOptions] = useState({});
  const [isExporting, setIsExporting] = useState(false);
  const ref = useCallback(
    (node) => {
      setElem(node);
      const w = node?.offsetWidth;
      const h = node?.offsetHeight;
      const orientation = w > h ? 'landscape' : 'portrait';
      const format = orientation === 'landscape' ? [w * 0.6, h] : [h, w * 0.6];
      const unit = 'px';

      setPdfOptions({
        orientation,
        format,
        unit,
      });
    },
    [isExporting],
  );

  const {data: playerDetails, isLoading} = useQuery(
    ['playerDetails', {playerId}],
    () => apiRequests.fetchPlayerDetails({player_id: playerId}),
    {
      enabled: playerId !== false,
    },
  );

  const playerData =
    playerDetails?.player?.data && playerDetails?.player?.data[0];

  if (isLoading) return <AppLoader />;

  return (
    <>
      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={isExporting}
        onClick={() => setIsExporting(false)}
      >
        <AppLoader />
      </Backdrop>
      <ReactToPdf
        targetRef={elem}
        filename={playerData?.name}
        options={pdfOptions}
        onComplete={() => setIsExporting(false)}
      >
        {({toPdf}) => (
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
                    if (newValue) history.push(`/search/${newValue.id}`);
                    else history.push('/search/');
                  }}
                />
              </Grid>
              <Grid sm={0} md={6} />
              {playerId !== false && (
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    fullWidth
                    size='large'
                    variant='outlined'
                    sx={{
                      height: '100%',
                    }}
                    endIcon={<FileDownloadIcon />}
                    disabled={!playerDetails}
                    onClick={(e) => {
                      setIsExporting(true);
                      toPdf(e);
                    }}
                  >
                    Export
                  </Button>
                </Grid>
              )}
            </AppGridContainer>
            <Switch>
              <Route path='/search/:playerId' exact>
                <PlayerDetails
                  ref={ref}
                  // onDimensionsChange={(w, h) => {
                  //   console.log(`width: ${w}`);
                  //   console.log(`height: ${h}`);
                  //   const orientation = w > h ? 'landscape' : 'portrait';
                  //   const format =
                  //     orientation === 'landscape'
                  //       ? [w * 0.6, h * 0.6]
                  //       : [h * 0.6, w * 0.6];
                  //   const unit = 'px';
                  //   setOptions({orientation, format, unit});
                  // }}
                  isExporting={isExporting}
                />
              </Route>
            </Switch>
          </>
        )}
      </ReactToPdf>
    </>
  );
}
