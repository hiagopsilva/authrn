interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'odcoscmasocmsaopcmsopmasipcoskcpaockosap',
        user: {
          name: 'Hiago',
          email: 'hiago@gmail.com',
        },
      });
    }, 2000);
  });
}