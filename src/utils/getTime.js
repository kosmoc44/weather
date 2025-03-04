export function getTime(param) {
  return new Date().toLocaleString("ru-Ru", {
    timeZone: param.timezone,
    hourCycle: "h24",
    timeStyle: "short"
  });
}
