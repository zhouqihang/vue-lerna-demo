export default data => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
  if (false) {
    reject();
  }
});
