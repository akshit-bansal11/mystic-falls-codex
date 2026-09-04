This project inherits every rule in ~/.claude/CLAUDE.md. Rules below add to or override it. Nothing here restates it.

- The content is finished. It was fact-checked in 153 corrections before this repo
  existed; do not re-litigate franchise facts, and do not "correct" a date without
  checking `DECISIONS.md` first.
- `_inbox/` in the parent directory is the original source material. It is read-only
  and is not part of this repo.
- No content data may be imported by a client component. The four client components
  are the map viewport, the people search, the theme toggle and the section nav;
  none of them import from `src/data/`. Adding such an import ships the encyclopedia
  to the browser.
