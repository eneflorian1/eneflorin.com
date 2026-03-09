Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\Admin\Documents\GitHub\eneflorin.com\public\icon-512.png")
$bmp = New-Object System.Drawing.Bitmap($img, 192, 192)
$bmp.Save("c:\Users\Admin\Documents\GitHub\eneflorin.com\public\icon-192.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()
Write-Host "Done - icon-192.png created"
