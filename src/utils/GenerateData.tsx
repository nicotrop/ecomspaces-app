export const generateData = (): {
  date: string;
  shipments: number;
  monthDate: string;
}[] => {
  const data: { date: string; monthDate: string; shipments: number }[] = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let i = 0; i < 12; i++) {
    const year = 2022;
    for (let j = 1; j <= 4; j++) {
      const day = (j - 1) * 7 + 1; // data points every 7 days
      const date = `${monthNames[i]} ${day}, ${year}`;
      const monthDate = `${monthNames[i]}`;
      const shipments = Math.floor(Math.random() * 500) + 100;
      data.push({ date, shipments, monthDate });
    }
  }
  return data;
};
