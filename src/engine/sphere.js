import { SPHERE, SPHERE_ORDER } from "../constants";
import { validate } from "./utils";

class Sphere {
  constructor(sphere, position) {
    validate(SPHERE, sphere, "SPHERE");

    this.sphere = sphere;
    this.position = position;
    this.willpower = 7;
  }

  /**
   * Moves the sphere changing its index position
   * @param {number} direction 1 moves clockwise, -1 moves it counterclockwise
   */
  move(direction = 1) {
    if (direction > 0) {
      this.position =
        this.position + 1 === SPHERE_ORDER.length ? 0 : this.position + 1;
    } else {
      this.position =
        this.position - 1 < 0 ? SPHERE_ORDER.length - 1 : this.position - 1;
    }
  }

  /**
   * Remove 1 willpower off the sphere
   * @returns {number} the remaining will power
   */
  removeWillpower() {
    this.willpower -= 1;
    return this.willpower;
  }

  /**
   * Reset the willpower value to the default 7
   * @returns {number} 7
   */
  resetWillpower() {
    this.willpower = 7;
    return this.willpower;
  }
}

export default Sphere;
