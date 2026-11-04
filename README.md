# BioPage Builder

A clean, modern bio link page with a glassmorphic design. Display your profile, social links, and share/copy functionality.

## Features

- **Modern UI**: Glassmorphic card design with gradient background
- **Profile Display**: Avatar, name, and bio
- **Social Links**: Easy-to-click links with Font Awesome icons
- **Share Functionality**: Native Web Share API support with fallback to copy link
- **Responsive Design**: Mobile-friendly layout
- **Component-based**: Modular HTML components loaded dynamically

## Project Structure

```
my-bio-page/
├── index.html          # Main HTML file
├── components/
│   ├── preview.html    # Profile card component
│   └── footer.html     # Footer component
└── assets/
    ├── css/
    │   └── style.css   # Styles and design
    └── js/
        └── script.js   # Profile data and interactivity
```

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Glassmorphism)
- Vanilla JavaScript
- Font Awesome 6.5.2
- Google Fonts (Inter)

## Setup & Usage

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Customize your profile by editing `assets/js/script.js`

## Customization

Edit the `profile` object in `assets/js/script.js`:

```javascript
const profile = {
  name: "Your Name",
  bio: "Your Bio",
  avatar: "your-avatar-url",
  links: [
    { label: "Portfolio", url: "https://...", icon: "🌐" },
    { label: "GitHub", url: "https://...", icon: '<i class="fa-brands fa-github"></i>' },
    // Add more links
  ],
};
```

## License

© 2026-2030 Huzaifa Khan. All rights reserved.
