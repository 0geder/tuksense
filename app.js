// Stages top (result) to bottom (start). v = video name in videos/, i = image name in images/.
var stages = [
  ["Working", "Road test, 27 Oct 2026", [
    { v: "road-test-driving", c: "Road test, 27 October 2026: the trike driven in a car park with the telemetry, cameras and dashboard running." },
    { v: "overview", c: "The project in one minute: from the bench to the road test of 27 October 2026." }]],
  ["Road test and dashboard", "27 Oct 2026", [
    { v: "dashboard-timelapse", c: "Dashboard screens recorded every second from 11:30 to 12:40 on 27 October 2026, shown at speed." },
    { v: "dashboard-on-trike-outdoors", c: "Dashboard screen on the trike outdoors before the run. 27 Oct 2026" }]],
  ["Integration on the trike", "26 to 27 Oct 2026", [
    { v: "pods-wiring-deck", c: "Yellow sensor pods and wiring on the trike deck. 26 Oct 2026" },
    { v: "map-page-on-trike", c: "Map page on the dashboard screen mounted at the handlebars. 26 Oct 2026" },
    { i: "enclosure-boards", c: "Printed yellow enclosure with the boards fitted inside. 26 Oct 2026" },
    { i: "enclosure-pi-ribbon", c: "Enclosure holding the Raspberry Pi, with the camera ribbon cable. 26 Oct 2026" },
    { i: "trike-front-wiring", c: "Front of the trike with wiring at the handlebars. 26 Oct 2026" },
    { i: "measuring-pod-positions", c: "Tape-measuring pod positions on the trike. 27 Oct 2026" }]],
  ["Dashboard and cameras on the bench", "3 to 17 Oct 2026", [
    { v: "camera-feed-bench", c: "Front camera feed on the dashboard screen, bench set-up. 12 Oct 2026" },
    { v: "camera-on-dashboard-bench", c: "Camera image shown on the dashboard screen, boards on the bench. 3 Oct 2026" },
    { v: "rear-camera-street", c: "Enclosure at a window and the rear camera view of the street on the dashboard. 17 Oct 2026" }]],
  ["Electronics and first builds", "30 Sep to 2 Oct 2026", [
    { i: "bms-app", c: "Battery management app reading the trike pack: 60%, 74.77 V. 30 Sep 2026" }]],
  ["Start", "Late Jul to Sep 2026", [
    { i: "project-brief", c: "Project brief page with the windshield HUD concept render. 22 Jul 2026" }]]
];
// Month shown beside each card on hover, read as a timeline from top (now) to bottom (start)
var when = ["October 2026: road test", "October 2026", "October 2026", "October 2026", "September to October 2026", "Late July to September 2026: the project begins"];
var $ = function (id) { return document.getElementById(id); };
var thumb = function (it) { return it.v ? "videos/" + it.v + ".jpg" : "images/" + it.i + ".jpg"; };
var path = $("path"), svg = $("links"), dlg = $("player"), cur = 0;

// Build the zigzag cards
stages.forEach(function (s, k) {
  var a = document.createElement("article");
  a.dataset.when = when[k];
  a.className = "card " + (k % 2 ? "right" : "left") + (k === 0 ? " working" : "") + (k === stages.length - 1 ? " start" : "");
  var m0 = s[2][0], media = m0.v
    ? '<video class="loop" muted loop playsinline preload="none" poster="' + thumb(m0) + '" src="videos/' + m0.v + '.mp4"></video>'
    : '<img src="' + thumb(m0) + '" alt="">';
  a.innerHTML = '<button class="card-main" data-j="0" aria-label="Open ' + s[0] + '">' + media + '</button>' +
    "<h2>" + s[0] + '</h2><p class="date">' + s[1] + "</p>" +
    (s[2].length > 1 ? '<div class="thumbs">' + s[2].map(function (it, j) {
      return '<button data-j="' + j + '" aria-label="' + it.c + '">' + (it.v
        ? '<video class="loop" muted loop playsinline preload="none" poster="' + thumb(it) + '" src="videos/' + it.v + '.mp4"></video>'
        : '<img src="' + thumb(it) + '" alt="" loading="lazy">') + '</button>';
    }).join("") + "</div>" : "");
  a.querySelectorAll("button").forEach(function (b) { b.onclick = function () { open(k, +b.dataset.j); }; });
  path.appendChild(a);
});

// The one-minute overview, on the right beside the Working card (not part of the zigzag)
var side = document.createElement("aside");
side.className = "side-card";
side.innerHTML = '<button class="card-main" aria-label="Play the project in one minute"><video class="loop" muted loop playsinline preload="none" poster="videos/overview.jpg" src="videos/overview.mp4"></video></button><h2>The project in one minute</h2><p class="date">Bench to road test, with music</p>';
side.querySelector("button").onclick = function () { open(0, 1); };
path.appendChild(side);

// The run itself (12:14 to 12:38 on 27 October), beside the "Road test and dashboard" card
var run = document.createElement("aside");
run.className = "side-card run-card";
run.innerHTML = '<button class="card-main" aria-label="Play the run"><video class="loop" muted loop playsinline preload="none" poster="videos/the-run.jpg" src="videos/the-run.mp4"></video></button><h2>The run, 12:14 to 12:38</h2><p class="date">The dashboard all the way out over the rough strip and back to the lab</p>';
run.querySelector("button").onclick = function () { cur = 1; $("pl-title").textContent = "The run, 27 Oct 2026"; $("pl-date").textContent = "12:14 to 12:38, shown at 30 times speed"; $("pl-thumbs").innerHTML = ""; dlg.showModal();
  $("pl-stage").innerHTML = '<video controls autoplay loop playsinline preload="metadata" poster="videos/the-run.jpg" src="videos/the-run.mp4"></video>';
  $("pl-cap").textContent = "Speed on the Drive page heading out, then the front and rear cameras on the rough strip detecting trucks, cars and people, and back to the lab. Camera views of nearby cars are blurred."; };
path.appendChild(run);

// Diagonal links between card corners
function draw() {
  var box = path.getBoundingClientRect(), cards = path.querySelectorAll(".card"), h = "";
  var r = [].map.call(cards, function (c) { var q = c.getBoundingClientRect(); return { l: q.left - box.left, r: q.right - box.left, t: q.top - box.top, b: q.bottom - box.top }; });
  for (var k = 0; k < r.length - 1; k++) {
    var x1 = k % 2 ? r[k].l : r[k].r, x2 = k % 2 ? r[k + 1].r : r[k + 1].l;
    h += '<line class="link" x1="' + x1 + '" y1="' + r[k].b + '" x2="' + x2 + '" y2="' + r[k + 1].t + '"/>';
  }
  if (cards[1]) { run.style.top = (r[1].t) + "px"; }
  svg.setAttribute("viewBox", "0 0 " + box.width + " " + box.height);
  svg.innerHTML = h;
}
addEventListener("resize", draw);
addEventListener("load", function () { draw(); scrollTo(0, 0); });
path.querySelectorAll("img").forEach(function (im) { im.addEventListener("load", draw); });
path.querySelectorAll("video").forEach(function (v) { v.addEventListener("loadedmetadata", draw); });

// Card videos play muted on a loop while on screen, and pause when scrolled away
var io = "IntersectionObserver" in window && new IntersectionObserver(function (es) {
  es.forEach(function (e) { var v = e.target; if (e.isIntersecting) { v.play().catch(function () {}); } else { v.pause(); } });
}, { threshold: 0.25 });
path.querySelectorAll("video.loop").forEach(function (v) { v.muted = true; v.defaultMuted = true; if (io) { io.observe(v); } else { v.autoplay = true; v.play().catch(function () {}); } });
draw();

// In-page player
function show(j) {
  var it = stages[cur][2][j];
  $("pl-stage").innerHTML = it.v
    ? '<video controls autoplay loop playsinline preload="metadata" poster="videos/' + it.v + '.jpg" src="videos/' + it.v + '.mp4"></video>'
    : '<img src="images/' + it.i + '.jpg" alt="">';
  $("pl-cap").textContent = it.c;
  $("pl-thumbs").querySelectorAll("button").forEach(function (b, n) { b.setAttribute("aria-current", n === j); });
}
function open(k, j) {
  var s = stages[cur = k];
  $("pl-title").textContent = s[0];
  $("pl-date").textContent = s[1];
  $("pl-thumbs").innerHTML = s[2].length < 2 ? "" : s[2].map(function (it, n) {
    return '<button data-n="' + n + '"' + (it.v ? ' class="is-video"' : "") + ' aria-label="' + it.c + '"><img src="' + thumb(it) + '" alt=""></button>';
  }).join("");
  $("pl-thumbs").querySelectorAll("button").forEach(function (b) { b.onclick = function () { show(+b.dataset.n); }; });
  dlg.showModal();
  show(j);
}
$("pl-close").onclick = function () { dlg.close(); };
dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", function () { $("pl-stage").innerHTML = ""; });

// Sound: browsers only allow it after the visitor interacts, so videos start muted and the
// first click, tap or key press (or the Sound button) turns sound on for every video on the page
var soundOn = false, sb = document.createElement("button");
sb.className = "sound-btn"; sb.type = "button";
function setSound(on) {
  soundOn = on;
  document.querySelectorAll("video").forEach(function (v) { v.muted = !on; });
  sb.textContent = on ? "Sound on" : "Sound off";
  sb.setAttribute("aria-pressed", on);
}
sb.onclick = function (e) { e.stopPropagation(); setSound(!soundOn); };
document.body.appendChild(sb);
setSound(false);
function firstGesture() { if (!soundOn) { setSound(true); } removeEventListener("pointerdown", firstGesture); removeEventListener("keydown", firstGesture); }
addEventListener("pointerdown", firstGesture);
addEventListener("keydown", firstGesture);
new MutationObserver(function () { document.querySelectorAll("#pl-stage video").forEach(function (v) { v.muted = !soundOn; }); })
  .observe(document.getElementById("pl-stage"), { childList: true });
