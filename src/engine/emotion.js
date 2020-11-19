import { EMOTION, EMOTION_DATA } from "../constants";
import { getForce, validate } from "./utils";

class Emotion {
  constructor(name) {
    validate(EMOTION, name, "EMOTION");

    this.name = name;
    this.isStrong = false;
    this.force = null;
    this.vibe = null;
    this.intensitySlots = [];
    this.essence = 1;

    this.init();
  }

  /**
   * Sets up the emotion data
   */
  init() {
    const data = EMOTION_DATA[this.name];

    this.force = getForce(this.name);
    this.vibe = data?.vibe ?? null;
    this.intensitySlots = data.intensity;

    this.isStrong = data?.base ?? false;
    this.empowerTo = data?.empower ?? null;
    this.empowerFrom = data?.base ?? null;
  }

  /**
   * Gets emotion intensity based on the reach of its essences in the intensity slots
   * @returns {number}
   */
  get intensity() {
    return this.intensitySlots[this.essence - 1];
  }

  /**
   * Transforms mild emotion into a strong one
   */
  empower() {
    if (this.empowerTo) {
      this.name = this.empowerTo;
      this.essence = 1;
      this.init();
    }
    return this;
  }

  /**
   * Adds any number of essence to the emotion making sure it doesn't exceed its number of slots
   * @param {number} quantity
   */
  addEssence(quantity = 1) {
    this.essence += quantity;
    this.essence =
      this.essence > this.intensitySlots.length
        ? this.intensitySlots.length
        : this.essence;
    return this;
  }

  /**
   * Removes any number of essence to the emotion making sure it is not lower than 0
   * @param {number} quantity
   */
  removeEssence(quantity = 1) {
    this.essence -= quantity;
    this.essence = this.essence < 0 ? 0 : this.essence;
    return this;
  }
}

export default Emotion;
