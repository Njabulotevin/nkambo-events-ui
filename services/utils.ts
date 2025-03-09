export const Status  = {
    isOk: (status : number) => status >= 200 && status < 300,
    isBadRequest: (status: number) => status === 400,
    isUnauthorized: (status: number) => status === 401,
    isNotFound: (status: number) => status === 404
  };