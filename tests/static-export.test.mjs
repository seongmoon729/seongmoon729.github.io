import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports the research homepage and CV for GitHub Pages", async () => {
  const html = await readFile(new URL("out/index.html", projectRoot), "utf8");

  assert.match(html, /<h1>Seongmoon Jeong<\/h1>/);
  assert.match(html, /agentic AI and agent harnesses/);
  assert.match(html, /Publications.*Experience.*Honors &amp; Awards/s);
  assert.equal([...html.matchAll(/class="pub row"/g)].length, 9);
  assert.match(html, /four servers with 16 RTX 2080 Ti GPUs/);
  assert.match(html, /href="\/Seongmoon_Jeong_CV\.pdf"/);
  assert.match(html, /src="\/portrait\.jpg"/);
  for (const file of ["Seongmoon_Jeong_CV.pdf", "portrait.jpg"]) {
    const [exported, original] = await Promise.all(
      ["out", "public"].map((directory) =>
        readFile(new URL(`${directory}/${file}`, projectRoot))
      )
    );
    assert.deepEqual(exported, original);
  }
});
