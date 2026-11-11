# Projects and prompts as data

[CONVENTIONS.md](CONVENTIONS.md) already defines a small data model: a project header with fixed fields and a
context block per prompt, each with fixed vocabularies. This folder makes that model machine-readable, so the
records can be checked and shared with other tools without changing how anyone writes `prompts.md`.

## The two elements

| Element | Grain | Keys | Relationship | Series |
| --- | --- | --- | --- | --- |
| `collection:vibe-project` | one row per project folder | `folder` (natural key) | has prompts (1..*) | `date_last`, one per project |
| `collection:vibe-prompt` | one row per prompt per project | `project`, `number` | belongs to one project (`project` → folder) | `date`, per prompt, ordered within a project |

Their properties follow the header and context-block tables in CONVENTIONS.md. The fixed lists (Status,
Reusability, Story value, Verified) are enumerations, and Tags must come from the tag table. Fields the conventions
call required (Tool, Verified, Human edits) are required. Both elements are kept for good: their history is git.

## Checking

```bash
node tools/check-prompts.js            # problems, by project and prompt (exit 1 if any)
node tools/check-prompts.js --json
node tools/check-prompts.js --export   # elements/descriptors.jsonld, elements/shapes.ttl (and records.nq, not committed)
```

No dependencies: `tools/si-elements/` is a vendored copy of the descriptor library from the Superintelligence
Homepage repository (`packages/si-elements`), and `tools/vibe-elements.js` is the reader it shares with that site's
element catalog. `elements/shapes.ttl` is standard SHACL, so any SHACL validator can check `records.nq`.

## What the first run found

- `palette_picker/prompts.md` has two sections headed `# Prompt 3`, so prompt numbers aren't unique there.
- 17 prompts (in `hidden_printable_content`, `palette_picker`, `quadrant_matrix` and `timer`) have no context block,
  so Tool, Verified and Human edits are missing; the conventions call those required.

Nothing was changed in any `prompts.md`; those are the authors' records to fix or to mark as written before the
conventions.
