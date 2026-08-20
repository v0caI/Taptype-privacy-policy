# TapType Privacy Policy

This repository contains the public privacy-policy website for **TapType**, a competitive typing-racing game. It is a Vite/React static site with a GitHub Actions workflow that deploys the site to GitHub Pages.

## Publishing to GitHub Pages

Push this repository to GitHub, then open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The included workflow publishes each push to `main`. It builds with `--base=./`, so it works for both a project URL (`https://OWNER.github.io/REPOSITORY/`) and a root GitHub Pages site.

## Pre-publication accuracy check

The website is drafted around the stated TapType architecture: **Supabase** for database infrastructure and **Stripe** for purchases. Before publishing or submitting the URL to Google Play, verify that every data category, retention practice, contact route, and account-deletion statement matches the installed app, website, and all SDKs. In particular, the Google Play store listing must show a working developer-support email because the account-deletion page instructs users to use that contact.

Google Play requires a publicly available, non-editable privacy-policy URL that identifies the app or developer, describes personal/sensitive data handling, retention/deletion, security, and relevant sharing. It also requires an accurate Data Safety declaration that includes relevant SDK practices.[^play-user-data] [^play-data-safety]

[^play-user-data]: [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
[^play-data-safety]: [Provide information for Google Play’s Data safety section](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)
