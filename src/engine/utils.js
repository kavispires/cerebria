import { BLISS_EMOTION, FORCE, GLOOM_EMOTION } from "../constants";

export const validate = (group, item, name = "required group") => {
  if (Object.values(group).some((el) => el === item)) {
    return true;
  }

  // console.log("typeof", item, typeof item);

  throw Error(`The item ${item} is not part of ${name}`);
};

/**
 * Mimics the functionality of Object.values but for objects where keys are symbols
 * @param {object} symbolObject
 */
export const constValues = (symbolObject) =>
  Object.getOwnPropertySymbols(symbolObject).map((key) => symbolObject[key]);

/**
 * Mimics the functionality of Object.entries but for objects where keys are symbols
 * @param {object} symbolObject object with symbols as keys
 */
export const constEntries = (symbolObject) =>
  Object.getOwnPropertySymbols(symbolObject).map((key) => [
    key,
    symbolObject[key],
  ]);

/**
 * Determines if given emotion is part of the Bliss or Gloom force
 * @param {EMOTION} emotion
 */
export const getForce = (() => {
  const cache = {};
  return (emotion) => {
    if (emotion in cache) {
      return cache[emotion];
    }

    if (Object.values(BLISS_EMOTION).includes(emotion)) {
      cache[emotion] = FORCE.BLISS;
      return cache[emotion];
    }

    if (Object.values(GLOOM_EMOTION).includes(emotion)) {
      cache[emotion] = FORCE.GLOOM;
      return cache[emotion];
    }

    return null;
  };
})();
