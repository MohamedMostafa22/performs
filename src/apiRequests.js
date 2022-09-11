import axios from './axios';
import queryString from 'query-string';

async function fetchClubs(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/clubs/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchSports(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/sports/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPillars(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/pillars/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchTeams(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/teams/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPlayers(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/players/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPlayerKpis(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/players/kpis/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPlayerKpiMetrics(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/players/kpis/metrics/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchSportsTpm(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/dashboard/tpm/sports/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPillarsTpm(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/dashboard/tpm/pillars/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchTeamsTpm(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/dashboard/tpm/teams/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPlayersTpm(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/dashboard/tpm/players/${filters}`;
  const res = await axios.get(url);
  return res?.data?.data;
}

async function fetchPlayerDetails(filter) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/dashboard/detailed/players/${filters}`;
  const res = await axios.get(url);
  return res?.data;
}

async function updateMetric(filter, data) {
  const filters =
    (queryString.stringify(filter) && `?${queryString.stringify(filter)}`) ||
    '';
  const url = `core/players/kpis/metrics/${filters}`;
  const res = await axios.put(url, data);
  return res.data;
}

const apiRequests = {
  fetchClubs,
  fetchSports,
  fetchPillars,
  fetchTeams,
  fetchPlayers,
  fetchPlayerKpis,
  fetchPlayerKpiMetrics,
  updateMetric,
  fetchSportsTpm,
  fetchPillarsTpm,
  fetchTeamsTpm,
  fetchPlayersTpm,
  fetchPlayerDetails,
};

export default apiRequests;
