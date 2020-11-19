import { REALM, REALM_ID, REALM_RANGE } from "../constants";
import Emotion from "./emotion";
import { constEntries, constValues, validate } from "./utils";

class Realm {
  constructor(name) {
    validate(REALM, name, "REALM");

    this.id = null;
    this.name = name;
    this.control = null;
    this.range = [];

    this.init();
  }

  /**
   * Sets up range and id based on the realm
   */
  init() {
    this.id = REALM_ID[this.name];
    this.range = REALM_RANGE[this.name];
  }

  /**
   * Check cards in realm range and its fortress fragment, outputting the winning force, or null in case of a tie
   * @param {*} board
   * @returns {FORCE|null}
   */
  determineControl(cards, fortresses) {
    let results = {
      id: this.id,
      control: null,
    };

    results = this.range.reduce((result, index) => {
      const card = cards[index];
      if (card instanceof Emotion) {
        if (result[card.force] === undefined) {
          result[card.force] = 0;
        }
        result[card.force] += card.intensity;
      }

      return result;
    }, results);

    const fragment = fortresses?.[this.id];

    if (fragment) {
      if (results[fragment.force] === undefined) {
        results[fragment.force] = null;
      }
      results[fragment.force] += fragment.intensity;
    }

    // Calculate winner
    const max = Math.max(...constValues(results));
    const winner = constEntries(results).reduce((acc, [key, value]) => {
      if (value === max) {
        acc.push(key);
      }

      return acc;
    }, []);

    results.control = winner.length === 1 ? winner[0] : null;

    return results;
  }
}

export default Realm;
