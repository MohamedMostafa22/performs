import {AppGridContainer} from '@crema';
import {Autocomplete, Grid, TextField} from '@mui/material';
import {coaches, partitions, sports} from 'appData';
import CoachDetails from './CoachDetails';
import includes from 'lodash/includes';
import isNumber from 'lodash/isNumber';
import SportsDashboard from './SportsDashboard';
import TeamsDashboard from './TeamsDashboard';
import {useHistory, useParams} from 'react-router-dom';
import getLayerItemIdsFromString from 'utils/getLayerItemIdsFromString';

export default function CoachesDashboard() {
  const history = useHistory();
  const params = useParams();
  const layers = getLayerItemIdsFromString(params['0'], false);

  const selectedSport =
    Array.isArray(layers) && layers.find((layer) => layer.type === 'sports');
  const selectedSportId =
    selectedSport && selectedSport.id && Number(selectedSport.id);

  const selectedPartition =
    Array.isArray(layers) &&
    layers.find((layer) => layer.type === 'partitions');
  const selectedPartitionId =
    selectedPartition && selectedPartition.id && Number(selectedPartition.id);

  const selectedCoach =
    Array.isArray(layers) && layers.find((layer) => layer.type === 'coaches');
  const selectedCoachId =
    selectedCoach && selectedCoach.id && Number(selectedCoach.id);

  const selectedSportData =
    isNumber(selectedSportId) &&
    sports.find((sport) => sport.id === selectedSportId);

  const selectedPartitionData =
    isNumber(selectedPartitionId) &&
    partitions.find((partition) => partition.id === selectedPartitionId);

  const selectedCoachData =
    isNumber(selectedCoachId) &&
    coaches.find((coach) => coach.id === selectedCoachId);

  return (
    <>
      <AppGridContainer
        sx={{
          mb: 8,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            disablePortal
            options={sports.map((sport) => ({
              label: sport.name,
              value: sport.id,
            }))}
            renderInput={(params) => (
              <TextField {...params} label='Sport' fullWidth />
            )}
            onChange={(e, newInputValue) => {
              history.push(
                `/coaches-dashboard/${
                  isNumber(newInputValue && newInputValue.value)
                    ? `sports/${newInputValue.value}/partitions/1`
                    : ''
                }`,
              );
            }}
            value={selectedSportData ? selectedSportData.name : ''}
          />
        </Grid>
        {selectedSportData && (
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              disablePortal
              options={coaches
                .filter((coach) =>
                  includes(selectedPartitionData.children.ids, coach.id),
                )
                .map((team) => ({
                  label: team.name,
                  value: team.id,
                }))}
              renderInput={(params) => <TextField {...params} label='Coach' />}
              onChange={(e, newInputValue) => {
                history.push(
                  `/coaches-dashboard/sports/${selectedSportId}/partitions/1/${
                    isNumber(newInputValue && newInputValue.value)
                      ? `coaches/${newInputValue.value}`
                      : ''
                  }`,
                );
              }}
              value={selectedCoachData ? selectedCoachData.name : ''}
            />
          </Grid>
        )}
      </AppGridContainer>
      {isNumber(selectedCoachId) && <CoachDetails coachId={selectedCoachId} />}
      {!selectedSport && <SportsDashboard />}
      {selectedSport && !selectedCoach && (
        <TeamsDashboard sportId={selectedSportId} isCoach />
      )}
    </>
  );
}
