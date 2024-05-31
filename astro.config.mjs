import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/redesign': 'https://newuniversity.sharepoint.com/sites/CMDLWD/SitePages/nl/Educational-Program-2024-2025.aspx',
    '/LO': 'https://newuniversity.sharepoint.com/sites/CMDLWD/SitePages/Competentieprofiel(1).aspx',
    '/lo': 'https://newuniversity.sharepoint.com/sites/CMDLWD/SitePages/Competentieprofiel(1).aspx',
    '/LU': 'https://newuniversity.sharepoint.com/sites/CMDLWD/SitePages/nl/Competentieprofiel(1).aspx',
    '/lu': 'https://newuniversity.sharepoint.com/sites/CMDLWD/SitePages/nl/Competentieprofiel(1).aspx'
  }
});