import Emotion from "./emotion";
import { EMOTION, FORCE, VIBE } from "../constants";

describe("Emotion", function () {
  it("constructs an Emotion instance", function () {
    const sample = new Emotion(EMOTION.FEAR);
    expect(sample instanceof Emotion).toBeTruthy();
  });

  it("throws an error if the emotion name is invalid", function () {
    function catcher() {
      return new Emotion("TEST");
    }

    expect(catcher).toThrowError("The item TEST is not part of EMOTION");
  });

  it("sets the frontier properties correctly", function () {
    const sample = new Emotion(EMOTION.FEAR);

    expect(sample.name).toEqual(EMOTION.FEAR);
    expect(sample.force).toEqual(FORCE.GLOOM);
    expect(sample.vibe).toEqual(VIBE.BLUE);
    expect(sample.intensitySlots).toEqual([1, 2, 2]);
    expect(sample.isStrong).toEqual(false);
    expect(sample.empowerTo).toEqual(EMOTION.PANIC);
    expect(sample.empowerFrom).toEqual(null);
  });

  it("gets intensity based on the intensity slots and the number of essence", function () {
    const sample = new Emotion(EMOTION.FEAR);
    expect(sample.intensity).toEqual(1);

    sample.essence = 2;
    expect(sample.intensity).toEqual(2);

    sample.essence = 3;
    expect(sample.intensity).toEqual(2);
  });

  it("converts the emotion to a strong emotion when the empower() method is triggered", function () {
    const sample = new Emotion(EMOTION.FEAR);

    expect(sample.essence).toEqual(1);

    sample.addEssence(1);
    expect(sample.essence).toEqual(2);

    sample.addEssence(30);
    expect(sample.essence).toEqual(3);
  });

  it("can add any number of essence to the emotion with addEssence()", function () {
    const sample = new Emotion(EMOTION.FEAR);

    expect(sample.essence).toEqual(1);

    sample.removeEssence(1);
    expect(sample.essence).toEqual(0);

    sample.removeEssence(2);
    expect(sample.essence).toEqual(0);
  });
});
