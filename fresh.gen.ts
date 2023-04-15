// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.tsx";
import * as $1 from "./routes/account.tsx";
import * as $2 from "./routes/admin.tsx";
import * as $3 from "./routes/api/inngest.ts";
import * as $4 from "./routes/api/submit.ts";
import * as $5 from "./routes/api/unread_messages.ts";
import * as $6 from "./routes/challenges.tsx";
import * as $7 from "./routes/challenges/challenge/[challenge_id]/index.tsx";
import * as $8 from "./routes/challenges/challenge/[challenge_id]/play.tsx";
import * as $9 from "./routes/index.tsx";
import * as $10 from "./routes/messages.tsx";
import * as $11 from "./routes/messages/[message_id]/delete.tsx";
import * as $12 from "./routes/play.tsx";
import * as $13 from "./routes/players/[name].tsx";
import * as $14 from "./routes/practice.tsx";
import * as $15 from "./routes/sign-in.tsx";
import * as $16 from "./routes/sign-out.tsx";
import * as $17 from "./routes/stats.tsx";
import * as $18 from "./routes/stats/daily/[date].tsx";
import * as $19 from "./routes/stats/past_winners.tsx";
import * as $20 from "./routes/stats/this_week.tsx";
import * as $21 from "./routes/stats/today.tsx";
import * as $22 from "./routes/stats/weekly/[startDay].tsx";
import * as $23 from "./routes/submissions/[id]/playback.tsx";
import * as $24 from "./routes/unsubscribe.tsx";
import * as $$0 from "./islands/AllNotification.tsx";
import * as $$1 from "./islands/confetti.tsx";
import * as $$2 from "./islands/game.tsx";
import * as $$3 from "./islands/playback.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.tsx": $0,
    "./routes/account.tsx": $1,
    "./routes/admin.tsx": $2,
    "./routes/api/inngest.ts": $3,
    "./routes/api/submit.ts": $4,
    "./routes/api/unread_messages.ts": $5,
    "./routes/challenges.tsx": $6,
    "./routes/challenges/challenge/[challenge_id]/index.tsx": $7,
    "./routes/challenges/challenge/[challenge_id]/play.tsx": $8,
    "./routes/index.tsx": $9,
    "./routes/messages.tsx": $10,
    "./routes/messages/[message_id]/delete.tsx": $11,
    "./routes/play.tsx": $12,
    "./routes/players/[name].tsx": $13,
    "./routes/practice.tsx": $14,
    "./routes/sign-in.tsx": $15,
    "./routes/sign-out.tsx": $16,
    "./routes/stats.tsx": $17,
    "./routes/stats/daily/[date].tsx": $18,
    "./routes/stats/past_winners.tsx": $19,
    "./routes/stats/this_week.tsx": $20,
    "./routes/stats/today.tsx": $21,
    "./routes/stats/weekly/[startDay].tsx": $22,
    "./routes/submissions/[id]/playback.tsx": $23,
    "./routes/unsubscribe.tsx": $24,
  },
  islands: {
    "./islands/AllNotification.tsx": $$0,
    "./islands/confetti.tsx": $$1,
    "./islands/game.tsx": $$2,
    "./islands/playback.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
