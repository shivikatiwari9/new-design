@echo off
setlocal enabledelayedexpansion

:: ============================================
:: SHIVIKA PORTFOLIO - One-Click Update Script
:: ============================================
::
:: INSTRUCTIONS FOR SHIVIKA:
:: 1. Add or remove photos in the images folders
:: 2. Double-click this file
:: 3. Done! Website will update automatically
::
:: ============================================

echo.
echo ========================================
echo   SHIVIKA PORTFOLIO UPDATER
echo ========================================
echo.

cd /d "%~dp0"

:: Check if git is available
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

:: ----------------------------------------
:: STEP 1: Pull latest changes from GitHub
:: ----------------------------------------
echo [1/4] Pulling latest changes from GitHub...
echo.
git pull
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo WARNING: Could not pull changes. Continuing anyway...
    echo.
)

:: ----------------------------------------
:: STEP 2: Generate portfolio-data.js
:: ----------------------------------------
echo.
echo [2/4] Scanning images and updating portfolio...
echo.

:: Call the portfolio generator script
call generate-portfolio-data.bat --silent

if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Could not generate portfolio data
    pause
    exit /b 1
)

:: ----------------------------------------
:: STEP 3: Add all changes to git
:: ----------------------------------------
echo.
echo [3/4] Preparing changes for upload...
echo.
git add -A
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Could not add files to git
    pause
    exit /b 1
)

:: ----------------------------------------
:: STEP 4: Commit and push to GitHub
:: ----------------------------------------
echo [4/4] Uploading to website...
echo.

:: Create commit message with date
set COMMIT_MSG=Updated portfolio images - %date%

git commit -m "%COMMIT_MSG%"
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo NOTE: No changes to upload (portfolio is already up to date)
    echo.
    goto :DONE
)

git push
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Could not upload to GitHub
    echo Please check your internet connection and try again
    echo.
    pause
    exit /b 1
)

:DONE
echo.
echo ========================================
echo   SUCCESS! Website updated!
echo ========================================
echo.
echo   Your changes will be live in 1-2 minutes at:
echo   https://shivikafacepaint.co.uk
echo.
echo ========================================
echo.
echo Press any key to close...
pause > nul
exit /b 0
