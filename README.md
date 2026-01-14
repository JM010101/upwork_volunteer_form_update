# Un Mar de Colores Website

A Next.js website for Un Mar de Colores, a nonprofit organization promoting equity in surfing.

## Features

- **Footer Newsletter Sign-up**: Email subscription form in the footer
- **Donation Buttons**: Reusable donation button component used site-wide
- **Volunteer Page**: Comprehensive volunteer application form
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Modern UI**: Clean, accessible interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   ├── page.tsx             # Home page
│   └── volunteer/
│       └── page.tsx         # Volunteer application page
├── components/
│   ├── DonationButton.tsx  # Reusable donation button
│   ├── Footer.tsx          # Footer with newsletter sign-up
│   └── Navbar.tsx          # Navigation bar
└── public/                 # Static assets
```

## Configuration

### Donation Button

Update the donation link in `components/DonationButton.tsx`:

```typescript
window.open('https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID', '_blank')
```

### Newsletter Integration

The newsletter form in the footer currently logs to console. Integrate with your preferred service (Mailchimp, ConvertKit, etc.) in `components/Footer.tsx`.

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## License

All rights reserved © Un Mar de Colores
