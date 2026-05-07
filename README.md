# recording-lipsync-qa-panel

収録・リップシンク検品パネル は、Adobe Character Animatorの収録テイク、口パク違和感、再収録判断を記録するQAパネルです。

## Closed Alpha Scope

- Rank: 29
- Tier / Score: P1 / 62
- Domain / Idea No: AdobePlugin / 11
- 主な公開先: BOOTH / GitHub Release
- GitHub: https://github.com/Sunmax0731/recording-lipsync-qa-panel
- Prerelease: https://github.com/Sunmax0731/recording-lipsync-qa-panel/releases/tag/v0.1.0-alpha.1

## 実装概要

- `src/core`: 製品プロファイルと代表シナリオ評価
- `src/validators`: 期待結果検証
- `src/report`: 検証レポート生成
- `src/review-model`: レビューゲートと責務モデル
- `src/cli`: `samples/representative-suite.json` の自動検証

## 代表データ

`samples/representative-suite.json` は `happy-path`、`missing-required`、`warning`、`mixed-batch` を含みます。

## 検証

```powershell
cd D:\AI\AdobePlugin\CharacterAnimator\recording-lipsync-qa-panel
cmd.exe /d /s /c npm test
```

手動テストは Codex 側では未実施です。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` を参照してください。
