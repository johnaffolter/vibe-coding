# Project: Brain Dump Timer

> - **Files:** brain-dump-timer.html
> - **Dates:** 2026-11-04 → 2026-11-04
> - **Defaults:** Claude (claude.ai agent workspace) · Opus 5.5
> - **Status:** prototype
> - **Use:** none yet
> - **Reusability:** artifact TBD · prompt pattern TBD
> - **Tags:** single-file-html, productivity, localStorage, export-import
> - **Takeaway:** TBD
> - **Story value:** TBD
> - **Surprises:** TBD

# Prompt 1 (build from ideas.md after reviewing CONVENTIONS.md):

> - **Tool:** Claude · Opus 5.5 · 2026-11-04
> - **Session:** continued · attached: none (Claude cloned the course repo and read CONVENTIONS.md and ideas.md earlier in the chat)
> - **Verified:** agent-tested
> - **Human edits:** none

Context: Claude had suggested three apps from ideas.md (#35 Citation Formatter, #33 Study Session Planner, #22 Brain Dump Timer) and asked "Want me to build these three now, with a prompts.md for each?" My reply, exactly as typed:

ok do it plesdr

## Output 1:

I built [brain-dump-timer.html](brain-dump-timer.html), a distraction-free free-write page. Pick 3, 5, 10 or 15 minutes and press Start; a progress bar and the tab title count down, and you can pause. When time is up the text blurs and fades over four seconds and the page resets. Tick "Save before fading" to download a .txt copy first (that setting is remembered).

I tested it headlessly: the clock counted down, the fade message appeared at zero, the text was cleared afterward and the timer reset, with no console errors.

# Prompt 2 (make it more advanced):

> - **Tool:** Claude · Opus 5.5 · 2026-11-04
> - **Session:** continued · attached: none
> - **Verified:** agent-tested
> - **Human edits:** none

My message, exactly as typed:

forked push it please and send me details for sumbittal and make it more advanced

Claude asked what "more advanced" should mean, offering four options. I picked all four: smarter citations (DOI auto-lookup, BibTeX/RIS import and export, saved reference list), smarter planner (calendar .ics export, per-topic difficulty, reschedule missed sessions), smarter brain dump (session history, word counts, export all as Markdown), and documenting each upgrade as Prompt 2.

## Output 2:

I upgraded [brain-dump-timer.html](brain-dump-timer.html) in place (git history has version 1).

- **History:** finished sessions are saved to a side panel (on by default; untick "Keep in history" for a true throwaway). Each entry shows date, length and word count, with Copy and Delete. Totals show words, minutes written and your daily streak.
- **Live stats:** word count and words per minute update while you write.
- **Export:** "Export all as Markdown" downloads every session as one `.md` file with a heading per session.
- **Clear history** needs a second click to confirm, and the panel can be hidden.

Testing (headless Chromium): a 15-word session was saved to history at time-up, the text faded and cleared, the Markdown export had the right heading, length and text, and history survived a reload. No console errors.
