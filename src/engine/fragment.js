import { FORCE, FRAGMENT } from "../constants";
import { validate } from "./utils";

class Fragment {
  constructor(force, type) {
    validate(FORCE, force, "FORCE");
    validate(FRAGMENT, type, "FRAGMENT");

    this.type = type;
    this.force = force;
    this.points = 0;

    this.setPoints();
  }

  /**
   * Set end game fragment points based on its type
   */
  setPoints() {
    switch (this.type) {
      case FRAGMENT.MINOR:
        this.points = 3;
        break;
      case FRAGMENT.MAJOR:
        this.points = 5;
        break;
      case FRAGMENT.CAPPING:
        this.points = 4;
        break;
      default:
        this.points = 0;
    }
  }

  /**
   * Get in-game bonus intensity based on its type
   * @returns {number}
   */
  get intensity() {
    switch (this.type) {
      case FRAGMENT.MINOR:
        return 1;
      case FRAGMENT.MAJOR:
        return 2;
      case FRAGMENT.CAPPING:
        return 0;
      default:
        return 0;
    }
  }

  /**
   * Upgrades a Minor Fragment to a Major Fragment
   */
  upgrade() {
    if (this.type === FRAGMENT.MINOR) {
      this.type = FRAGMENT.MAJOR;
      this.setPoints();
    }
    return this;
  }

  /**
   * Downgrades a Major Fragment to a Minor Fragment or destroys instance if it's already a minor fragment
   */
  downgrade() {
    if (this.type === FRAGMENT.MAJOR) {
      this.type = FRAGMENT.MINOR;
      this.setPoints();
      return this;
    }

    if (this.type === FRAGMENT.MINOR) {
      this.type = null;
      this.force = null;
      this.points = 0;
      return this;
    }
  }
}

export default Fragment;
