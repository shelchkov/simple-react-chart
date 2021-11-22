import { ChartSize } from "./interfaces"

export const lineChartSize: ChartSize = {
  height: 200,
  width: 400
}

export const mergeStyles = (
  ...styles: (string | boolean | undefined)[]
): string =>
  styles.reduce((acc: string, style) => (style ? `${acc} ${style}` : acc), "")
