ROSA booking app

A React Native mobile app for booking hospital appointments. 

---

How to run the app:

1. Install dependencies: npm install

2. Start the app (Expo or React Native CLI): npm start

3. Open in simulator or on a device.

---

Project structure:

/src
  /components       # Reusable UI components
  /data             # Mock data
  /screens          # The screens of the app
  /styles           # Different files with separated stylesheets
App.tsx		    # Navigation setup

---

Trade-offs:
- Simplified availability: all days are considered equally available.
- Randomly made ~30% of slots unavailable for realism.
- Practitioners assigned randomly for a given site.
- Navigation stack reset on booking confirmation or cancellation for logical flow.
- No Nx workspace used to move faster; would be considered for larger, multi-app projects.
- I used React Native UI components instead of creating new ones from scratch to simplify the process.

---

Improvements with more time:

- I'd use the staging API provided in the file. 
- I wasn't able to run the test because the latest Expo + React Native version is ahead of Jest support. I tried resolving version conflicts but I didn't have time to make it work: with more time, I’d solve this and add a navigation test.
- I'd implement basic accesibility: font scaling and readable labels, as accessibility is something I give special importance to.
- In addition, if I had to redo the project, I'd put extra attention on maintaining organized and well explained GitHub commits.

---

Data contract:

Data was mocked and stored in /data/mock.tsx 

I used the following types:

Motive = {id: number; name: string;}
ConsultationSites: {id : string, name : string, city : string, practitioners: practitioner[]}
Practitioner: {name:string}

The time slots were generated dynamically: 08:00–19:00, 14 days, 30-min intervals. This was done in the Availabilities screen file. 30% of slots were randomly marked unavailable.

After having selected a motive, a site and a time slot, a practitioner is randomly assigned between those existing in the chosen site. 

---

Nx usage:

I skipped Nx because the scope is small and adding a monorepo tool would slow initial delivery and not be proportionally useful. With more time and scale, I would use Nx for structure and caching.
