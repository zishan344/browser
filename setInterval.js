let i = 0;
const timeId = setInterval(() => {
  console.log(++i);

  if (i > 15) {
    clearInterval(timeId);
  }
}, 1000);
