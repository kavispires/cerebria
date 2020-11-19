import { FORCE, SPHERE, SPHERE_ORDER } from "../constants";
import Sphere from "./sphere";
import Fragment from "./fragment";
import { constEntries, constValues, validate } from "./utils";

class OriginBoard {
  constructor(topSphere) {
    this.center = [];
    this.spheres = {};
    this.winner = [];

    this.init(topSphere);
  }

  /**
   * Creates all 5 spheres and set their position based on given top sphere
   * @param {SPHERE} topSphere
   */
  init(topSphere) {
    validate(SPHERE, topSphere, "SPHERE");

    // Find position of the top sphere relative to the sphere fixed order
    const offset = SPHERE_ORDER.length - SPHERE_ORDER.indexOf(topSphere);

    for (let i = 0; i < SPHERE_ORDER.length; i++) {
      const sphere = SPHERE_ORDER[i];
      const position =
        i + offset < SPHERE_ORDER.length
          ? i + offset
          : i + offset - SPHERE_ORDER.length;
      this.spheres[sphere] = new Sphere(sphere, position);
    }
  }

  /**
   * Rotates all spheres clockwise
   */
  rotate() {
    constValues(this.spheres).forEach((sphere) => sphere.move());
  }

  /**
   * Adds a force fragment to the center of the origin board
   * @param {FORCE} force
   * @param {FRAGMENT} type
   */
  addFragment(force, type) {
    this.center.push(new Fragment(force, type));
  }

  /**
   * Tally all points to determine the winner of the game
   * @returns {object}
   */
  calculatePoints() {
    const totals = this.center.reduce(
      (acc, cur) => {
        acc[cur.force] += cur.points;
        return acc;
      },
      {
        [FORCE.BLISS]: 0,
        [FORCE.GLOOM]: 0,
      }
    );

    const max = Math.max(...constValues(totals));
    this.winner = constEntries(totals).reduce((acc, [key, value]) => {
      if (value === max) {
        acc.push(key);
      }

      return acc;
    }, []);

    return totals;
  }
}

export default OriginBoard;
