import { httpRequest } from '../../axios/http'

export const dogService = {
  get, post, getDogById
};

async function get() {
  let url = `/dogs`;
console.log();
  return await httpRequest.get(url).then((response) => {
    return response;
  });
}
async function post(dog) {
  let url = `/dogs`;
console.log();
  return await httpRequest.post(url,dog).then((response) => {
    return response;
  });
}
async function getDogById(id) {
  let url = `/dogs/${id}`;
console.log();
  return await httpRequest.get(url).then((response) => {
    return response;
  }
  );
}
