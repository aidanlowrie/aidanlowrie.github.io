# DNS Setup Instructions for Hostinger

Go to your Hostinger DNS settings and add these records:

## A Records (for apex domain)
Add 4 A records pointing `aidanlowrie.com` to GitHub Pages IPs:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

## CNAME Record (for www)
- Name: www
- Points to: aidanlowrie.github.io

## How to add in Hostinger:
1. Go to hPanel → Domains → aidanlowrie.com
2. Click "DNS / Nameservers"
3. Add each A record with @ as the name
4. Add CNAME with www as the name

## After DNS is set:
1. Go to https://github.com/aidanlowrie/aidanlowrie.github.io/settings/pages
2. Under "Custom domain", enter: aidanlowrie.com
3. Check "Enforce HTTPS" (may take a few minutes to become available)

DNS propagation can take 24-48 hours, but often works within minutes.