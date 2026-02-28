---
name: deploy
description: >-
  This skill should be used when the user asks to "deploy", "deploy rootproto",
  "push to production", "ship it", or wants to run the full
  build-commit-push-verify cycle for rootproto.com.
  Automates Next.js static export to GitHub Pages.
disable-model-invocation: true
version: 0.1.0
---

# Deploy rootproto.com

Automate the build-commit-push-verify deployment cycle for rootproto.com
(Next.js static export to GitHub Pages via GitHub Actions).

## Prerequisites

- Working directory: repository root (verify with `git rev-parse --show-toplevel`)
- Node.js and npm installed
- GitHub CLI (`gh`) authenticated
- Remote: `origin` pointing to `github.com/jongwony/rootproto.com`

## Deployment Pipeline

Execute the following steps sequentially. Halt on any failure and report the error.

### Step 1: Build

```bash
cd "$(git rev-parse --show-toplevel)"
npm run build
```

Verify build success before proceeding:
- Check exit code is 0
- Confirm `out/` directory contains `index.html`
- If build fails, report the error and stop. Do not proceed to commit.

### Step 2: Review Changes

Display changed files for user review:

```bash
git status
git diff --stat
```

If no changes exist (clean working tree), report "Nothing to deploy" and stop.

### Step 3: Stage Files

Add specific changed files by name. Never use `git add -A` or `git add .` to avoid
accidentally staging sensitive files or build artifacts.

```bash
git add <file1> <file2> ...
```

### Step 4: Commit

Draft a descriptive commit message summarizing the changes. Follow the repository's
conventional commit style (`feat:`, `fix:`, `style:`, `chore:`, etc.).

Append the co-author trailer:

```
Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

Use HEREDOC format for the commit message to preserve formatting.

### Step 5: Push

**IMPORTANT**: Confirm with the user before pushing since this action:
- Is irreversible (pushes to remote)
- Triggers GitHub Actions deployment workflow
- Updates the live site at rootproto.com

```bash
git push origin main
```

### Step 6: Monitor Deployment

Watch the GitHub Actions workflow until completion:

```bash
gh run list --limit 1 --json databaseId,status
gh run watch <run_id>
```

### Step 7: Report

On success, report:
- Commit hash
- Workflow run ID and status
- Deployment URL: `https://rootproto.com`
- Changed files summary

On failure, report:
- Which step failed (build/deploy)
- Error output
- Suggested fix if identifiable

## Architecture Notes

| Component | Detail |
|-----------|--------|
| Framework | Next.js 16.x with `output: "export"` |
| Output | Static HTML in `out/` directory |
| Hosting | GitHub Pages (Actions-based deployment) |
| Workflow | `.github/workflows/deploy.yml` |
| Domain | rootproto.com (CNAME in `public/CNAME`) |
| Branch | `main` (single-branch workflow) |
