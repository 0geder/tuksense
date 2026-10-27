# TukSense

Videos of the SW-7 system on the TUKZIE electric cargo trike: the road test of 27 October 2026 and the stages of its development.

Live at https://tuksense.site

## What the project is

"Embedded Telemetry with Road-Surface Characterisation and Camera-Based Hazard Detection for the TUKZIE Electric Trike", Samson Okuthe, EEE4022S final-year project, University of Cape Town, 2026. Supervisor: A/Prof Simon Winberg; co-supervisor: Sampath Jayalath.

The system measures the trike's ride and powertrain vibration with two IMU nodes at 200 Hz, reads the battery, GNSS and LTE through a telemetry unit, detects people and vehicles with a camera and time-of-flight sensors at each end, and shows it all on the trike's existing dashboard. Records are logged on the vehicle and replayed to a database when coverage returns.

## The page

One page, read from the top down: the working system on the road first, then the journey back to where it began.

| Stage | Dates |
| --- | --- |
| Working: road test | 27 Oct 2026 |
| Road test and dashboard (incl. a time-lapse of the dashboard) | 27 Oct 2026 |
| Integration on the trike | 26 to 27 Oct 2026 |
| Dashboard and cameras on the bench | 3 to 17 Oct 2026 |
| Electronics and first builds | 30 Sep to 2 Oct 2026 |
| Start: the brief | Jul to Sep 2026 |

Clicking a stage plays its videos on the same page.

## Files

- `index.html`, `style.css`, `app.js`: the page (vanilla HTML, CSS and JS, no build step).
- `videos/`: H.264 MP4, 720p at most, audio removed, each with a JPG poster.
- `images/`: photos, 1600 px at most.

Deployed as a static site on Vercel (framework preset: Other, no build command).

## Privacy

Clips and photos showing a face or a readable number plate are excluded, and all audio is removed, in line with the project's ethics approval.

## More

The full report, code and data are in the project repository: https://github.com/0geder/Tukzie-HPEC-HUD
