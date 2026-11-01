# Weekly Outreach Report — automated routine

A Claude Routine (scheduled trigger) that replaces the old n8n reminder automation with a native Claude Code routine, per the plan noted in the "To do" sheet's Sep tab ("Migrate existing n8n Reminder automation ... Use Claude Routines/Codex ... Cancel n8n subscription").

## What it does

Every Saturday morning (IST), it:

1. Pulls this week's Upwork activity (proposals, conversations, Connects ledger, boost outcomes, pipeline) via the Upwork MCP.
2. Reads the **"Daily Outreach Tracker"** tab of the [To do sheet](https://docs.google.com/spreadsheets/d/1haslIMk5T7TVxGCii8NMB5BgXTPsmvkQyk7J5f6HboE) (columns: Date, Upwork apps sent, LinkedIn connection requests sent, LinkedIn DMs sent, Replies, Positive Replies, Content Posted — any new outreach-count column added later is picked up automatically). It exports the sheet as .xlsx and parses it with openpyxl rather than using the Drive connector's `read_file_content`, which only ever returns a fixed ~7-row preview per tab and doesn't reflect current data.
3. Scans Gmail/Google Calendar for this week's sales/discovery calls — Calendly "15 min system audit" bookings (`notifications@calendly.com`) and manually-booked "`<Company> : Discovery call`" calendar invites — and matches each one to its Fathom meeting recap (`no-reply@fathom.video`) to pull a summary, next step, and an opportunity-status read (Hot/Warm/Cold/Follow-up needed). Internal/ops meetings (standups, syncups, retros) are excluded from this section.
4. Sums each outreach channel for the last 7 days and compares it to the 7 days before that.
5. Builds at least one chart (a day-by-day bar chart of proposals/DMs across the 14-day window, plus a 4-week trend chart when the data supports it) with matplotlib and embeds it inline in the email.
6. Writes 3-5 concrete insight bullets: what grew/stayed consistent ("what worked") vs. what dropped or went to zero ("what didn't"), plus exactly 5 ranked moves for next week, and grades last week's moves against this week's actual data.
7. Renders a branded HTML report (Anvayan navy/orange/cream theme) with per-channel metrics, week-over-week deltas, and the inline chart(s).
8. Emails it to `abhas@anvayan.com` via Gmail.

It does not modify the spreadsheet, calendar, or any Upwork proposal/message — read-only everywhere except the final email send.

## Schedule

- **Cron:** `CRON_TZ=Asia/Kolkata 54 6 * * 6` — every Saturday at 6:54 AM IST (a few minutes before 7 AM to avoid the on-the-hour scheduling pile-up).
- **Trigger ID:** `trig_019HePVxU3r39JfT9sWPQgYj`
- **Mode:** bound to this Claude Code session (`session_014Te4Lz3UjYgiges4QSSCmc`) so it reuses the session's existing Gmail + Google Drive + Google Calendar + Upwork connector grants — this org's routine API can't attach connectors to a trigger that spawns a fresh session on each fire (confirmed Nov 2026: `create_trigger`'s `connectors` param is rejected org-wide), so a self-bound routine is the only way to keep it connector-enabled without a manual step in the claude.ai Routines UI.

### Known reliability limitation

Because the routine is bound to a persistent session rather than a fresh one, it depends on that session's backing worker being available when the cron fires. This session's worker has restarted multiple times since the routine was created, which has caused the report to arrive late at least twice (a worker restart cut off the Oct 25 run mid-way; the Nov 1 run for the week of Oct 25–31 fired almost 36 hours after its scheduled Oct 31 06:54 IST slot). The routine always completes successfully once the session resumes — nothing is lost — but "on time" cannot currently be guaranteed given this org's restriction on attaching connectors to fresh-session triggers. If that restriction is lifted, re-create this trigger with `create_new_session_on_fire: true` and `connectors: ["Gmail","Google Drive","Google Calendar","Upwork"]` instead of a persistent-session binding, which should fix both the timing and the connector dependency at once.

## Changing it

Use `update_trigger` / `delete_trigger` (Claude Code Remote MCP) with the trigger ID above, or ask Claude to do it from a session that can reach this account's routines. If the bound session ever gets archived/deleted, recreate the routine from a live session that already has the Gmail, Google Drive, Google Calendar, and Upwork connectors enabled.
