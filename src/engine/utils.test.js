import { EMOTION, FORCE } from "../constants";
import { getForce, validate } from "./utils";

describe("utils", function () {
  describe("validate", function () {
    it("works with arrays", function () {
      expect(validate(["a", "b", "c"], "a")).toBeTruthy();
    });

    it("works with objects", function () {
      expect(validate({ a: "a", b: "b", c: "c" }, "a")).toBeTruthy();
    });

    it("throws an error if the item is part of the group", function () {
      function catcher() {
        return validate({}, "a");
      }

      expect(catcher).toThrowError("The item a is not part of required group");
    });
  });

  describe("getForce", function () {
    it("works with Bliss", function () {
      expect(getForce(EMOTION.ADORATION)).toEqual(FORCE.BLISS);
    });

    it("works with Gloom", function () {
      expect(getForce(EMOTION.ANIMOSITY)).toEqual(FORCE.GLOOM);
    });
  });
});
