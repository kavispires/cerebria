export const BASIC_ASPIRATION = {
  ATTITUDE: Symbol("ATTITUDE"),
  AWARENESS: Symbol("AWARENESS"),
  FORTITUDE: Symbol("FORTITUDE"),
  LIVELINESS: Symbol("LIVELINESS"),
  OPENNESS: Symbol("OPENNESS"),
  UNITY: Symbol("UNITY"),
  VERSATILITY: Symbol("VERSATILITY"),
};

export const FULL_ASPIRATION = {
  REFLECTION: Symbol("REFLECTION"),
  SENSIBILITY: Symbol("SENSIBILITY"),
};

export const ASPIRATION = {
  ...BASIC_ASPIRATION,
  ...FULL_ASPIRATION,
};

export const ASPIRATION_DESCRIPTION = {
  [ASPIRATION.ATTITUDE]: "Control more Realms",
  [ASPIRATION.AWARENESS]: "Have more Emotions in triads",
  [ASPIRATION.FORTITUDE]: "Have more total intensity from Fortresses",
  [ASPIRATION.LIVELINESS]: "Have more Essence on the main board",
  [ASPIRATION.OPENNESS]: "Control more Frontiers",
  [ASPIRATION.UNITY]: "Have more adjacent Emotions",
  [ASPIRATION.VERSATILITY]: "Have more different vibes on Emotions",
  [ASPIRATION.SENSIBILITY]: "Have the most intense Emotion",
  [ASPIRATION.REFLECTION]: "Control more opposite Realm-Frontier pairs",
};
