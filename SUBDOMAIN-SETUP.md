# Haestus Subdomain Setup

## Architecture Overview

This project uses subdomains to organize different parts of the Haestus platform:

- **haestus.dev** - Main marketing site
- **sidekick2026.haestus.dev** - AI Builder application (password-protected)
- **[clientname].haestus.dev** - Client portals (coming soon)

## Password Protection

Access to client portals is controlled through a password-protected widget:
1. User clicks the "Clients" button in the header
2. A modal popup appears requesting a password
3. Correct password redirects to the appropriate subdomain
4. Current password: `sidekick` → redirects to `sidekick2026.haestus.dev`

## SIDEKICK2026 Setup

### Current Configuration

The AI Builder lives at `/agent-builder` in this repo and is accessible via:
- Local: `http://localhost:3001/agent-builder`
- Production: `https://sidekick2026.haestus.dev`

### Vercel Configuration

The `vercel.json` file routes the subdomain:
- When someone visits `sidekick2026.haestus.dev`
- Vercel serves the `/agent-builder` path
- User sees clean URL without `/agent-builder` in the path

### Setup Steps in Vercel Dashboard

1. **Add the subdomain to your Vercel project:**
   - Go to your project settings
   - Navigate to "Domains"
   - Click "Add"
   - Enter: `sidekick2026.haestus.dev`
   - Vercel will provide DNS instructions

2. **Update DNS (if using external DNS):**
   - Add a CNAME record:
     - Name: `sidekick2026`
     - Value: `cname.vercel-dns.com`
   - Wait for DNS propagation (can take up to 48 hours, usually 5-10 minutes)

3. **Deploy:**
   - Push changes to GitHub
   - Vercel will automatically deploy
   - Subdomain will be live once DNS propagates

### Files Modified

- `vercel.json` - Subdomain routing configuration
- `components/header.tsx` - Removed AI Builder from navigation, added password-protected Clients portal widget

## Future Client Portals

Each client will get their own subdomain:
- `paypro.haestus.dev`
- `beehive.haestus.dev`
- etc.

Password-protected access will be implemented via the "Clients" button widget.

## Notes

- All subdomains share the same codebase (monorepo approach)
- Independent routing but shared components/styles
- Single deployment updates all subdomains
- Can split into separate repos later if needed
