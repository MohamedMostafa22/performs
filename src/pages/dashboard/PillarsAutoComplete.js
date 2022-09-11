import {Autocomplete, TextField} from '@mui/material';
import {useQuery} from 'react-query';
import apiRequests from '../../apiRequests';

export default function PillarsAutoComplete({
  selectedSportId,
  selectedPillarId,
  onChange,
}) {
  const {data: pillars, isLoading} = useQuery(
    ['pillars', {sportId: selectedSportId}],
    () =>
      apiRequests.fetchPillars({
        sport_id: selectedSportId,
      }),
  );

  const selectedPillar =
    selectedPillarId &&
    pillars?.find((pillar) => pillar.id == selectedPillarId);

  return (
    <Autocomplete
      loading={isLoading}
      options={pillars || []}
      renderInput={(params) => (
        <TextField {...params} label='Pillar' fullWidth />
      )}
      onChange={(e, newInputValue) => {
        onChange && onChange(newInputValue);
      }}
      value={selectedPillar || null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
    />
  );
}
