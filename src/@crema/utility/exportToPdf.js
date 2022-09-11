// import JsPDF from 'jspdf';
// import 'jspdf-autotable';

export default function exportToPdf(playerDetails) {
  // const unit = 'pt';
  // const size = 'A4'; // Use A1, A2, A3 or A4
  // const orientation = 'portrait'; // portrait or landscape
  // const marginLeft = 40;
  // const doc = new JsPDF(orientation, unit, size);
  // doc.setFontSize(15);
  // const playerData =
  //   playerDetails?.player?.data && playerDetails?.player?.data[0];
  // const playerMetrics = playerDetails?.metrics?.data;
  // const formattedMetrics = playerMetrics?.map((metric) => ({
  //   name: metric.metric__name,
  //   coverage: metric.coverage,
  //   level: metric.level,
  // }));
  // const playerKpis = playerDetails?.kpis?.data;
  // const playerActions = playerDetails?.actions?.data;
  // const playerRecommendations = playerDetails?.recommendations?.data;
  // const playerStrengths = formattedMetrics?.filter(
  //   (metric) => metric.level === 's',
  // );
  // const playerWeaknesses = formattedMetrics?.filter(
  //   (metric) => metric.level === 'w',
  // );
  // const playerModerates = formattedMetrics?.filter(
  //   (metric) => metric.level === 'i',
  // );
  // const title = `${playerData?.name}'s Report`;
  // doc.text(`Player Name: ${playerData?.name}`, 180, 25);
  // doc.text('Player Strengths', marginLeft, 60);
  // const strenthsTableContent = {
  //   startY: 70,
  //   head: [['name', 'score']],
  //   body: playerStrengths.map((strength) => [strength.name, strength.coverage]),
  // };
  // doc.autoTable(strenthsTableContent);
  // doc.text(
  //   'Player Moderate Metrics',
  //   marginLeft,
  //   doc.lastAutoTable.finalY + 40,
  // );
  // const moderateTableContent = {
  //   startY: doc.lastAutoTable.finalY + 50,
  //   head: [['name', 'score']],
  //   body: playerModerates.map((moderate) => [moderate.name, moderate.coverage]),
  // };
  // doc.autoTable(moderateTableContent);
  // doc.text('Player Weaknesses', marginLeft, doc.lastAutoTable.finalY + 40);
  // const weaknessesTableContent = {
  //   startY: doc.lastAutoTable.finalY + 50,
  //   head: [['name', 'score']],
  //   body: playerWeaknesses.map((weakness) => [
  //     weakness.name,
  //     weakness.coverage,
  //   ]),
  // };
  // doc.autoTable(weaknessesTableContent);
  // doc.text('Player KPIs', marginLeft, doc.lastAutoTable.finalY + 40);
  // const kpisTableContent = {
  //   startY: doc.lastAutoTable.finalY + 50,
  //   head: [['name', 'score']],
  //   body: playerKpis.map((kpi) => [kpi.kpi__name, kpi.coverage]),
  // };
  // doc.autoTable(kpisTableContent);
  // doc.text('Actions', marginLeft, doc.lastAutoTable.finalY + 20);
  // const actionsTableContent = {
  //   startY: doc.lastAutoTable.finalY + 50,
  //   head: [['title', 'description']],
  //   body: playerActions.map((action) => [action.name, action.description]),
  // };
  // doc.autoTable(actionsTableContent);
  // doc.text('Recommendations', marginLeft, doc.lastAutoTable.finalY + 20);
  // const recommendationsTableContent = {
  //   startY: doc.lastAutoTable.finalY + 50,
  //   head: [['title', 'description']],
  //   body: playerRecommendations.map((recommendation) => [
  //     recommendation.name,
  //     recommendation.description,
  //   ]),
  // };
  // doc.autoTable(recommendationsTableContent);
  // doc.save(`${title}.pdf`);
  //   const content = {
  //     startY: 50,
  //     head: [header],
  //     body: data,
  //   };
  //   doc.text('', marginLeft, 40);
  //   doc.text(title, marginLeft, 40);
  //   doc.autoTable(content);
  //   doc.save(`${setup.title}.pdf`);
}
