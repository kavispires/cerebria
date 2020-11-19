import { FRONTIER, FRONTIER_ID, FRONTIER_RANGE } from "../constants";
import Emotion from "./emotion";
import { constEntries, constValues, validate } from "./utils";

class Frontier {
  constructor(name) {
    validate(FRONTIER, name, "FRONTIER");

    this.id = null;
    this.name = name;
    this.control = null;
    this.range = [];

    this.init();
  }

  /**
   * Sets up range and id based on the frontier
   */
  init() {
    this.id = FRONTIER_ID[this.name];
    this.range = FRONTIER_RANGE[this.name];
  }

  /**
   * Check cards in frontier range, outputting the winning force, or null in case of a tie
   * @param {Emotion[]} cards list of Emotion instances or undefined
   * @returns {FORCE|null}
   */
  determineControl(cards) {
    return this.range.reduce(
      (result, index) => {
        const card = cards[index];
        if (card instanceof Emotion) {
          if (result[card.force] === undefined) {
            result[card.force] = 0;
          }
          result[card.force] += card.intensity;
        }

        const max = Math.max(...constValues(result));
        const winner = constEntries(result).reduce((acc, [key, value]) => {
          if (value === max) {
            acc.push(key);
          }

          return acc;
        }, []);

        result.control = winner.length === 1 ? winner[0] : null;

        return result;
      },
      {
        id: this.id,
        control: null,
      }
    );
  }
}

export default Frontier;
