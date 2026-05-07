export function buildHostAdapterRecord(input) {
  return {
    host: "CharacterAnimator",
    product: "recording-lipsync-qa-panel",
    title: input.title,
    nextAction: input.nextAction,
    evidenceOnly: true
  };
}
