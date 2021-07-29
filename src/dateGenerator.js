export const dateGenerator = () => {
  const randomMillisecond = () => {
    return Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365);
  };

  const getDate = () => {
    var date = new Date(randomMillisecond());

    return date.getMonth() + 1 + "/" + date.getDate();
  };
  return getDate();
};
