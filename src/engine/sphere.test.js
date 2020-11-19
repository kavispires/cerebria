import Sphere from "./sphere";
import { SPHERE } from "../constants";

describe("Sphere", function () {
  it("constructs an Fragment instance", function () {
    const sample = new Sphere(SPHERE.COMMITMENT, 0);
    expect(sample instanceof Sphere).toBeTruthy();
  });

  it("throws an error if the sphere type is invalid", function () {
    function catcher() {
      return new Sphere("COMMITMENT", 0);
    }

    expect(catcher).toThrowError("The item COMMITMENT is not part of SPHERE");
  });

  it("move() moves the position correctly", function () {
    const sample = new Sphere(SPHERE.COMMITMENT, 0);
    expect(sample.position).toEqual(0);
    sample.move();
    expect(sample.position).toEqual(1);
    sample.move(-1);
    expect(sample.position).toEqual(0);
  });

  it("move() warps the position correctly", function () {
    const sample = new Sphere(SPHERE.COMMITMENT, 4);
    expect(sample.position).toEqual(4);
    sample.move();
    expect(sample.position).toEqual(0);
    sample.move(-1);
    expect(sample.position).toEqual(4);
  });

  it("removeWillpower() removes 1 will power from its count correctly", function () {
    const sample = new Sphere(SPHERE.COMMITMENT, 0);
    expect(sample.willpower).toEqual(7);
    sample.removeWillpower();
    expect(sample.willpower).toEqual(6);
    sample.removeWillpower();
    expect(sample.willpower).toEqual(5);
  });

  it("resetWillpower() resets the will power count correctly", function () {
    const sample = new Sphere(SPHERE.COMMITMENT, 0);
    expect(sample.willpower).toEqual(7);
    sample.removeWillpower();
    sample.removeWillpower();
    expect(sample.willpower).toEqual(5);
    sample.resetWillpower();
    expect(sample.willpower).toEqual(7);
  });
});
