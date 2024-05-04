import { GET_JOB_LISTING_URL } from "src/constants";
export const getJobListingData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  return fetch(GET_JOB_LISTING_URL, requestOptions).then((response) =>
    response.json()
  );
};
