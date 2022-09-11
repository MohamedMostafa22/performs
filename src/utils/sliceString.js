export default function sliceString(string, length) {
  if (typeof string !== 'string' && string.trim() === '') return '';

  if (string.trim().length >= length) return `${string.slice(0, length)}.`;

  return string;
}
