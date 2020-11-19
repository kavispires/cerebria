import Realm from "./realm";
import { EMOTION, FORCE, FRAGMENT, REALM } from "../constants";
import Emotion from "./emotion";
import Fragment from "./fragment";

describe("Realm", function () {
  it("constructs an Realm instance", function () {
    const sample = new Realm(REALM.WILLOW_OF_VALUES);
    expect(sample instanceof Realm).toBeTruthy();
  });

  it("throws an error if the realm name is invalid", function () {
    function catcher() {
      return new Realm("TEST");
    }

    expect(catcher).toThrowError("The item TEST is not part of REALM");
  });

  it("sets the realm properties correctly", function () {
    const sample = new Realm(REALM.WILLOW_OF_VALUES);

    expect(sample.id).toEqual(4);
    expect(sample.name).toEqual(REALM.WILLOW_OF_VALUES);
    expect(sample.range).toEqual([10, 11, 12, 13]);
  });

  it("determines control correctly", function () {
    const sample = new Realm(REALM.CRADLE_OF_SENSES);
    const cards = [
      null,
      new Emotion(EMOTION.ADORATION),
      new Emotion(EMOTION.DESPAIR),
      new Emotion(EMOTION.FEAR).addEssence(),
      new Emotion(EMOTION.FREEDOM).addEssence(),
    ];
    const fortresses = [null, new Fragment(FORCE.GLOOM, FRAGMENT.MINOR)];

    expect(sample.determineControl(cards, fortresses)).toEqual({
      control: FORCE.BLISS,
      id: 1,
      [FORCE.GLOOM]: 4,
      [FORCE.BLISS]: 5,
    });
  });

  it("determines control when there is a tie correctly", function () {
    const sample = new Realm(REALM.CRADLE_OF_SENSES);
    const cards = [
      null,
      new Emotion(EMOTION.ADORATION),
      new Emotion(EMOTION.DESPAIR),
      new Emotion(EMOTION.FEAR).addEssence(),
      new Emotion(EMOTION.FREEDOM).addEssence(),
    ];
    const fortresses = [null, new Fragment(FORCE.GLOOM, FRAGMENT.MAJOR)];

    expect(sample.determineControl(cards, fortresses)).toEqual({
      control: null,
      id: 1,
      [FORCE.GLOOM]: 5,
      [FORCE.BLISS]: 5,
    });
  });
});
