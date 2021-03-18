export async function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({});
    }, 3000);
  });
}
