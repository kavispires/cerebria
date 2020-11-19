import OriginBoard from "./origin-board";
import { FORCE, FRAGMENT, SPHERE } from "../constants";

describe("OriginBoard", function () {
  it("constructs an OriginBoard instance", function () {
    const sample = new OriginBoard(SPHERE.COMMITMENT);
    expect(sample instanceof OriginBoard).toBeTruthy();
  });

  it("throws an error if the sphere type is invalid", function () {
    function catcher() {
      return new OriginBoard("COMMITMENT");
    }

    expect(catcher).toThrowError("The item COMMITMENT is not part of SPHERE");
  });

  it("init() set the group of spheres positions correctly", function () {
    let sample = new OriginBoard(SPHERE.COMMITMENT);

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(0);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(1);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(2);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(3);
    expect(sample.spheres[SPHERE.KNOWLEDGE].position).toEqual(4);

    sample = new OriginBoard(SPHERE.CREATIVITY);

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(4);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(0);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(1);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(2);
    expect(sample.spheres[SPHERE.KNOWLEDGE].position).toEqual(3);

    sample = new OriginBoard(SPHERE.HUMILITY);

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(3);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(4);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(0);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(1);
    expect(sample.spheres[SPHERE.KNOWLEDGE].position).toEqual(2);

    sample = new OriginBoard(SPHERE.DILIGENCE);

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(2);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(3);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(4);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(0);
    expect(sample.spheres[SPHERE.KNOWLEDGE].position).toEqual(1);

    sample = new OriginBoard(SPHERE.KNOWLEDGE);

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(1);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(2);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(3);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(4);
    expect(sample.spheres[SPHERE.KNOWLEDGE].position).toEqual(0);
  });

  it("rotate() changes the group of spheres positions correctly", function () {
    const sample = new OriginBoard(SPHERE.COMMITMENT);
    sample.rotate();

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(1);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(2);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(3);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(4);
    expect(sample.spheres[SPHERE.KNOWLEDGE].position).toEqual(0);

    sample.rotate();

    expect(sample.spheres[SPHERE.COMMITMENT].position).toEqual(2);
    expect(sample.spheres[SPHERE.CREATIVITY].position).toEqual(3);
    expect(sample.spheres[SPHERE.HUMILITY].position).toEqual(4);
    expect(sample.spheres[SPHERE.DILIGENCE].position).toEqual(0);
  });

  it("addFragment() adds fragments correctly", function () {
    const sample = new OriginBoard(SPHERE.COMMITMENT);
    sample.addFragment(FORCE.BLISS, FRAGMENT.MINOR);

    expect(sample.center.length).toEqual(1);
    expect(sample.center[0]).toEqual({
      force: FORCE.BLISS,
      points: 3,
      type: FRAGMENT.MINOR,
    });
  });

  it("calculatePoints() tally points correctly", function () {
    const sample = new OriginBoard(SPHERE.COMMITMENT);
    sample.addFragment(FORCE.BLISS, FRAGMENT.MINOR);
    sample.addFragment(FORCE.GLOOM, FRAGMENT.MAJOR);
    sample.addFragment(FORCE.BLISS, FRAGMENT.MINOR);
    sample.addFragment(FORCE.BLISS, FRAGMENT.MINOR);
    sample.addFragment(FORCE.GLOOM, FRAGMENT.MAJOR);

    expect(sample.calculatePoints()).toEqual({
      [FORCE.BLISS]: 9,
      [FORCE.GLOOM]: 10,
    });

    expect(sample.winner).toEqual([FORCE.GLOOM]);
  });
});
