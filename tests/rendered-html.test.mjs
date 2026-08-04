import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname = "/") {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the TYR promotional home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>TYR — Position\. Angle\. Strike\.<\/title>/i);
  assert.match(html, /POSITION\./);
  assert.match(html, /YOUR TANK/);
  assert.match(html, /href="\/tanks#tank-roster"/);
  assert.match(html, /Wishlist on Steam/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders the vehicle database", async () => {
  const response = await render("/tanks");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Tank Database — TYR<\/title>/i);
  assert.match(html, /18 TANKS/);
  assert.match(html, /EVERY ANGLE/);
  assert.match(html, /Inspect Penetration/);
  assert.match(html, /Kestrel/);
  assert.match(html, /NATIVE COMPONENTS/);
});

test("renders the developers page without reference-site links", async () => {
  const response = await render("/developers");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>The Developers — TYR<\/title>/i);
  assert.match(html, /BUILT TO/);
  assert.match(html, /THE CREW/);
  assert.doesNotMatch(html, /playtyr\.com|tyrhq\.com|stoke\.games\/team/i);
});
