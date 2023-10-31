export const alterColor = (color: string, amount: number) => {
  const replaced = color.replace("#", "");
  const split = replaced.split(/(..)/g).filter((s) => s);
  split.forEach((item, index) => {
    const string = Math.min(
      255,
      Math.round(parseInt(item, 16) * amount)
    ).toString(16);
    if (string.length === 1 && string === "0") {
      split[index] = string + "0";
    } else {
      split[index] = string;
    }
  });
  return `#${split.join("")}`;
};
