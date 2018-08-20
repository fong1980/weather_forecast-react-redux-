export const groupBy5Days = data => {
  const days = Object.values(
    data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0, 10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);
      return list;
    }, {})
  );
  const fiveDays = days.length > 5 ? days.slice(0, 5) : days;
  return fiveDays;
  //   return "jo man";
};

export const KelvinToCelsius = kelvin => {
  const a = kelvin - 273.15;
  Math.round(a);
  // const a = (Kelvin - 32) / 1.8;
  return Math.round(a);
};
