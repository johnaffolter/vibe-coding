# Project: Citation Formatter

> - **Files:** citation-formatter.html
> - **Dates:** 2026-11-04 → 2026-11-04
> - **Defaults:** Claude (claude.ai agent workspace) · Opus 5.5
> - **Status:** prototype
> - **Use:** none yet
> - **Reusability:** artifact TBD · prompt pattern TBD
> - **Tags:** single-file-html, productivity, localStorage
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

I built [citation-formatter.html](citation-formatter.html), a single file with no dependencies. Fill in the source once (journal article, book or web page) and it shows APA 7, MLA 9 and Chicago author-date side by side, each with a Copy button that keeps italics when pasted into Word or Docs. Authors go in as "Last, First; Last, First", and a DOI is turned into a doi.org link automatically. Fields are remembered between visits.

I tested it headlessly in Chromium: the sample article produced correct-looking APA, MLA and Chicago entries, switching to Book changed the layout, and there were no console errors. Title capitalization is left as typed, so check sentence vs. title case against your style guide.
