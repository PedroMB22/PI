import { httpRequest } from '../../axios/http'

export const temperamentService = {
  getTemperaments,
};

async function getTemperaments() {
  let url = `/temperaments`;

  return await httpRequest.get(url).then((response) => {
    return response;
  });
}
