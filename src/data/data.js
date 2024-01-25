import { Images } from "../assets/images";

export const DATA = {
  title: "Distribution of the global population 2023, by continent",
  total: 8118836000,
  yAxis: "Continents",
  xAxis: "world population share",
  items: [
    {
      id: 1,
      name: "Asia",
      text: "Largest continent among all",
      percentValue: 59.1,
      labelImg: Images.Asia,
    },
    {
      id: 2,
      name: "Europe",
      text: "6th Largest continent",
      percentValue: 9.2,
      labelImg: Images.Europe,
    },
    {
      id: 3,
      name: "Africa",
      text: "2nd Largest continent",
      percentValue: 18.2,
      labelImg: Images.Africa,
    },
    {
      id: 4,
      name: "North America",
      text: "3rd Largest continent",
      percentValue: 4.7,
      labelImg: Images.NorthAmerica,
    },
    {
      id: 5,
      name: "Latin America",
      text: "4th Largest continent",
      percentValue: 8.3,
      labelImg: Images.SouthAmerica,
    },
    {
      id: 6,
      name: "Oceania",
      text: "Tiniest continent among all",
      percentValue: 0.6,
      labelImg: Images.Australia,
    },
    {
      id: 7,
      name: "Antarctica",
      text: "5th largest continent",
      percentValue: 100,
      labelImg: Images.Antarctica,
    },
  ],
};
