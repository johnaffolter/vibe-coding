# Week 8 homework: “Just vibes” (Option 1)

SEIS 606 Vibe Coding, Fall 2026 · John Affolter

Three single-file apps from [`ideas.md`](ideas.md), built with Claude (Opus 5.5) and documented following [`CONVENTIONS.md`](CONVENTIONS.md). Each went through three prompts: a first build, an “advanced” pass, and a polish pass. Every prompt, its context block, and the assistant’s final output are in the app’s `prompts.md`.

| App | Idea | What it does | Status | Verified |
| --- | --- | --- | --- | --- |
| [Citation formatter](citation_formatter/) | #35 | APA 7, MLA 9 and Chicago side by side, plus in-text citations. DOI lookup via Crossref. Saved reference list with duplicate check; BibTeX/RIS import and export. | prototype | agent-tested |
| [Study session planner](study_planner/) | #33 | Spaced review schedule up to a deadline, with hard/easy topics, per-topic progress, calendar (.ics) export and rescheduling of missed sessions. | prototype | agent-tested |
| [Brain dump timer](brain_dump_timer/) | #22 | Timed free-write that fades away at the end, with live word count, searchable session history and Markdown export. | prototype | agent-tested |

## Try them

Each app is one `.html` file with no dependencies. Download it and open it in a browser:

- [`citation_formatter/citation-formatter.html`](citation_formatter/citation-formatter.html)
- [`study_planner/study-planner.html`](study_planner/study-planner.html)
- [`brain_dump_timer/brain-dump-timer.html`](brain_dump_timer/brain-dump-timer.html)

## How it was made

1. Read `CONVENTIONS.md` and `ideas.md`, and picked three ideas useful for research work.
2. **Prompt 1:** build all three. Claude tested each in a headless browser.
3. **Prompt 2:** “make it more advanced.” I picked four upgrades: DOI lookup and BibTeX/RIS for citations, difficulty and calendar export for the planner, history and Markdown export for the brain dump, and documenting each step as its own prompt. The retest caught a version 1 bug where CSS overrode the `hidden` attribute.
4. **Prompt 3:** “keep improving it.” Claude chose in-text citations, duplicate checks, per-topic progress, history search and keyboard shortcuts, and checked phone width.

Each prompt is a separate commit, so `git log` shows each version.

## Known limits

- **Verification level:** everything is `agent-tested`, not yet `human-tested`. Takeaway, story value, surprises and reusability are `TBD` until I’ve used the apps for real work.
- **DOI lookup:** tested against a mocked Crossref response only, because the build sandbox couldn’t reach `api.crossref.org`.
- **Not in `index.html` yet:** per the conventions, apps join the landing page once they reach `keeper`.
