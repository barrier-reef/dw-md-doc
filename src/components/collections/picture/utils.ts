export function getSize(
  width: string,
  height: string
): { width: string | undefined; height: string | undefined } {
  let widthResult = undefined;
  let heightResult = undefined;
  if (width && (/^[-+]?\d+(\.\d+)?$/.test(width) || /^[-+]?\d+$/.test(width))) {
    widthResult = width;
  }
  if (
    height &&
    (/^[-+]?\d+(\.\d+)?$/.test(height) || /^[-+]?\d+$/.test(height))
  ) {
    heightResult = height;
  }
  return { width: widthResult, height: heightResult };
}
