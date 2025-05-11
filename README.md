# Business Manager

A full-stack web application built with Convex, React, and TailwindCSS for managing business websites and social media content.

## Features

- **Website Builder**
  - Create and manage multiple websites
  - Choose from different templates (Business, Restaurant, Portfolio)
  - Real-time collaborative editing
  - Live preview of changes

- **Social Media Manager**
  - AI-powered content generation
  - Schedule posts for multiple platforms
  - SEO optimization suggestions
  - Support for Instagram and Facebook

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Convex (Database, Functions, Auth)
- **Styling**: TailwindCSS with neon theme
- **AI**: OpenAI GPT-4.1-nano for content generation
- **Auth**: Username/password + anonymous login

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## Environment Variables

Required environment variables:
- `CONVEX_DEPLOYMENT`: Set automatically by Convex
- `CONVEX_OPENAI_API_KEY`: For AI content generation
- `CONVEX_OPENAI_BASE_URL`: OpenAI API endpoint

## Project Structure

```
/convex
  /schema.ts     # Database schema
  /websites.ts   # Website management functions
  /social.ts     # Social media functions
/src
  /App.tsx       # Main application component
  /WebsiteBuilder.tsx  # Website management UI
  /SocialManager.tsx   # Social media management UI
```

## Authentication

The app uses Convex Auth with:
- Email/password authentication
- Anonymous login support
- Protected routes and data access

## Styling

Features a dark mode theme with:
- Neon accents (cyan, purple)
- Hover animations
- Responsive design
- Loading states
