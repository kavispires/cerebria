import { VIBE } from "./vibe";

export const STARTING_BLISS_EMOTION = {
  BRIGHTNESS: Symbol("BRIGHTNESS"),
};

export const MILD_BLISS_EMOTION = {
  AFFECTION: Symbol("AFFECTION"),
  COMFORT: Symbol("COMFORT"),
  COURAGE: Symbol("COURAGE"),
  SOCIABILITY: Symbol("SOCIABILITY"),

  CHEERFULNESS: Symbol("CHEERFULNESS"),
  EXCITEMENT: Symbol("EXCITEMENT"),
  SAFETY: Symbol("SAFETY"),
  TRUST: Symbol("TRUST"),

  DESIRE: Symbol("DESIRE"),
  GENEROSITY: Symbol("GENEROSITY"),
  INNOCENCE: Symbol("INNOCENCE"),
  KINDNESS: Symbol("KINDNESS"),

  CONFIDENCE: Symbol("CONFIDENCE"),
  OPTIMISM: Symbol("OPTIMISM"),
  SELF_ESTEEM: Symbol("SELF_ESTEEM"),
  TRANQUILITY: Symbol("TRANQUILITY"),
};

export const STRONG_BLISS_EMOTION = {
  ADORATION: Symbol("ADORATION"),
  INTIMACY: Symbol("INTIMACY"),
  SATISFACTION: Symbol("SATISFACTION"),
  VALOR: Symbol("VALOR"),

  EUPHORIA: Symbol("EUPHORIA"),
  FAITH: Symbol("FAITH"),
  FREEDOM: Symbol("FREEDOM"),
  PASSION: Symbol("PASSION"),

  BENEVOLENCE: Symbol("BENEVOLENCE"),
  LONGING: Symbol("LONGING"),
  PURITY: Symbol("PURITY"),
  SELFLESSNESS: Symbol("SELFLESSNESS"),

  DIGNITY: Symbol("DIGNITY"),
  HOPE: Symbol("HOPE"),
  SELF_RESPECT: Symbol("SELF_RESPECT"),
  SERENITY: Symbol("SERENITY"),
};

export const STARTING_GLOOM_EMOTION = {
  BLEAKNESS: Symbol("BLEAKNESS"),
};

export const MILD_GLOOM_EMOTION = {
  ANGER: Symbol("ANGER"),
  CRAVING: Symbol("CRAVING"),
  HOSTILITY: Symbol("HOSTILITY"),
  JEALOUSY: Symbol("JEALOUSY"),

  BITTERNESS: Symbol("BITTERNESS"),
  BOREDOM: Symbol("BOREDOM"),
  GUILT: Symbol("GUILT"),
  PESSIMISM: Symbol("PESSIMISM"),

  DISGUST: Symbol("DISGUST"),
  DISLIKE: Symbol("DISLIKE"),
  SELFISHNESS: Symbol("SELFISHNESS"),
  MISTRUST: Symbol("MISTRUST"),

  EMBARRASSMENT: Symbol("EMBARRASSMENT"),
  FEAR: Symbol("FEAR"),
  INSECURITY: Symbol("INSECURITY"),
  LONELINESS: Symbol("LONELINESS"),
};

export const STRONG_GLOOM_EMOTION = {
  ENVY: Symbol("ENVY"),
  GREED: Symbol("GREED"),
  MALEVOLENCE: Symbol("MALEVOLENCE"),
  RAGE: Symbol("RAGE"),

  DESPAIR: Symbol("DESPAIR"),
  INDIFFERENCE: Symbol("INDIFFERENCE"),
  LETHARGY: Symbol("LETHARGY"),
  REMORSE: Symbol("REMORSE"),

  ANIMOSITY: Symbol("ANIMOSITY"),
  LOATHING: Symbol("LOATHING"),
  NARCISSISM: Symbol("NARCISSISM"),
  SUSPICION: Symbol("SUSPICION"),

  DOUBT: Symbol("DOUBT"),
  ISOLATION: Symbol("ISOLATION"),
  PANIC: Symbol("PANIC"),
  SHAME: Symbol("SHAME"),
};

export const BLISS_EMOTION = {
  ...STARTING_BLISS_EMOTION,
  ...MILD_BLISS_EMOTION,
  ...STRONG_BLISS_EMOTION,
};

export const GLOOM_EMOTION = {
  ...STARTING_GLOOM_EMOTION,
  ...MILD_GLOOM_EMOTION,
  ...STRONG_GLOOM_EMOTION,
};

export const EMOTION = {
  ...BLISS_EMOTION,
  ...GLOOM_EMOTION,
};

export const EMOTION_DATA = {
  // Starting Emotions
  [EMOTION.BRIGHTNESS]: {
    intensity: [1, 2],
  },
  [EMOTION.BLEAKNESS]: {
    intensity: [1, 2],
  },

  // Mild Emotions
  [EMOTION.AFFECTION]: {
    vibe: VIBE.RED,
    intensity: [1, 2, 2],
    empower: EMOTION.ADORATION,
  },
  [EMOTION.COMFORT]: {
    vibe: VIBE.RED,
    intensity: [1, 1, 2],
    empower: EMOTION.SATISFACTION,
  },
  [EMOTION.COURAGE]: {
    vibe: VIBE.RED,
    intensity: [1, 2, 2],
    empower: EMOTION.VALOR,
  },
  [EMOTION.SOCIABILITY]: {
    vibe: VIBE.RED,
    intensity: [1, 2, 2],
    empower: EMOTION.INTIMACY,
  },

  [EMOTION.CHEERFULNESS]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 1, 2],
    empower: EMOTION.EUPHORIA,
  },
  [EMOTION.EXCITEMENT]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 3],
    empower: EMOTION.PASSION,
  },
  [EMOTION.SAFETY]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 3],
    empower: EMOTION.FREEDOM,
  },
  [EMOTION.TRUST]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 1, 2],
    empower: EMOTION.FAITH,
  },

  [EMOTION.DESIRE]: {
    vibe: VIBE.GREEN,
    intensity: [1, 2, 3],
    empower: EMOTION.LONGING,
  },
  [EMOTION.GENEROSITY]: {
    vibe: VIBE.GREEN,
    intensity: [1, 1, 2, 2],
    empower: EMOTION.SELFLESSNESS,
  },
  [EMOTION.INNOCENCE]: {
    vibe: VIBE.GREEN,
    intensity: [1, 2, 3],
    empower: EMOTION.PURITY,
  },
  [EMOTION.KINDNESS]: {
    vibe: VIBE.GREEN,
    intensity: [1, 1, 2],
    empower: EMOTION.BENEVOLENCE,
  },

  [EMOTION.CONFIDENCE]: {
    vibe: VIBE.BLUE,
    intensity: [1, 1, 2, 3],
    empower: EMOTION.SELF_RESPECT,
  },
  [EMOTION.OPTIMISM]: {
    vibe: VIBE.BLUE,
    intensity: [1, 2, 2],
    empower: EMOTION.HOPE,
  },
  [EMOTION.SELF_ESTEEM]: {
    vibe: VIBE.BLUE,
    intensity: [1, 2, 2],
    empower: EMOTION.DIGNITY,
  },
  [EMOTION.TRANQUILITY]: {
    vibe: VIBE.BLUE,
    intensity: [1, 1],
    empower: EMOTION.SERENITY,
  },

  [EMOTION.ANGER]: {
    vibe: VIBE.RED,
    intensity: [1, 2],
    empower: EMOTION.RAGE,
  },
  [EMOTION.CRAVING]: {
    vibe: VIBE.RED,
    intensity: [1, 2, 2],
    empower: EMOTION.GREED,
  },
  [EMOTION.HOSTILITY]: {
    vibe: VIBE.RED,
    intensity: [1, 1, 2, 2],
    empower: EMOTION.MALEVOLENCE,
  },
  [EMOTION.JEALOUSY]: {
    vibe: VIBE.RED,
    intensity: [1, 2, 3],
    empower: EMOTION.ENVY,
  },

  [EMOTION.BITTERNESS]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 2],
    empower: EMOTION.LETHARGY,
  },
  [EMOTION.BOREDOM]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 2],
    empower: EMOTION.INDIFFERENCE,
  },
  [EMOTION.GUILT]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 3],
    empower: EMOTION.REMORSE,
  },
  [EMOTION.PESSIMISM]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 2],
    empower: EMOTION.DESPAIR,
  },

  [EMOTION.DISGUST]: {
    vibe: VIBE.GREEN,
    intensity: [1, 1, 2],
    empower: EMOTION.LOATHING,
  },
  [EMOTION.DISLIKE]: {
    vibe: VIBE.GREEN,
    intensity: [1, 2, 3],
    empower: EMOTION.ANIMOSITY,
  },
  [EMOTION.SELFISHNESS]: {
    vibe: VIBE.GREEN,
    intensity: [1, 2, 2],
    empower: EMOTION.NARCISSISM,
  },
  [EMOTION.MISTRUST]: {
    vibe: VIBE.GREEN,
    intensity: [1, 1, 2],
    empower: EMOTION.SUSPICION,
  },

  [EMOTION.EMBARRASSMENT]: {
    vibe: VIBE.BLUE,
    intensity: [1, 2, 2],
    empower: EMOTION.SHAME,
  },
  [EMOTION.FEAR]: {
    vibe: VIBE.BLUE,
    intensity: [1, 2, 2],
    empower: EMOTION.PANIC,
  },
  [EMOTION.INSECURITY]: {
    vibe: VIBE.BLUE,
    intensity: [1, 2, 2],
    empower: EMOTION.DOUBT,
  },
  [EMOTION.LONELINESS]: {
    vibe: VIBE.BLUE,
    intensity: [1, 2, 2],
    empower: EMOTION.ISOLATION,
  },

  // Strong emotions
  [EMOTION.ADORATION]: {
    vibe: VIBE.RED,
    intensity: [2, 3, 3, 4],
    base: EMOTION.AFFECTION,
  },
  [EMOTION.INTIMACY]: {
    vibe: VIBE.RED,
    intensity: [2, 3, 3],
    base: EMOTION.SOCIABILITY,
  },
  [EMOTION.SATISFACTION]: {
    vibe: VIBE.RED,
    intensity: [2, 2, 3],
    base: EMOTION.COMFORT,
  },
  [EMOTION.VALOR]: {
    vibe: VIBE.RED,
    intensity: [2, 3, 4],
    base: EMOTION.COURAGE,
  },

  [EMOTION.EUPHORIA]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 2, 3],
    base: EMOTION.CHEERFULNESS,
  },
  [EMOTION.FAITH]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 2, 3],
    base: EMOTION.TRUST,
  },
  [EMOTION.FREEDOM]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 3, 4],
    base: EMOTION.SAFETY,
  },
  [EMOTION.PASSION]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 3, 4],
    base: EMOTION.EXCITEMENT,
  },

  [EMOTION.BENEVOLENCE]: {
    vibe: VIBE.GREEN,
    intensity: [2, 2, 3],
    base: EMOTION.KINDNESS,
  },
  [EMOTION.LONGING]: {
    vibe: VIBE.GREEN,
    intensity: [2, 3, 4],
    base: EMOTION.DESIRE,
  },
  [EMOTION.PURITY]: {
    vibe: VIBE.GREEN,
    intensity: [1, 1, 1],
    base: EMOTION.INNOCENCE,
  },
  [EMOTION.SELFLESSNESS]: {
    vibe: VIBE.GREEN,
    intensity: [3, 3, 3, 3],
    base: EMOTION.GENEROSITY,
  },

  [EMOTION.DIGNITY]: {
    vibe: VIBE.BLUE,
    intensity: [2, 3, 3],
    base: EMOTION.SELF_ESTEEM,
  },
  [EMOTION.HOPE]: {
    vibe: VIBE.BLUE,
    intensity: [2, 3, 3],
    base: EMOTION.OPTIMISM,
  },
  [EMOTION.SELF_RESPECT]: {
    vibe: VIBE.BLUE,
    intensity: [7, 6, 5, 4],
    base: EMOTION.CONFIDENCE,
  },
  [EMOTION.SERENITY]: {
    vibe: VIBE.BLUE,
    intensity: [2, 2, 4],
    base: EMOTION.TRANQUILITY,
  },

  [EMOTION.ENVY]: {
    vibe: VIBE.RED,
    intensity: [2, 3, 4],
    base: EMOTION.JEALOUSY,
  },
  [EMOTION.GREED]: {
    vibe: VIBE.RED,
    intensity: [2, 3, 3],
    base: EMOTION.CRAVING,
  },
  [EMOTION.MALEVOLENCE]: {
    vibe: VIBE.RED,
    intensity: [2, 2, 3, 3],
    base: EMOTION.HOSTILITY,
  },
  [EMOTION.RAGE]: {
    vibe: VIBE.RED,
    intensity: [1, 2, 2, 2],
    base: EMOTION.ANGER,
  },

  [EMOTION.DESPAIR]: {
    vibe: VIBE.YELLOW,
    intensity: [1, 2, 2],
    base: EMOTION.PESSIMISM,
  },
  [EMOTION.INDIFFERENCE]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 3, 3],
    base: EMOTION.BOREDOM,
  },
  [EMOTION.LETHARGY]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 3, 4],
    base: EMOTION.BITTERNESS,
  },
  [EMOTION.REMORSE]: {
    vibe: VIBE.YELLOW,
    intensity: [2, 3, 4],
    base: EMOTION.GUILT,
  },

  [EMOTION.ANIMOSITY]: {
    vibe: VIBE.GREEN,
    intensity: [2, 3, 4],
    base: EMOTION.DISLIKE,
  },
  [EMOTION.LOATHING]: {
    vibe: VIBE.GREEN,
    intensity: [2, 2, 3],
    base: EMOTION.DISGUST,
  },
  [EMOTION.NARCISSISM]: {
    vibe: VIBE.GREEN,
    intensity: [2, 3, 3],
    base: EMOTION.SELFISHNESS,
  },
  [EMOTION.MISTRUST]: {
    vibe: VIBE.GREEN,
    intensity: [0, 0, 1],
    base: EMOTION.GENEROSITY,
  },

  [EMOTION.DOUBT]: {
    vibe: VIBE.BLUE,
    intensity: [2, 3, 4],
    base: EMOTION.INSECURITY,
  },
  [EMOTION.ISOLATION]: {
    vibe: VIBE.BLUE,
    intensity: [2, 3, 4],
    base: EMOTION.LONELINESS,
  },
  [EMOTION.PANIC]: {
    vibe: VIBE.BLUE,
    intensity: [2, 3, 3],
    base: EMOTION.FEAR,
  },
  [EMOTION.SHAME]: {
    vibe: VIBE.BLUE,
    intensity: [2, 3, 3],
    base: EMOTION.EMBARRASSMENT,
  },
};
