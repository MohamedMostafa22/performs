export default function getAnalyticsColor(analyticsColorsObj, progressVal) {
  if (progressVal >= 90) return analyticsColorsObj.done;
  if (progressVal >= 50) return analyticsColorsObj.inProgress;
  return analyticsColorsObj.notStarted;
}
