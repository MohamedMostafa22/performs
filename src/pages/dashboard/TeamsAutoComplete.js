import {Autocomplete, TextField} from '@mui/material';
import {useQuery} from 'react-query';
import apiRequests from '../../apiRequests';

export default function TeamsAutoComplete({
  selectedPillarId,
  selectedTeamId,
  onChange,
}) {
  const {data: teams, isLoading} = useQuery(
    ['teams', {pillarId: selectedPillarId}],
    () =>
      apiRequests.fetchTeams({
        pillar_id: selectedPillarId,
      }),
  );
  const selectedTeam =
    selectedTeamId && teams?.find((team) => team.id == selectedTeamId);

  return (
    <Autocomplete
      loading={isLoading}
      options={teams || []}
      renderInput={(params) => <TextField {...params} label='Team' fullWidth />}
      onChange={(e, newInputValue) => {
        onChange && onChange(newInputValue);
      }}
      value={selectedTeam || null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
    />
  );
}
