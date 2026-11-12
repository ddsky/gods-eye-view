import { VOICE_MODELS } from '../../../src/voice/voiceCost.js';

// Sourced from the shared voice-model registry so the client's cost estimate
// can never be computed against a different model than the session runs on.
const OPENAI_REALTIME_MODEL_DEFAULT = VOICE_MODELS.standard.id;

const OPENAI_REALTIME_MODEL_MINI_DEFAULT = VOICE_MODELS.mini.id;

const OPENAI_REALTIME_VOICE_DEFAULT = 'marin';

const OPENAI_REALTIME_REASONING_DEFAULT = 'low';

const OPENAI_REALTIME_CONTEXT_TOKENS_DEFAULT = 3000;

const OPENAI_REALTIME_CONTEXT_RETENTION_DEFAULT = 0.5;

// OpenAI retires gpt-5-nano on 2026-12-11; its successor takes 'none', not 'minimal', as its lowest effort.
const OPENAI_HUD_SUMMARY_MODEL_DEFAULT = 'gpt-5.6-luna';

export {
  OPENAI_HUD_SUMMARY_MODEL_DEFAULT,
  OPENAI_REALTIME_MODEL_MINI_DEFAULT,
  OPENAI_REALTIME_MODEL_DEFAULT,
  OPENAI_REALTIME_VOICE_DEFAULT,
  OPENAI_REALTIME_REASONING_DEFAULT,
  OPENAI_REALTIME_CONTEXT_TOKENS_DEFAULT,
  OPENAI_REALTIME_CONTEXT_RETENTION_DEFAULT,
};
