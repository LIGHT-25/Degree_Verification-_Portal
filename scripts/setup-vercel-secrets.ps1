# One-time helper: link Vercel project and print GitHub secret values.
# Run from repo root: powershell -File scripts/setup-vercel-secrets.ps1

Write-Host "Linking Vercel project (follow prompts)..." -ForegroundColor Cyan
npx vercel link

$projectFile = Join-Path $PSScriptRoot ".." ".vercel" "project.json"
if (-not (Test-Path $projectFile)) {
  Write-Host "No .vercel/project.json found. Run 'npx vercel link' first." -ForegroundColor Red
  exit 1
}

$json = Get-Content $projectFile | ConvertFrom-Json
Write-Host ""
Write-Host "Add these GitHub repository secrets:" -ForegroundColor Green
Write-Host "  VERCEL_ORG_ID      = $($json.orgId)"
Write-Host "  VERCEL_PROJECT_ID  = $($json.projectId)"
Write-Host "  VERCEL_TOKEN       = (create at https://vercel.com/account/tokens)"
Write-Host ""
Write-Host "GitHub: Settings -> Secrets and variables -> Actions -> New repository secret"
