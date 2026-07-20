import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports the academic CV as a static GitHub Pages site", async () => {
  const html = await readFile(new URL("out/index.html", projectRoot), "utf8");

  assert.match(html, /<title>Seongmoon Jeong/);
  assert.match(html, /Machine perception, before and after compression/);
  assert.match(html, /Lead Student Researcher/);
  assert.match(html, /Download CV \(PDF\)/);
  assert.match(html, /href="\/Seongmoon_Jeong_CV\.pdf"/);
  assert.match(html, /download="Seongmoon_Jeong_CV\.pdf"/);
  await access(new URL("out/Seongmoon_Jeong_CV.pdf", projectRoot));
});
