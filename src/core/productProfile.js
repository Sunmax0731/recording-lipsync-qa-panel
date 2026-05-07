export const productProfile = {
  "rank": 29,
  "tier": "P1",
  "score": 62,
  "domain": "AdobePlugin",
  "ideaNo": 11,
  "ideaName": "収録・リップシンク検品パネル",
  "repositoryName": "recording-lipsync-qa-panel",
  "publishTarget": "BOOTH / GitHub Release",
  "featureFocus": "Adobe Character Animatorの収録テイク、口パク違和感、再収録判断を記録するQAパネル",
  "records": [
    "takeId",
    "cue",
    "syncIssue",
    "retakeAction"
  ],
  "requiredFields": [
    "title",
    "takeId",
    "nextAction"
  ],
  "warningFields": [
    "syncIssue",
    "reviewDate"
  ],
  "primaryAction": "収録テイクごとに問題箇所と再収録アクションを記録する",
  "privacyPolicy": "音声や動画本体は扱わず、テイクIDと検品メモだけを保存する",
  "competitors": [
    "Adobe Character Animator",
    "Premiere Pro markers",
    "Google Sheets"
  ],
  "androidPermissions": [],
  "adobeHost": "CharacterAnimator",
  "hostReason": "アイデア名と機能内容がリップシンク収録検品に限定され、Character Animator のテイク検品と一致するため。"
};
