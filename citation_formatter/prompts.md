# Project: Citation Formatter

> - **Files:** citation-formatter.html
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

I built [citation-formatter.html](citation-formatter.html), a single file with no dependencies. Fill in the source once (journal article, book or web page) and it shows APA 7, MLA 9 and Chicago author-date side by side, each with a Copy button that keeps italics when pasted into Word or Docs. Authors go in as "Last, First; Last, First", and a DOI is turned into a doi.org link automatically. Fields are remembered between visits.

I tested it headlessly in Chromium: the sample article produced correct-looking APA, MLA and Chicago entries, switching to Book changed the layout, and there were no console errors. Title capitalization is left as typed, so check sentence vs. title case against your style guide.

# Prompt 2 (make it more advanced):

> - **Tool:** Claude · Opus 5.5 · 2026-11-04
> - **Session:** continued · attached: none
> - **Verified:** agent-tested
> - **Human edits:** none

My message, exactly as typed:

forked push it please and send me details for sumbittal and make it more advanced

Claude asked what "more advanced" should mean, offering four options. I picked all four: smarter citations (DOI auto-lookup, BibTeX/RIS import and export, saved reference list), smarter planner (calendar .ics export, per-topic difficulty, reschedule missed sessions), smarter brain dump (session history, word counts, export all as Markdown), and documenting each upgrade as Prompt 2.

## Output 2:

I upgraded [citation-formatter.html](citation-formatter.html) in place (git history has version 1).

- **DOI lookup:** paste a DOI or doi.org link and press Look up. It fills every field from Crossref's public API. Bad input and unknown DOIs get a plain error message.
- **Reference list:** "Add to reference list" saves the current source. The list is sorted by author, re-renders in APA, MLA or Chicago, and each entry can be edited or removed. It persists in the browser.
- **Export:** copy the whole bibliography (keeps italics and hanging indents when pasted into Word or Docs), or download it as BibTeX (`references.bib`) or RIS (`references.ris`) for Zotero, Mendeley or EndNote.
- **Import:** paste BibTeX or RIS entries to add them to the list.

Testing (headless Chromium): bad-DOI validation, 2 BibTeX and 1 RIS entries imported and formatted, BibTeX and RIS exports downloaded with the right fields, list survived a reload. The sandbox I ran in can't reach api.crossref.org, so I tested the lookup against a mocked Crossref response (fields filled, 404 handled); the live lookup still needs a human test. I also fixed a bug from version 1: fields meant to hide for a given source type stayed visible because a CSS rule overrode the `hidden` attribute. No console errors.

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

Third pass on [citation-formatter.html](citation-formatter.html):

- **In-text citations:** a new panel shows the parenthetical form for APA, MLA and Chicago, plus APA's narrative form, each with its own Copy button. For example: (Smith & Doe, 2024), (Smith and Doe 45), (Smith and Doe 2024, 45).
- **Duplicate check:** adding a source that's already in the list is blocked with a message, and imports skip entries you already have (matched by DOI, or by title plus year).
- **Shortcuts:** `/` jumps to the DOI box, and Ctrl/⌘+Enter adds the current source to the list.

Testing (headless Chromium): in-text forms correct for the two-author sample; adding the same source twice kept one entry; importing two BibTeX entries with one duplicate imported one and skipped one; `/` focused the DOI box. No horizontal scrolling at 390px phone width, no console errors.
