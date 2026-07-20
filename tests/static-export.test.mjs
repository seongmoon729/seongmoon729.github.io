import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports the academic CV as a static GitHub Pages site", async () => {
  const html = await readFile(new URL("out/index.html", projectRoot), "utf8");

  assert.match(html, /<title>Seongmoon Jeong/);
  assert.match(html, /Project Experience/);
  assert.match(html, /Lead Student Researcher/);
  assert.match(html, /Download TeX PDF/);
  await access(new URL("out/cv.pdf", projectRoot));
});
