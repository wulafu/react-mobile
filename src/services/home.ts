import request from ".";

export function fetchData(data: any) {
  return request({
    method: "GET",
    url: "...",
    data,
  });
}

export function fetchCommit(params: any) {
  return request({
    method: "POST",
    url: "...",
    params,
  });
}
