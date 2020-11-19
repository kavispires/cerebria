import Fragment from "./fragment";
import { FORCE, FRAGMENT } from "../constants";

describe("Fragment", function () {
  it("constructs an Fragment instance", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MINOR);
    expect(sample instanceof Fragment).toBeTruthy();
  });

  it("throws an error if the fragment type is invalid", function () {
    function catcher() {
      return new Fragment(FORCE.BLISS, "MINOR");
    }

    expect(catcher).toThrowError("The item MINOR is not part of FRAGMENT");
  });

  it("throws an error if the force is invalid", function () {
    function catcher() {
      return new Fragment("BLISS", "MINOR");
    }

    expect(catcher).toThrowError("The item BLISS is not part of FORCE");
  });

  it("determines the minor fragment points correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MINOR);
    expect(sample.points).toEqual(3);
  });

  it("determines the major fragment points correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MAJOR);
    expect(sample.points).toEqual(5);
  });

  it("determines the capping fragment points correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.CAPPING);
    expect(sample.points).toEqual(4);
  });

  it("gets the minor fragment intensity correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MINOR);
    expect(sample.intensity).toEqual(1);
  });

  it("gets the major fragment intensity correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MAJOR);
    expect(sample.intensity).toEqual(2);
  });

  it("gets the capping fragment intensity correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.CAPPING);
    expect(sample.intensity).toEqual(0);
  });

  it("turns a minor fragment into a major fragment using upgrade() correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MINOR);

    expect(sample.points).toEqual(3);
    expect(sample.intensity).toEqual(1);
    expect(sample.type).toEqual(FRAGMENT.MINOR);

    sample.upgrade();

    expect(sample.points).toEqual(5);
    expect(sample.intensity).toEqual(2);
    expect(sample.type).toEqual(FRAGMENT.MAJOR);
  });

  it("turns a major fragment into a minor fragment using downgrade() correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MAJOR);

    expect(sample.points).toEqual(5);
    expect(sample.intensity).toEqual(2);
    expect(sample.type).toEqual(FRAGMENT.MAJOR);

    sample.downgrade();

    expect(sample.points).toEqual(3);
    expect(sample.intensity).toEqual(1);
    expect(sample.type).toEqual(FRAGMENT.MINOR);
  });

  it("destroys instance when using downgrade() to downgrade a minor fragment correctly", function () {
    const sample = new Fragment(FORCE.BLISS, FRAGMENT.MINOR);

    expect(sample.points).toEqual(3);
    expect(sample.intensity).toEqual(1);
    expect(sample.type).toEqual(FRAGMENT.MINOR);

    sample.downgrade();

    expect(sample.points).toEqual(0);
    expect(sample.intensity).toEqual(0);
    expect(sample.type).toEqual(null);
    expect(sample.force).toEqual(null);
  });
});
