export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.841081",
    bl_lng: "24.110043",
    tr_lat: "41.582989",
    tr_lng: "43.816771",
    limit: "156",
  },
  headers: {
    "X-RapidAPI-Key": "289fd05adcmshbae5032739451aap197cd5jsn4d1b4e980bd1",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  headers: {
    "X-RapidAPI-Key": "289fd05adcmshbae5032739451aap197cd5jsn4d1b4e980bd1",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
