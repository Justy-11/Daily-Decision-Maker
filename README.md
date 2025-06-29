# Daily-Decision-Maker
Fun interactive tools to help you make decisions! Random food generator, movie picker, spin the wheel, this or that game, magic 8-ball and more. Perfect for indecisive moments.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18 or higher)
- **npm** or **pnpm** (package manager)

You can check your Node.js version by running:
```bash
node --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/daily-decision-maker.git
   cd daily-decision-maker
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using pnpm (recommended):
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs the linter to check code quality

### Project Structure

```
daily-decision-maker/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── daily-challenge.tsx
│   ├── food-generator.tsx
│   ├── magic-ball.tsx
│   ├── movie-picker.tsx
│   ├── spin-wheel.tsx
│   └── this-or-that.tsx
├── lib/               # Utility functions
└── public/            # Static assets
```

### Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation
