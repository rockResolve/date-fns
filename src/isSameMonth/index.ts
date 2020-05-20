import toDate from '../toDate/index.js'

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @returns The dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
export default function isSameMonth(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): boolean {
  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)
  return (
    dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
  )
}