# Drift

Open items where a document and reality disagree. The code wins; entries are deleted
when the disagreement is resolved, never struck through.

## The pipeline docs still describe a static/Pagey pipeline

`F:\projects\mini-projects\CLAUDE.md` and `.claude/skills/mini-project/SKILL.md` both
say a static single-page project is plain HTML/CSS/JS deployed to Pagey. This project
is a Next.js app on Vercel, on explicit instruction. They also specify a commit prefix
scheme that CD-SPEC overrides.

Those files live in a directory that is **not a git repo**, so the correction cannot
be committed there. Not fixed because it was not asked for.

## The recorded source transcript does not exist

The session handoff and the Notion project page both cite
`F:\projects\mini-projects\_inbox\the-mystic-falls-codex.md`, with a warning about its
leading `the-`. That file is not on disk; `_inbox` contains only the 15 project files.
The "content decisions reconstructed from the transcript" recorded in Notion therefore
cannot be traced to their source. They are preserved as written, and flagged as
unverifiable rather than deleted.

## The Notion page's tab-strip diagnosis is wrong

It records the fix as adding `role="tab"`. That would have been incorrect; see
`DECISIONS.md`. The page has not been corrected.

## The Notion page still describes a three-way content duplication

It records the project as shipping a multi-page build, a single-file build and a JSON
export, roughly 750 KB duplicated. This repo ships one build. The single-file HTML and
the JSON export were dropped on instruction.
