function getTime() {
  let today = new Date();

  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time);
}

export default getTime;
