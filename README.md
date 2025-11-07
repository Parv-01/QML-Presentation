
# Quantum Entangled Path Presentation

This is a code bundle for Quantum Entangled Path Presentation. The original project is available at https://www.figma.com/design/pZp04pcYWXicJDvovw8Oxa/Quantum-Entangled-Path-Presentation.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment

### GitHub Pages

1. **Automatic Deployment (Recommended)**
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy to GitHub Pages
   - Make sure to enable GitHub Pages in your repository settings

2. **Manual Deployment**
   ```bash
   npm run deploy:github
   ```

### Vercel

1. **Automatic Deployment (Recommended)**
   - Connect your repository to Vercel
   - Vercel will automatically deploy on every push to main

2. **Manual Deployment**
   ```bash
   npm run deploy:vercel
   ```

### Build Commands

- `npm run build` - Standard build for Vercel
- `npm run build:github` - Build with GitHub Pages base path
- `npm run preview` - Preview the build locally

## Configuration

The project is pre-configured for both GitHub Pages and Vercel deployment:

- **GitHub Pages**: Uses `/quantum-entangled-path-presentation/` as base path
- **Vercel**: Uses root path `/` with proper routing configuration

## Environment Variables

For GitHub Pages deployment, the base path is automatically configured based on the repository name. If your repository has a different name, update the base path in `vite.config.ts`.
  