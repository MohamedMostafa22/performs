import {Autocomplete, TextField} from '@mui/material';
import {useQuery} from 'react-query';
import apiRequests from '../../apiRequests';

export default function SportsAutoComplete({selectedSportId, onChange}) {
  const {data: sports, isLoading} = useQuery('sports', () =>
    apiRequests.fetchSports(),
  );
  const selectedSport =
    selectedSportId && sports?.find((sport) => sport.id == selectedSportId);

  return (
    <Autocomplete
      loading={isLoading}
      options={sports || []}
      renderInput={(params) => (
        <TextField {...params} label='Sport' fullWidth />
      )}
      onChange={(e, newInputValue) => {
        onChange && onChange(newInputValue);
      }}
      value={selectedSport || null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
    />
  );
}
