// '0/teams/1/players/0/kpis/1/metrics/0'

export default function getLayerItemIdsFromString(
  idsString,
  skipFirst = false,
) {
  const splitParams = idsString && idsString.split('/');
  if (!Array.isArray(splitParams)) return {};
  let formattedParams = [];
  splitParams.forEach((param, i) => {
    if (skipFirst) {
      if (i === 0)
        formattedParams = formattedParams.concat([
          {id: Number(param), type: 'sports'},
        ]);
      else if (i % 2 === 0)
        formattedParams = formattedParams.concat([
          {id: Number(param), type: splitParams[i - 1]},
        ]);
    } else {
      if (i % 2 !== 0)
        formattedParams = formattedParams.concat([
          {id: Number(param), type: splitParams[i - 1]},
        ]);
    }
  });
  return formattedParams;
}
