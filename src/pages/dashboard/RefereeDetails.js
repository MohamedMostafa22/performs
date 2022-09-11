// import {AppCard, AppGridContainer} from '@crema';
// import {Grid, useTheme} from '@mui/material';
// import SaleStatics from 'pages/dashboards/ECommerce/SaleStatics';
// import SummaryCard from './SummaryCard';
// import {GiMuscleUp} from 'react-icons/gi';
// import {GiBrokenShield} from 'react-icons/gi';
// import {MdPendingActions} from 'react-icons/md';
// import {BiLike} from 'react-icons/bi';
// import {lightBlue, purple, red} from '@mui/material/colors';
// import VideoCall from 'pages/apps/Wall/VideoCall';
// import MetricsTable from './MetricsTable';
// import ActionsList from './ActionsList';
// import PropTypes from 'prop-types';
// import {referees} from 'appData';
// import includes from 'lodash/includes';
// import isNil from 'lodash/isNil';

// const player = {
//   strengths: [{}, {}, {}, {}],
//   weaknesses: [{}, {}, {}],
//   recommendations: [{}, {}, {}, {}, {}],
//   actions: [
//     {
//       id: 0,
//       name: 'Send the Billing Agreement',
//       description:
//         'checking UiKings AppThemeProvider and give customer support',
//     },
//     {
//       id: 1,
//       name: 'Send the Billing Agreement',
//       description:
//         'checking UiKings AppThemeProvider and give customer support',
//     },
//     {
//       id: 2,
//       name: 'Send the Billing Agreement',
//       description:
//         'checking UiKings AppThemeProvider and give customer support',
//     },
//     {
//       id: 3,
//       name: 'Send the Billing Agreement',
//       description:
//         'checking UiKings AppThemeProvider and give customer support',
//     },
//     {
//       id: 4,
//       name: 'Send the Billing Agreement',
//       description:
//         'checking UiKings AppThemeProvider and give customer support',
//     },
//   ],
// };

// const RefereeDetails = ({refereeId}) => {
//   const theme = useTheme();

//   const refereeData =
//     !isNil(refereeId) && referees.find((referee) => referee.id === refereeId);

//   const playerKpisIds = playerData.children.ids;
//   const playerKpis = kpis.filter((kpi) => includes(playerKpisIds, kpi.id));
//   const playerMetrics = playerKpis.reduce(
//     (prevValue, kpi) =>
//       prevValue.concat(
//         metrics.filter((metric) => includes(kpi.children.ids, metric.id)),
//       ),
//     [],
//   );

//   return (
//     <AppGridContainer>
//       <Grid item xs={12} sm={6} md={3}>
//         <SummaryCard
//           primaryText={player && player.strengths && player.strengths.length}
//           secondaryText='Strengths'
//           bgColor='success.light'
//           icon={<GiMuscleUp size='2em' color={theme.palette.success.main} />}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <SummaryCard
//           primaryText={player && player.weaknesses && player.weaknesses.length}
//           secondaryText='Weaknesses'
//           bgColor={red[50]}
//           icon={<GiBrokenShield size='2em' color={theme.palette.error.main} />}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <SummaryCard
//           primaryText={player && player.actions && player.actions.length}
//           secondaryText='Actions'
//           bgColor={lightBlue[50]}
//           icon={<MdPendingActions size='2em' color={lightBlue[500]} />}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <SummaryCard
//           primaryText={
//             player && player.recommendations && player.recommendations.length
//           }
//           secondaryText='Recommendations'
//           bgColor={purple[50]}
//           icon={<BiLike size='2em' color={purple[500]} />}
//         />
//       </Grid>
//       <Grid item xs={12} md={3}>
//         <VideoCall playerData={playerData} />
//       </Grid>
//       <Grid item xs={12} md={9}>
//         <SaleStatics kpis={playerKpis} />
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <AppCard
//           title='Strengths'
//           titleStyle={{
//             color: 'analytics.done',
//           }}
//           sxStyle={{
//             height: 290,
//           }}
//         >
//           <MetricsTable
//             metrics={playerMetrics.filter((metric) => metric.score >= 4)}
//           />
//         </AppCard>
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <AppCard
//           title='Weaknesses'
//           titleStyle={{
//             color: 'analytics.notStarted',
//           }}
//           sxStyle={{
//             height: 290,
//           }}
//         >
//           <MetricsTable
//             metrics={playerMetrics.filter((metric) => metric.score < 3)}
//           />
//         </AppCard>
//       </Grid>
//       <Grid item xs={12} md={4}>
//         <AppCard
//           title='Others'
//           titleStyle={{
//             color: 'analytics.inProgress',
//           }}
//           sxStyle={{
//             height: 290,
//           }}
//         >
//           <MetricsTable
//             metrics={playerMetrics.filter((metric) => metric.score == 3)}
//           />
//         </AppCard>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <AppCard
//           title='Recommendations'
//           sxStyle={{
//             height: 400,
//           }}
//         >
//           <ActionsList
//             items={playerData.actions.map((action) => ({
//               id: action.id,
//               primaryText: action.name,
//               secondaryText: action.description,
//             }))}
//           />
//         </AppCard>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <AppCard
//           title='Actions'
//           sxStyle={{
//             height: 400,
//           }}
//         >
//           <ActionsList
//             items={playerData.recommendations.map((action) => ({
//               id: action.id,
//               primaryText: action.name,
//               secondaryText: action.description,
//             }))}
//           />
//         </AppCard>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <AppCard
//           title='Achievements'
//           sxStyle={{
//             height: 400,
//           }}
//         >
//           <ActionsList
//             items={playerData.recommendations.map((action) => ({
//               id: action.id,
//               primaryText: action.name,
//               secondaryText: action.description,
//             }))}
//           />
//         </AppCard>
//       </Grid>
//     </AppGridContainer>
//   );
// };

// export default RefereeDetails;

// RefereeDetails.propTypes = {
//   refereeId: PropTypes.string.isRequired,
// };
