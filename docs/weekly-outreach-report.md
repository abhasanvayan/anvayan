# Weekly Outreach Report — automated routine

A Claude Routine (scheduled trigger) that replaces the old n8n reminder automation with a native Claude Code routine, per the plan noted in the "To do" sheet's Sep tab ("Migrate existing n8n Reminder automation ... Use Claude Routines/Codex ... Cancel n8n subscription").

## What it does

Every Sunday, it:

1. Reads the **"Daily Outreach Tracker"** tab of the [To do sheet](https://docs.google.com/spreadsheets/d/1haslIMk5T7TVxGCii8NMB5BgXTPsmvkQyk7J5f6HboE) (columns: Date, Upwork apps sent, LinkedIn connection requests sent, LinkedIn DMs sent, Content Posted — any new outreach-count column added later is picked up automatically).
2. Sums each channel for the last 7 days and compares it to the 7 days before that.
3. Writes 3-5 concrete insight bullets: what grew/stayed consistent ("what worked") vs. what dropped or went to zero ("what didn't").
4. Renders a branded HTML report (Anvayan navy/orange/cream theme, matching the existing "Meeting reminder" emails) with per-channel metrics and week-over-week deltas.
5. Emails it to `abhas@anvayan.com` via Gmail.

It does not modify the spreadsheet — read-only.

## Schedule

- **Cron:** `CRON_TZ=Asia/Kolkata 54 7 * * 0` — every Sunday at 7:54 AM IST (a few minutes before 8 AM to avoid the on-the-hour scheduling pile-up).
- **Trigger ID:** `trig_019HePVxU3r39JfT9sWPQgYj`
- **Mode:** bound to this Claude Code session (`session_014Te4Lz3UjYgiges4QSSCmc`) so it reuses the session's existing Gmail + Google Drive connector grants — this org's routine API can't attach connectors to a fresh session on creation, so a self-bound routine is the only way to keep it connector-enabled without a manual step in the claude.ai Routines UI.

## Changing it

Use `update_trigger` / `delete_trigger` (Claude Code Remote MCP) with the trigger ID above, or ask Claude to do it from a session that can reach this account's routines. If the bound session ever gets archived/deleted, recreate the routine from a live session that already has the Gmail and Google Drive connectors enabled.
