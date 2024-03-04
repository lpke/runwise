export function randomInt(min: number, max: number): number {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

export function shortenInt(integer: number, digits: number): number {
  const int = Math.floor(integer);
  const intLength = int.toString().length;
  let digs = Math.floor(digits);
  if (digs > intLength) digs = intLength;

  const factor = 10 ** (intLength - digs);
  return Math.round(int / factor);
}

export function randomHeading(full?: boolean): number {
  return randomInt(1, full ? 360 : 36);
}

export function headingReciprocal(heading: number, full?: boolean): number {
  if (full) return (heading + 180) % 360;
  return (heading + 18) % 36;
}
