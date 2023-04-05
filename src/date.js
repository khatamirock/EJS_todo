module.exports = getDate;

function getDate() {
  var date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = date.toLocaleDateString("en-US", options);
  return day;
}
