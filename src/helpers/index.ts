export const pluralize = (
  singular: string,
  plural: string,
  quantity: number
): string => (quantity === 1 ? singular : plural);
