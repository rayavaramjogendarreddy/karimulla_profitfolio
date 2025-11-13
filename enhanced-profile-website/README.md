# Enhanced Profile Website - Dr. Shaik Karimulla

A modern, enhanced portfolio website for Dr. Shaik Karimulla featuring advanced animations, interactive components, and a beautiful user interface.

## 🚀 Features

### ✨ Enhanced Components

- **Hero Section**: Animated background particles, profile image with hover effects, scroll indicators
- **About Section**: Scroll-triggered animations, enhanced cards with hover effects
- **Impact/Statistics Section**: Animated counters showing achievements (NEW)
- **Awards Section**: Year-based filtering, category badges, star indicators
- **Gallery Section**: Photo gallery with popup viewer and download functionality (NEW)
- **Contact Section**: Color-coded gradient cards, enhanced interactions
- **Navigation**: Active section highlighting, smooth transitions
- **Footer**: Three-column layout, scroll-to-top button, quick links

### 🎨 Design Features

- Modern animations and transitions
- Intersection Observer for scroll animations
- Responsive design for all devices
- Smooth hover effects
- Gradient backgrounds and cards
- Enhanced accessibility

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. Navigate to the project directory:
   ```bash
   cd enhanced-profile-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🎯 Usage

### Development

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
enhanced-profile-website/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Enhanced hero section
│   │   ├── About.tsx          # Enhanced about section
│   │   ├── Impact.tsx         # NEW: Impact/Statistics section
│   │   ├── Awards.tsx         # Enhanced awards with filtering
│   │   ├── Gallery.tsx        # NEW: Photo gallery with popup viewer
│   │   ├── Contact.tsx        # Enhanced contact section
│   │   ├── Navigation.tsx     # Enhanced navigation
│   │   ├── Footer.tsx         # Enhanced footer
│   │   └── ui/               # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx         # Main page
│   │   └── NotFound.tsx      # 404 page
│   ├── assets/               # Images and assets
│   ├── lib/                  # Utility functions
│   ├── hooks/                # Custom React hooks
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static files
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Enhancements

### 1. Hero Section
- Animated background particles
- Profile image with glow effects on hover
- "24+ Awards" badge
- Scroll indicator

### 2. About Section
- Intersection Observer animations
- Enhanced card designs
- Better visual hierarchy

### 3. Impact Section (NEW)
- Animated counters:
  - 24+ Prestigious Awards
  - 8+ Years of Service
  - 6+ Active Programs
  - 100+ Communities Served
- Gradient cards with hover effects

### 4. Awards Section
- Year-based filtering (2019-2025)
- Category badges (National, International, etc.)
- Star indicators for notable awards
- Enhanced card animations

### 5. Contact Section
- Color-coded gradient cards
- Enhanced buttons with icons
- Better visual feedback

### 6. Navigation
- Active section highlighting
- Smooth transitions
- Enhanced mobile menu

### 7. Footer
- Three-column layout
- Scroll-to-top button
- Quick navigation links

### 8. Gallery Section (NEW)
- Two subsections: "Personal Moments" and "Awards & Recognition"
- Responsive grid layout (2-4 columns)
- Click to view images in full-screen popup
- Download button in popup (top-left corner)
- Smooth hover animations

## 📸 Updating Gallery Photos

To add or update photos in the gallery:

1. **Open the Gallery component**:
   ```
   src/components/Gallery.tsx
   ```

2. **Locate the image arrays** (around lines 30-100):
   - `personalMoments` - For personal service photos
   - `awardsRecognition` - For awards and recognition photos

3. **Update image URLs**:
   ```typescript
   const personalMoments = [
     {
       id: 1,
       url: "YOUR_IMAGE_URL_HERE",  // Replace with your image URL
       alt: "Description of image",
       title: "Image Title"
     },
     // Add more images...
   ];
   ```

4. **Image URL options**:
   - **Online images**: Use direct URLs (e.g., from your hosting service)
   - **Local images**: 
     - Place images in `public/gallery/` folder
     - Reference as: `url: "/gallery/your-image.jpg"`
   - **Unsplash** (placeholder): `https://images.unsplash.com/photo-xxxxx`

5. **Best practices**:
   - Use high-quality images (recommended: 800x800px or larger)
   - Keep file sizes optimized (under 500KB per image)
   - Use descriptive `alt` text for accessibility
   - Use meaningful `title` that appears on hover

6. **Example**:
   ```typescript
   {
     id: 1,
     url: "/gallery/community-service-2024.jpg",
     alt: "Dr. Karimulla at community service event 2024",
     title: "Community Service 2024"
   }
   ```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **React Router** - Routing

## 📝 All Original Information Preserved

- ✅ Dr. Shaik Karimulla's details
- ✅ All 24+ awards listed
- ✅ Contact information
- ✅ Yuvatejam Trust information
- ✅ Education and background details

## 🚀 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📄 License

This project is private and proprietary.

## 👤 Author

Dr. Shaik Karimulla - Social Worker & Humanitarian
Founder & Chairman, Yuvatejam Trust

---

**Note**: This is an enhanced version with modern animations and improved user experience while maintaining all original content.

