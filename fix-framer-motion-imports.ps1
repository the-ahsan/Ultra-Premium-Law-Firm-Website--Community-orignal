# PowerShell script to fix framer-motion imports

$files = Get-ChildItem -Path . -Recurse -Include *.tsx, *.ts | Where-Object { $_.FullName -notlike "*\node_modules\*" }

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace empty imports from framer-motion with proper motion import
    $newContent = $content -replace "import\s+from 'framer-motion'", "import { motion } from 'framer-motion'"
    
    # Only write to file if changes were made
    if ($newContent -ne $content) {
        Write-Host "Fixing imports in $($file.FullName)"
        Set-Content -Path $file.FullName -Value $newContent
    }
}

Write-Host "Framer motion imports fixed successfully!"