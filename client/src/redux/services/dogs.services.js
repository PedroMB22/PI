import { httpRequest } from '../../axios/http'

export const dogService = {
  get,
};

async function get() {
  let url = `/dogs`;
console.log();
  return await httpRequest.get(url).then((response) => {
    return response;
  });
}