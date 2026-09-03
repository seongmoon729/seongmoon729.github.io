import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports the academic CV as a static GitHub Pages site", async () => {
  const html = await readFile(new URL("out/index.html", projectRoot), "utf8");

  assert.match(html, /<title>Seongmoon Jeong/);
  assert.match(html, /Machine perception, before and after compression/);
  assert.match(html, /Lead Student Researcher/);
  assert.match(html, /Ph\.D\. in Artificial Intelligence \(Expected February 2027\)/);
  assert.match(html, /Available for full-time roles starting March 2027\./);
  assert.doesNotMatch(html, /TCSVT|Under review/);
  assert.match(html, /Machine-Oriented Image Compression:/);
  assert.match(html, /Task-Aware Preprocessing and JPEG Coding:/);
  assert.match(html, /RAW-Domain Machine Vision:/);
  assert.doesNotMatch(html, /System-Aware Vision Acceleration/);
  assert.match(html, /Research engineering/);
  assert.match(html, /Multi-node experiment orchestration/);
  assert.match(html, /four servers with 16 RTX 2080 Ti GPUs/);
  assert.match(html, /sharding training and evaluation datasets across workers/);
  assert.match(html, /TensorFlow Datasets and Grain/);
  assert.match(html, /Docker, Conda\/Mamba, uv, and Pixi/);
  assert.doesNotMatch(html, /Tailscale/);
  assert.doesNotMatch(html, /Google Calendar/);
  for (const code of ["C1", "C2", "C3", "C4", "C5", "C6", "J1", "J2"]) {
    assert.match(html, new RegExp(`id="full-publication-${code}"`));
  }
  assert.match(html, /href="#publication-C5"/);
  assert.match(html, /href="https:\/\/iris\.skku\.edu\/authors\/mp02_seongmoon_jeong\/"/);
  assert.match(html, /<strong><a href="https:\/\/iris\.skku\.edu\/authors\/mp02_seongmoon_jeong\/">Seongmoon Jeong<\/a><\/strong>/);
  assert.match(html, /Yulhwa Kim/);
  assert.match(html, /Hyon-Gon Choo/);
  assert.match(html, /Download CV \(PDF\)/);
  assert.match(html, /href="\/Seongmoon_Jeong_CV\.pdf"/);
  assert.match(html, /download="Seongmoon_Jeong_CV\.pdf"/);
  await access(new URL("out/Seongmoon_Jeong_CV.pdf", projectRoot));
});
