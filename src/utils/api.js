import axios from "axios";

const BASE_URL = "https://developer.nps.gov/api/v1";

const makeNationalParksRequest = (config) =>
  axios({
    headers: { "X-Api-Key": process.env.REACT_APP_API_KEY, ...config.headers },
    ...config,
  });

export const getNationalParks = () => {
  return makeNationalParksRequest({
    method: "GET",
    url: `${BASE_URL}/parks?limit=600`,
  }).then((response) => {
    const filteredResults = response.data.data.filter((park) => {
      return park.designation === "National Park";
    });

    return filteredResults;
  });
};
