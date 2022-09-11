import {Autocomplete, TextField} from '@mui/material';
import {useQuery} from 'react-query';
import apiRequests from '../../apiRequests';

export default function PlayersAutoComplete({
  selectedTeamId,
  selectedPlayerId,
  onChange,
  ...props
}) {
  const {data: players, isLoading} = useQuery(
    [
      'players',
      {
        teamId: selectedTeamId,
        playerId: selectedPlayerId,
      },
    ],
    () =>
      apiRequests.fetchPlayers({
        team_id: selectedTeamId,
        id: selectedPlayerId,
      }),
  );

  const selectedPlayer =
    selectedPlayerId &&
    players?.find((player) => player.id == selectedPlayerId);

  return (
    <Autocomplete
      {...props}
      loading={isLoading}
      options={players || []}
      renderInput={(params) => (
        <TextField {...params} label='Player' fullWidth />
      )}
      onChange={(e, newInputValue) => {
        onChange && onChange(newInputValue);
      }}
      value={selectedPlayer || null}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        );
      }}
    />
  );
}
