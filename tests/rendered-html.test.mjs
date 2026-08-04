import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function pageFile(pathname = "/") {
  const normalized = pathname.replace(/^\/+|\/+$/g, "");
  return new URL(`../dist/client/${normalized ? `${normalized}/` : ""}index.html`, import.meta.url);
}

test("renders the TYR promotional home page", async () => {
  const html = await readFile(pageFile(), "utf8");
  assert.match(html, /<title>TYR — Position\. Angle\. Strike\.<\/title>/i);
  assert.match(html, /POSITION\./);
  assert.match(html, /YOUR TANK/);
  assert.match(html, /href="\/tanks\/#tank-roster"/);
  assert.match(html, /Wishlist on Steam/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders the vehicle database", async () => {
  const html = await readFile(pageFile("/tanks/"), "utf8");
  assert.match(html, /<title>Tank Database — TYR<\/title>/i);
  assert.match(html, /PILOT HEAVY/);
  assert.match(html, /EVERY ANGLE/);
  assert.match(html, /Inspect Penetration/);
  assert.match(html, /Kestrel/);
  assert.match(html, /NATIVE COMPONENTS/);
});

test("renders the developers page without reference-site links", async () => {
  const html = await readFile(pageFile("/developers/"), "utf8");
  assert.match(html, /<title>The Developers — TYR<\/title>/i);
  assert.match(html, /BUILT TO/);
  assert.match(html, /THE CREW/);
  assert.doesNotMatch(html, /playtyr\.com|tyrhq\.com|stoke\.games\/team/i);
});
