function statsReturn(arr) {
  const allLinks = arr.map((i) => i.href);
  const brokenLinks = arr.filter((i) => i.statusCode > 400 && i.statusCode < 500);
  const notRepeatedLinks = new Set(allLinks);
  return {
    allLinks: allLinks.length,
    brokenLinks: brokenLinks.length,
    notRepeatedLinks: notRepeatedLinks.size,
  };
}
module.exports = statsReturn;
