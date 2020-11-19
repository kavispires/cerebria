import Frontier from "./frontier";
import { EMOTION, FORCE, FRONTIER } from "../constants";
import Emotion from "./emotion";

describe("Frontier", function () {
  it("constructs an Frontier instance", function () {
    const sample = new Frontier(FRONTIER.CRADLE_AND_NETWORK);
    expect(sample instanceof Frontier).toBeTruthy();
  });

  it("throws an error if the frontier name is invalid", function () {
    function catcher() {
      return new Frontier("TEST");
    }

    expect(catcher).toThrowError("The item TEST is not part of FRONTIER");
  });

  it("sets the frontier properties correctly", function () {
    const sample = new Frontier(FRONTIER.CRADLE_AND_NETWORK);

    expect(sample.id).toEqual(1);
    expect(sample.name).toEqual(FRONTIER.CRADLE_AND_NETWORK);
    expect(sample.range).toEqual([3, 4, 5]);
  });

  it("determines control correctly", function () {
    const sample = new Frontier(FRONTIER.VALLEY_AND_CRADLE);
    const cards = [
      new Emotion(EMOTION.ADORATION),
      new Emotion(EMOTION.DESPAIR),
      new Emotion(EMOTION.FEAR).addEssence(),
    ];

    expect(sample.determineControl(cards)).toEqual({
      control: FORCE.GLOOM,
      id: 0,
      [FORCE.GLOOM]: 3,
      [FORCE.BLISS]: 2,
    });
  });

  it("determines control when there is a tie correctly", function () {
    const sample = new Frontier(FRONTIER.VALLEY_AND_CRADLE);
    const cards = [
      new Emotion(EMOTION.ADORATION),
      new Emotion(EMOTION.DESPAIR),
      new Emotion(EMOTION.FEAR),
    ];

    expect(sample.determineControl(cards)).toEqual({
      control: null,
      id: 0,
      [FORCE.GLOOM]: 2,
      [FORCE.BLISS]: 2,
    });
  });
});
