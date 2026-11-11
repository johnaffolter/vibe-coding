#!/usr/bin/env node
// Check every prompts.md against CONVENTIONS.md as data: one row per project folder, one row per prompt per project.
//   node tools/check-prompts.js            list problems (exit 1 if any)
//   node tools/check-prompts.js --json     the same as JSON
//   node tools/check-prompts.js --export   write elements/descriptors.jsonld, shapes.ttl and records.nq
// No dependencies. The rules: fields the conventions call required, values from their fixed lists (Status,
// Reusability, Story value, Verified), tags from the tag table, and keys: a folder appears once, a prompt number
// appears once per project.
const fs = require("node:fs"), path = require("node:path");
const E = require("./si-elements"), V = require("./vibe-elements");
const root = path.join(__dirname, ".."), args = process.argv.slice(2);
const data = V.read(root), descs = V.descriptors(data.vocabulary);
const rowsOf = (d) => (d.id === "collection:vibe-project" ? data.projects : data.prompts);
const label = (d, r) => (d.id === "collection:vibe-project" ? r.folder : `${r.project} prompt ${r.number}${r.purpose ? ` (${r.purpose})` : ""}`);

if (args.includes("--export")) {
  const out = path.join(root, "elements"); fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, "descriptors.jsonld"), JSON.stringify(E.toJsonLd(descs), null, 1) + "\n");
  fs.writeFileSync(path.join(out, "shapes.ttl"), E.toShacl(descs));
  fs.writeFileSync(path.join(out, "records.nq"), descs.flatMap((d) => rowsOf(d).flatMap((r) => E.rowToQuads(d, r, { targets: { "collection:vibe-project": true } }).quads)).join("\n") + "\n");
  console.log(`elements: wrote descriptors.jsonld, shapes.ttl and records.nq (${data.projects.length} projects, ${data.prompts.length} prompts)`);
}
const report = descs.map((d) => {
  const rows = rowsOf(d), problems = E.checkRows(d, rows, { lookup: (t, v) => t !== "collection:vibe-project" || data.projects.some((p) => p.folder === v) });
  return { element: d.id, rows: rows.length, problems: problems.map((p) => ({ ...p, where: p.row !== null && rows[p.row] ? label(d, rows[p.row]) : null })) };
});
if (args.includes("--json")) console.log(JSON.stringify(report, null, 1));
else for (const r of report) { console.log(`${r.element}: ${r.rows} rows, ${r.problems.length} problem(s)`); for (const p of r.problems) console.log(`  - ${p.where ? `${p.where}: ` : ""}${p.message.replace(/ in row \d+/, "")}`); }
process.exitCode = report.some((r) => r.problems.length) ? 1 : 0;
