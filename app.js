// Stages top (result) to bottom (start). v = video name in videos/, i = image name in images/.
var stages = [
  ["Working", "Road test, 27 Oct 2026", [
    { v: "road-test-driving", c: "Road test, 27 October 2026: the trike driven in a car park with the telemetry, cameras and dashboard running." },
    { v: "overview", c: "The project in one minute: from the bench to the road test of 27 October 2026." }]],
  ["Road test and dashboard", "27 Oct 2026", [
    { v: "dashboard-timelapse", c: "Dashboard screens recorded every second from 11:30 to 12:40 on 27 October 2026, shown at speed." },
    { v: "dashboard-on-trike-outdoors", c: "Dashboard screen on the trike outdoors before the run. 27 Oct 2026" }]],
  // From here down, one card per development stage, newest first; s[3] is the stage's story
  ["Ready for run 2", "21 to 26 Oct 2026", [
    { i: "units-complete", c: "Both units finished: Raspberry Pi, ESP32 and wiring in the printed yellow enclosures. 21 Oct 2026" },
    { i: "units-closed", c: "The front unit closed up, with its vented lid. 21 Oct 2026" },
    { i: "mounted-at-handlebar", c: "The front unit fitted at the handlebars. 21 Oct 2026" },
    { v: "run2-trike-in-lab", c: "The trike in the lab with everything fitted. 22 Oct 2026" },
    { i: "front-node-wiring", c: "The front sensor node wired in behind the headlight. 22 Oct 2026" },
    { i: "rear-unit-deck", c: "The rear unit on the trike deck. 22 Oct 2026" },
    { v: "reprinting", c: "Reprinting a part on the Prusa Mini. 23 Oct 2026" },
    { i: "rear-board-rewiring", c: "Rewiring the rear unit's telemetry board. 23 Oct 2026" },
    { v: "pods-wiring-deck", c: "Yellow sensor pods and wiring on the trike deck. 26 Oct 2026" },
    { v: "map-page-on-trike", c: "Map page on the dashboard screen mounted at the handlebars. 26 Oct 2026" },
    { i: "enclosure-boards", c: "Printed yellow enclosure with the boards fitted inside. 26 Oct 2026" },
    { i: "enclosure-pi-ribbon", c: "Enclosure holding the Raspberry Pi, with the camera ribbon cable. 26 Oct 2026" },
    { i: "trike-front-wiring", c: "Front of the trike with wiring at the handlebars. 26 Oct 2026" },
    { i: "measuring-pod-positions", c: "Tape-measuring pod positions on the trike. 27 Oct 2026" }],
    "Road test 1 showed what was missing. Over the next week the ESP32 got its own battery, the rear motion sensor moved to its own board, LTE publishing and voice commands came in, and a phone gave the speed. The system check first read READY at 20:35 on 26 October."],
  ["Road test 1", "19 Oct 2026", [
    { v: "rt1-mounting", c: "Mounting the units on the trike for the first time. 19 Oct 2026" },
    { v: "rt1-install-tour", c: "Walk-round of the install: units on the deck, the dashboard showing DRIVE, the camera at the front. 19 Oct 2026" },
    { i: "rt1-deck", c: "Units, battery boxes and wiring on the trike deck. 19 Oct 2026" },
    { i: "rt1-dashboard-handlebar", c: "The dashboard screen at the handlebars before the drive. 19 Oct 2026" },
    { v: "rt1-driver-in-hall", c: "Yusuf, the driver, on the trike in the lab before the drive. 19 Oct 2026" },
    { v: "rt1-out-the-door", c: "Taking the trike out of the lab. 19 Oct 2026" },
    { v: "rt1-drive-off", c: "The trike driving off on the first road session. 19 Oct 2026" }],
    "The first time everything rode on the trike. The recorder ran for 108.6 minutes, the motion sensors held 200 Hz, the battery delivered up to 46.9 A and the front camera raised 1,342 alerts. There was no GPS fix all session, which is why a second run was needed."],
  ["Window test", "17 Oct 2026", [
    { v: "window-test-1", c: "The enclosure at a window, looking out at the street, before it could go on the trike. 17 Oct 2026" },
    { v: "rear-camera-street", c: "Enclosure at a window and the rear camera view of the street on the dashboard. 17 Oct 2026" },
    { v: "window-test-2", c: "Switching the dashboard to the front camera, which picks up people at the desk. 17 Oct 2026" }],
    "The trike was not free yet, so the finished unit went to a window instead: a real street with real cars and people, seen through the camera and shown on the dashboard."],
  ["3D printing and building the enclosures", "13 to 16 Oct 2026", [
    { v: "enclosure-printing", c: "Printing the enclosure parts on the lab's Prusa Mini. 15 Oct 2026" },
    { i: "first-parts-fitted", c: "First printed parts, trial-fitted around a board. 13 Oct 2026" },
    { v: "wiring-sensor-boards", c: "Wiring the sensor boards at the lab bench. 15 Oct 2026" },
    { v: "enclosure-assembly", c: "Assembling the enclosure beside the dashboard screen, shown at 4x. 15 Oct 2026" },
    { v: "inside-the-enclosure", c: "The Raspberry Pi and the ESP32 inside the printed enclosure. 15 Oct 2026" },
    { v: "camera-on-laptop", c: "The enclosure's camera image on the laptop. 15 Oct 2026" },
    { v: "closing-the-lid", c: "Screwing down the lid of a printed enclosure, shown at 8x. 15 Oct 2026" },
    { v: "late-night-build", c: "Building the enclosure at 3:53 am, shown at 20x. 16 Oct 2026" },
    { i: "finished-boxes", c: "The finished boxes, wired. 16 Oct 2026" },
    { i: "first-fit-front-fork", c: "First trial fit at the trike's front fork. 16 Oct 2026" }],
    "Every enclosure was printed on a Prusa Mini, whose bed is 180 mm, so bigger parts were split and bolted together. Three days of printing, wiring and closing lids, one night running past 3:53 am."],
  ["Designing the enclosures", "11 to 13 Oct 2026", [
    { i: "whiteboard-sizes", c: "Board and screen sizes measured onto the whiteboard. 12 Oct 2026" },
    { v: "cardboard-mockup", c: "Cardboard mock-up to check sizes before printing. 12 Oct 2026" },
    { i: "screen-stack", c: "The dashboard screen and boards stacked to measure depth. 12 Oct 2026" },
    { i: "camera-on-ruler-mast", c: "The camera on a ruler mast, to set its height and angle. 12 Oct 2026" },
    { i: "cad-front-pod", c: "SolidWorks model of the front sensor pod for the Pi 5." },
    { i: "cad-imu-pod", c: "SolidWorks model of the motion-sensor pod, revision 3." },
    { i: "cad-dashboard-mount", c: "SolidWorks model of the dashboard screen's handlebar mount." }],
    "Measure everything, sketch it, mock it up in cardboard, then model it in SolidWorks and print."],
  ["Dashboard on the bench", "3 to 14 Oct 2026", [
    { v: "camera-feed-bench", c: "Front camera feed on the dashboard screen, bench set-up. 12 Oct 2026" },
    { v: "camera-on-dashboard-bench", c: "Camera image shown on the dashboard screen, boards on the bench. 3 Oct 2026" },
    { v: "dashboard-camera-oct12", c: "Camera page on the dashboard, with the telemetry board on the bench. 12 Oct 2026" },
    { i: "map-page-oct6", c: "First version of the map page. 6 Oct 2026" },
    { v: "map-dashboard", c: "The map page with the route. 11 Oct 2026" },
    { i: "speed-page", c: "The driving page with the speed gauge. 11 Oct 2026" },
    { i: "battery-page", c: "The battery page, 77 % charge. 12 Oct 2026" },
    { v: "charging-page", c: "The charging page. 14 Oct 2026" }],
    "The telemetry joined the trike's own dashboard screen: speed, map, battery, camera and alerts, built and tested on the bench before anything went on the vehicle."],
  ["Home tests", "3 to 6 Oct 2026", [
    { i: "home-bench", c: "The whole system on a desk at home: Pis, ESP32, camera and screen. 3 Oct 2026" },
    { v: "home-test-1", c: "Night test at home: the camera feed on the dashboard screen. 4 Oct 2026" },
    { v: "home-test-2", c: "Night test at home, second run. 4 Oct 2026" },
    { i: "camera-mast-test", c: "The camera in its printed mount on a stand, aimed for a test. 5 Oct 2026" },
    { v: "camera-test-oct6", c: "Camera detection test with the dashboard. 6 Oct 2026" }],
    "Testing did not stop when the lab closed. The whole set-up ran on a desk at home, late into the night."],
  ["Training the pothole detector", "1 to 2 Oct 2026", [
    { i: "training-results", c: "Training curves for the YOLO11n pothole model, trained in Google Colab." },
    { i: "training-pr-curve", c: "Precision and recall of the trained pothole model." },
    { i: "pothole-test-image", c: "A road image used to check the detector." }],
    "A small YOLO11n model was trained in Google Colab on pothole images, including a Stellenbosch set of South African roads, then converted to run on the Raspberry Pi."],
  ["Sensors and the trike opened up", "30 Sep to 2 Oct 2026", [
    { i: "bms-app", c: "Battery management app reading the trike pack: 60%, 74.77 V. 30 Sep 2026" },
    { i: "multimeter-probing", c: "Checking the wiring with a multimeter. 30 Sep 2026" },
    { i: "hall-board", c: "Optocoupler board for the wheel-speed (Hall) signal. 30 Sep 2026" },
    { i: "battery-under-body", c: "Under the body: the battery and the wiring the sensors tap into. 2 Oct 2026" },
    { i: "front-fork", c: "The front fork and headlight, where the front sensors would go. 2 Oct 2026" },
    { i: "sen55", c: "The SEN55 air-quality sensor. 2 Oct 2026" }],
    "The trike's battery management system was read for the first time (60 %, 74.77 V), and the trike was opened up to see where the sensors could go. GNSS was confirmed outdoors on 30 September."],
  ["First prototype", "18 to 28 Sep 2026", [
    { i: "esp32-in-hand", c: "The ESP32 telemetry board. 18 Sep 2026" },
    { i: "imu-board", c: "One of the two motion sensors (IMUs). 18 Sep 2026" },
    { i: "pi-in-the-lab", c: "Setting up the Raspberry Pi in the lab. 21 Sep 2026" },
    { i: "first-bench-layout", c: "The first full bench layout: Raspberry Pi, ESP32, two IMUs and the camera. 22 Sep 2026" },
    { i: "bench-red-board", c: "The bench at night, wiring the 4G board. 24 Sep 2026" },
    { i: "camera-mount-render", c: "Model of the first camera mount." },
    { i: "first-printed-camera-mount", c: "The first printed part: the yellow camera mount. 24 Sep 2026" }],
    "The first working set-up on a bench: the ESP32 reading two motion sensors 200 times a second, and the Raspberry Pi running the camera. The hazard detector had its first live run on 28 September."],
  ["Meeting the trike", "2 to 16 Sep 2026", [
    { i: "handlebar-height", c: "Measuring the trike: handlebar height, about 69 cm. 2 Sep 2026" },
    { i: "seat-width", c: "Measuring the trike: rear seat width, about 89 cm. 2 Sep 2026" },
    { i: "trike-battery", c: "The trike's battery box. 11 Sep 2026" },
    { i: "existing-dashboard", c: "The trike's dashboard screen. 12 Sep 2026" },
    { i: "trike-nameplate", c: "The nameplate: 3.9 kW, 42 km/h. 16 Sep 2026" }],
    "Before designing anything, the trike was measured, photographed and read: its battery, its dashboard screen and its nameplate."],
  ["Start", "Late Jul to Aug 2026", [
    { i: "project-brief", c: "Project brief page with the windshield HUD concept render. 22 Jul 2026" }],
    "The brief asked for a heads-up display on the TUKZIE trike. August went into reading papers, and the first ESP32 firmware was in by 27 August."]
];
// Month shown beside each card on hover, read as a timeline from top (now) to bottom (start)
var when = ["October 2026: road test", "October 2026", "October 2026", "October 2026: road test 1", "October 2026", "October 2026",
  "October 2026", "October 2026", "October 2026", "October 2026", "September to October 2026", "September 2026", "September 2026",
  "July to August 2026: the project begins"];
var $ = function (id) { return document.getElementById(id); };
var thumb = function (it) { return it.v ? "videos/" + it.v + ".jpg" : "images/" + it.i + ".jpg"; };
var path = $("path"), svg = $("links"), dlg = $("player"), cur = 0;

// Build the zigzag cards
stages.forEach(function (s, k) {
  var a = document.createElement("article");
  a.dataset.when = when[k];
  a.className = "card " + (k % 2 ? "right" : "left") + (k === 0 ? " working" : "") + (k >= 2 ? " stage" : "") + (k === stages.length - 1 ? " start" : "");
  if (k >= 2) {
    // Development stage: the story, then every photo and clip as a visible tile
    a.innerHTML = "<h2>" + s[0] + '</h2><p class="date">' + s[1] + "</p>" + (s[3] ? '<p class="story">' + s[3] + "</p>" : "") +
      '<div class="grid' + (s[2].length === 1 ? " one" : "") + '">' + s[2].map(function (it, j) {
        return '<button data-j="' + j + '"' + (it.v ? ' class="is-video"' : "") + ' aria-label="' + it.c + '"><img src="' + thumb(it) + '" alt="" loading="lazy"></button>';
      }).join("") + "</div>";
    a.querySelectorAll("button").forEach(function (b) { b.onclick = function () { open(k, +b.dataset.j); }; });
    path.appendChild(a);
    return;
  }
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
run.innerHTML = '<button class="card-main" aria-label="Play the run"><video class="loop" muted loop playsinline preload="none" poster="videos/the-run.jpg" src="videos/the-run.mp4"></video></button><h2>The run, 12:23 to 12:38</h2><p class="date">The cameras and sensors over the rough strip and back to the lab</p>';
run.querySelector("button").onclick = function () { cur = 1; $("pl-title").textContent = "The run, 27 Oct 2026"; $("pl-date").textContent = "12:23 to 12:38, shown at 30 times speed"; $("pl-thumbs").innerHTML = ""; dlg.showModal();
  $("pl-stage").innerHTML = '<video controls autoplay loop playsinline preload="metadata" poster="videos/the-run.jpg" src="videos/the-run.mp4"></video>';
  $("pl-cap").textContent = "The rear and front cameras on the rough strip detecting trucks, cars and people, with distances updating, all the way back to the lab."; };
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
