export const mergeStyles = (
  ...styles: (string | boolean | undefined)[]
): string =>
  styles.reduce((acc: string, style) => (style ? `${acc} ${style}` : acc), "")
