# PowerShell script to fix motion/react imports

# Define the directory to search in
$directory = "."

# Get all .tsx and .ts files
$files = Get-ChildItem -Path $directory -Recurse -Include *.tsx,*.ts

# Define the regex pattern for motion/react imports
$pattern = "import\s+(.+?)\s+from\s+'motion/react'"

# Define the replacement pattern
$replacement = "import $1 from 'framer-motion'"

# Counter for modified files
$modifiedFiles = 0

# Process each file
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $newContent = $content -replace $pattern, $replacement
    
    # If content was modified, write it back to the file
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Fixed motion/react import in: $($file.FullName)"
        $modifiedFiles++
    }
}

Write-Host "\nCompleted! Modified $modifiedFiles files."