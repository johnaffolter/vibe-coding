# Project: Study Session Planner

> - **Files:** study-planner.html
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

I built [study-planner.html](study-planner.html). Enter topics (one per line), a start date, a deadline and a daily session limit; it schedules a first pass for each topic in the first ~60% of the window, then reviews about 1, 3 and 7 days later, never exceeding the daily limit, plus a mixed-practice session near the end. Each session has a checkbox, progress is saved in the browser, and you can print the plan or copy it as text. If reviews don't fit before the deadline it says so.

I tested it headlessly: an empty form shows "Add at least one topic.", the 6-topic/14-day sample produced 25 sessions over 14 days, checking a box updated the progress count, and there were no console errors.

# Prompt 2 (make it more advanced):

> - **Tool:** Claude · Opus 5.5 · 2026-11-04
> - **Session:** continued · attached: none
> - **Verified:** agent-tested
> - **Human edits:** none

My message, exactly as typed:

forked push it please and send me details for sumbittal and make it more advanced

Claude asked what "more advanced" should mean, offering four options. I picked all four: smarter citations (DOI auto-lookup, BibTeX/RIS import and export, saved reference list), smarter planner (calendar .ics export, per-topic difficulty, reschedule missed sessions), smarter brain dump (session history, word counts, export all as Markdown), and documenting each upgrade as Prompt 2.

## Output 2:

I upgraded [study-planner.html](study-planner.html) in place (git history has version 1).

- **Difficulty:** add `| hard` or `| easy` after a topic. Hard topics get six sessions (0, 1, 2, 4, 8 and 14 days) and are scheduled first; easy ones get three (0, 2, 6); others keep the original four.
- **Calendar export:** "Export to calendar (.ics)" downloads every session as a 45-minute event starting at the time you pick, plus an all-day deadline event. It imports into Google Calendar, Outlook or Apple Calendar.
- **Missed sessions:** if earlier days have unchecked sessions, a banner offers "Reschedule from today", which moves them into the next days with room and marks them "moved".
- **Progress:** done/total, days left, sessions due today, a progress bar, and today's row highlighted.

Testing (headless Chromium): the sample (6 topics, 2 hard, 1 easy, 16 days) produced 28 sessions; the .ics had 29 events with correct start/end times; shifting the plan 3 days into the past showed 6 missed sessions, and rescheduling cleared the banner with all 28 sessions kept. I also fixed the version 1 bug where the CSS `display` rule overrode the `hidden` attribute. No console errors.

# Prompt 3 (keep improving):

> - **Tool:** Claude · Opus 5.5 · 2026-11-04
> - **Session:** continued · attached: none
> - **Verified:** agent-tested
> - **Human edits:** none

My messages, exactly as typed (two in a row):

keep improving it please

please contiue this way more

I didn't name specific features, so Claude chose the round-3 changes itself.

## Output 3:

Third pass on [study-planner.html](study-planner.html):

- **Per-topic progress:** a small bar for each topic shows sessions done out of total, with hard and easy topics labelled, so you can see which topics are falling behind.
- **Hide finished days:** a toggle collapses days where every session is checked off (today always stays visible). The setting is remembered.
- **Shortcut:** Ctrl/⌘+Enter in the topics box builds the plan.

Testing (headless Chromium): the sample showed six topic bars with the right totals (6 for hard, 4 for medium, 3 for easy); the hide toggle and progress counts worked together. No horizontal scrolling at 390px phone width, no console errors.
