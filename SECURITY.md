# Security Configuration Guide

## Overview

This document provides comprehensive information about the security configuration for the Go4Garage website, including HTTPS setup, security headers, and deployment best practices.

## Current Security Status

### ✅ Security Headers Configured

The following security headers are automatically applied to all responses when deployed to Firebase Hosting:

1. **Strict-Transport-Security (HSTS)**
   - Enforces HTTPS connections for 2 years
   - Includes all subdomains
   - Preload ready for browser HSTS preload lists
   - Header: `max-age=63072000; includeSubDomains; preload`

2. **Content-Security-Policy (CSP)**
   - Prevents XSS and code injection attacks
   - Restricts resource loading to trusted sources
   - Header: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`

3. **X-Content-Type-Options**
   - Prevents MIME-type sniffing
   - Header: `nosniff`

4. **X-Frame-Options**
   - Prevents clickjacking attacks
   - Header: `DENY`

5. **X-XSS-Protection**
   - Enables browser XSS filtering
   - Header: `1; mode=block`

6. **Referrer-Policy**
   - Controls referrer information
   - Header: `strict-origin-when-cross-origin`

7. **Permissions-Policy**
   - Restricts browser features
   - Header: `camera=(), microphone=(), geolocation=(self)`

## HTTPS Configuration

### Firebase Hosting (Recommended)

Firebase Hosting automatically provides:
- **Free SSL/TLS certificates** via Let's Encrypt
- **Automatic certificate renewal**
- **HTTP to HTTPS redirect** (automatic)
- **Global CDN** with HTTPS enabled
- **No manual configuration required**

**Deployment Status:**
- Project ID: `go4garage-d66fc`
- Configuration: `.firebaserc` and `firebase.json`
- CI/CD: GitHub Actions workflow configured

### Self-Hosted Deployment

If you choose to self-host instead of using Firebase, you **must** configure HTTPS manually.

#### Option 1: Nginx with Let's Encrypt (Recommended for Self-Hosting)

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is configured automatically
```

**Nginx Configuration Example:**

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security headers
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Option 2: Apache with Let's Encrypt

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache

# Obtain SSL certificate
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
```

## Troubleshooting "Not Secure" Warning

If the website shows a "Not Secure" warning in the browser, check the following:

### 1. Check Deployment Status

```bash
# Verify you're on the correct deployment platform
# Firebase Hosting should show HTTPS automatically

# Check GitHub Actions deployment
# Go to: https://github.com/flywithvvk/g4gwebsite/actions
```

### 2. Verify Firebase Credentials

The GitHub Actions workflow requires a Firebase service account secret:

```bash
# Check if secret is configured:
# Go to: Repository Settings → Secrets and variables → Actions
# Verify: FIREBASE_SERVICE_ACCOUNT_GO4GARAGE_D66FC exists

# If missing, generate a new token:
firebase login:ci
```

### 3. Check DNS Configuration

Ensure your domain points to the correct hosting:

```bash
# For Firebase Hosting
# DNS should point to Firebase's servers
# Check Firebase Console → Hosting → Custom domain

# Verify DNS propagation
dig yourdomain.com
nslookup yourdomain.com
```

### 4. Verify SSL Certificate

```bash
# Check SSL certificate validity
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com

# Check certificate expiration
echo | openssl s_client -servername yourdomain.com -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates
```

### 5. Browser Cache

Sometimes browsers cache the "Not Secure" status:

1. Clear browser cache and cookies
2. Try in incognito/private mode
3. Test in a different browser

## AWS vs Firebase Hosting

**Current Setup:** This project is configured for **Firebase Hosting**, NOT AWS.

### Why Firebase Hosting?

- ✅ Automatic HTTPS with free SSL certificates
- ✅ Global CDN included
- ✅ Zero configuration for SSL
- ✅ Automatic certificate renewal
- ✅ Simple deployment workflow

### AWS Amplify Alternative

If you prefer AWS, the project includes an `amplify.yml` configuration file:

1. Create an AWS Amplify app
2. Connect your GitHub repository
3. AWS Amplify will use the existing `amplify.yml` configuration
4. HTTPS is automatically provided via AWS CloudFront

**Note:** You would need to update the CI/CD workflow to deploy to AWS instead of Firebase.

## Security Best Practices

### For Production Deployment

1. ✅ **Always use HTTPS** - Never deploy production sites over HTTP
2. ✅ **Keep dependencies updated** - Run `npm audit` regularly
3. ✅ **Use environment variables** - Never commit secrets to the repository
4. ✅ **Enable security headers** - Already configured in `firebase.json`
5. ✅ **Monitor security alerts** - Enable GitHub Dependabot alerts
6. ✅ **Regular backups** - Maintain backup of deployment configurations
7. ✅ **Access control** - Limit who can deploy to production

### Testing Security Headers

After deployment, verify security headers are properly set:

```bash
# Using curl
curl -I https://yourdomain.com

# Using online tools
# https://securityheaders.com/
# https://observatory.mozilla.org/
```

## Contact

For security concerns or questions:
- Email: hello@go4garage.com
- GitHub Issues: For non-sensitive security questions
- Private disclosure: For security vulnerabilities, email directly

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [OWASP Security Headers](https://owasp.org/www-project-secure-headers/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
