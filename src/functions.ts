export function limitWords(str: string, maxWords: number) {
  const words = str.split(" ");
  if (words.length > maxWords) {
    const sliced = words.slice(0, maxWords).join(" ");
    const lastSpace = sliced.lastIndexOf(" ");

    const truncated = sliced.substring(0, lastSpace > 0 ? lastSpace : maxWords);
    return truncated + "...";
  }
  return str;
}
