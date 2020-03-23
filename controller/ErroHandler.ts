export function handleRequestError(e: any) {
  console.error(e);
}

export function unexpectedResponseError(response: Response): Error {
  return new Error(
    `Unexpected response: status=${response.status} url=${response.url}`
  );
}
