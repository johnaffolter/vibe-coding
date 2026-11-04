# Project: Study Session Planner

> - **Files:** study-planner.html
> - **Dates:** 2026-11-04 → 2026-11-04
> - **Defaults:** Claude (claude.ai agent workspace) · Opus 5.5
> - **Status:** prototype
> - **Use:** none yet
> - **Reusability:** artifact TBD · prompt pattern TBD
> - **Tags:** single-file-html, productivity, localStorage, print-pdf
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

I built [study-planner.html](study-planner.html). Enter topics (one per line), a start date, a deadline and a daily session limit; it schedules a first pass for each topic in the first ~60% of the window, then reviews about 1, 3 and 7 days later, never exceeding the daily limit, plus a mixed-practice session near the end. Each session has a checkbox, progress is saved in the browser, and you can print the plan or copy it as text. If reviews don't fit before the deadline it says so.

I tested it headlessly: an empty form shows "Add at least one topic.", the 6-topic/14-day sample produced 25 sessions over 14 days, checking a box updated the progress count, and there were no console errors.
