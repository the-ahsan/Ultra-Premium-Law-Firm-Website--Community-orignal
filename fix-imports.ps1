# Script to fix versioned imports

# Fix @radix-ui versioned imports
Get-ChildItem -Path components/ui -Filter *.tsx -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $updated = $content -replace '@radix-ui/react-([^"]+)@[0-9.]+', '@radix-ui/react-$1'
    if ($content -ne $updated) {
        Set-Content -Path $_.FullName -Value $updated
        Write-Host "Fixed versioned imports in $($_.Name)"
    }
}

# Fix class-variance-authority versioned imports
Get-ChildItem -Path components/ui -Filter *.tsx -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $updated = $content -replace 'class-variance-authority@[0-9.]+', 'class-variance-authority'
    if ($content -ne $updated) {
        Set-Content -Path $_.FullName -Value $updated
        Write-Host "Fixed class-variance-authority import in $($_.Name)"
    }
}

Write-Host "All versioned imports have been fixed."