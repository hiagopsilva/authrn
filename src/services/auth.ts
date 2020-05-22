export function signIn() {
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