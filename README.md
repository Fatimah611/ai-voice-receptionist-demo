# AI Voice Receptionist Demo

A React demo app that showcases an LLM-powered voice receptionist for restaurants. Visitors start a live voice conversation with the assistant, which can answer common questions and take reservation requests around the clock.

## Features

- One-click live voice conversation in the browser
- White-label interface that can be rebranded for any venue
- Handles FAQs (opening hours, menu, location) and booking requests
- Responsive layout, tested on desktop and mobile

## Tech stack

React, Vapi Web SDK, LLM-powered voice assistant

## Setup

1. Install dependencies:

        npm install

2. Copy `.env.example` to `.env.local` and add your own Vapi credentials:

        REACT_APP_VAPI_PUBLIC_KEY=your-vapi-public-key
        REACT_APP_VAPI_ASSISTANT_ID=your-vapi-assistant-id

3. Start the app:

        npm start

## Notes

- Credentials are read from environment variables and are never committed.
- The demo restaurant name is a placeholder; change it in `src/config.js`.