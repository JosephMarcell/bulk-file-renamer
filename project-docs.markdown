# FileRenamer.com Project Specification

## 1. Project Overview

**Product Name**: FileRenamer.com  
**Purpose**: A client-side, web-based SaaS tool for bulk file renaming with customizable rules, requiring no login for basic use.  
**Target Users**: Designers, photographers, e-commerce teams, marketers, students, developers.  
**Goal**: Provide an intuitive, fast, and secure file renaming tool, targeting 20% user adoption within six months of launch.

## 2. Core Features (MVP)

- **File Upload**: Drag-and-drop interface for uploading up to 20 files (free tier limit).  
- **Rename Rule Engine**: Supports prefix, suffix, text replacement, auto-numbering, case change (lower, upper, capitalize), date/time stamps, regular expressions (regex), character trimming, custom separators, undo rename, and batch presets.  
- **Live Preview**: Table displaying original and new filenames, updating in real-time.  
- **Download as ZIP**: Packages renamed files into a downloadable ZIP archive.  
- **Free Tier Limitation**: Limits to 20 files per session, with a modal prompting upgrade to a Pro plan.

## 3. User Stories

- As a **photographer**, I want to **add a prefix and date taken to image filenames**, so that **I can organize photos by event and date**.  
- As a **marketer**, I want to **replace text and use custom separators**, so that **I can standardize branding across assets**.  
- As a **developer**, I want to **use regex for complex renaming**, so that **I can clean up filenames efficiently**.  
- As a **user**, I want to **undo a rename operation**, so that **I can correct mistakes without re-uploading**.  
- As a **marketer**, I want to **save and load rename presets**, so that **I can reuse rules across projects**.  
- As a **user**, I want to **download renamed files as a ZIP**, so that **I can share or store them easily**.

## 4. Technical Stack

- **Frontend**: Next.js (TypeScript) with React for UI, Tailwind CSS for styling.  
- **File Processing**: JavaScript/TypeScript for rename logic, `JSZip` for ZIP creation, `file-saver` for downloads, `date-fns` for date formatting.  
- **Dependencies**:  
  - `next`, `react`, `react-dom`  
  - `react-dropzone` (file uploads)  
  - `jszip` (ZIP creation)  
  - `file-saver` (download trigger)  
  - `date-fns` (date/time formatting)  
  - `tailwindcss`, `postcss`, `autoprefixer`  
- **Dev Dependencies**:  
  - `eslint`, `@typescript-eslint/eslint-plugin`, `eslint-config-next`  
  - `jest`, `@testing-library/react`, `@testing-library/jest-dom` (for testing)  
- **Hosting**: Vercel (free tier for MVP).  
- **Future (Post-MVP)**:  
  - Authentication: Supabase or Clerk.  
  - Payments: Stripe for Pro plan.  
  - Metadata parsing: `exif-js` or `music-metadata-browser` for EXIF/ID3 tags.

## 5. Functional Requirements

1. **File Upload**:  
   - Use `react-dropzone` for drag-and-drop.  
   - Store files in React state.  
   - Display filename and size.  
   - Enforce 20-file limit with a modal for upgrades.  

2. **Rename Rule Engine**:  
   - Inputs:  
     - Prefix (string)  
     - Suffix (string)  
     - Replace From/To (string)  
     - Auto Number Start (integer)  
     - Case Change (none, lower, upper, capitalize)  
     - Date/Time (none, creation, modification, EXIF) with format (e.g., YYYY-MM-DD)  
     - Regex (pattern/replace)  
     - Trim (start/end positions or characters)  
     - Separator (dash, underscore, space)  
   - Store rules in local state; persist presets in `localStorage`.  
   - Support undo by storing original filenames in memory.  

3. **Live Preview**:  
   - Table with columns: Original Name, New Name.  
   - Update in real-time as rules change.  

4. **Download as ZIP**:  
   - Use `JSZip` to rename and package files.  
   - Trigger download with `file-saver` (filename: `renamed-files.zip`).  

5. **Free Tier**:  
   - Limit to 20 files per session.  
   - Display upgrade modal when limit exceeded.  

6. **Undo Rename**:  
   - Store original filenames in memory.  
   - Provide an "Undo" button to revert names in the current session.  

7. **Batch Presets**:  
   - Save/load rename rules in `localStorage`.  
   - Provide a dropdown to select saved presets.  

## 6. Non-Functional Requirements

- **Performance**: Process and display previews for 20 files within 2 seconds.  
- **Security**: Client-side only; no file storage or server-side processing.  
- **Usability**: Intuitive UI with clear instructions and minimal learning curve.  
- **Compatibility**: Support Chrome, Firefox, Safari, Edge.  
- **Scalability**: Handle up to 1,000 concurrent users.  

## 7. File Structure

```
file-renamer/
├── components/
│   ├── FileUpload.tsx
│   ├── RenameRules.tsx
│   ├── PreviewTable.tsx
│   ├── DownloadZip.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
├── styles/
│   ├── globals.css
├── docs/
│   ├── PROJECT_SPEC.md
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
├── .eslintrc.json
```

## 8. Development Guidelines

### 8.1 Coding Standards
- **Language**: Use TypeScript for type safety.  
- **Linting**: Adhere to ESLint rules (`eslint-config-next`, `@typescript-eslint`).  
  - Avoid `@typescript-eslint/no-unused-expressions`: Ensure all expressions are assigned or used (e.g., `const result = someFunction()`).  
  - Avoid `@typescript-eslint/no-unused-vars`: Remove or use all declared variables/parameters.  
  - Avoid `@next/next/no-assign-module-variable`: Do not assign to `module`.  
  - Use `@ts-expect-error` with a description (min. 3 characters) instead of `@ts-ignore`.  
- **Formatting**: Use Prettier for consistent code style.  
- **Component Structure**: Use functional components with `FC` type from React.  
  ```tsx
  import { FC } from 'react';

  interface Props {
    // Define props
  }

  const Component: FC<Props> = ({ /* props */ }) => {
    return <div />;
  };

  export default Component;
  ```

### 8.2 ESLint Configuration
- Ensure `.eslintrc.json` excludes build artifacts:
  ```json
  {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "next/core-web-vitals"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "react"],
    "ignorePatterns": [".next/**", "node_modules/**"],
    "rules": {
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@next/next/no-assign-module-variable": "error",
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }]
    }
  }
  ```

### 8.3 Cursor Prompt Guidelines
- Include the following in all prompts to ensure ESLint-compliant code:
  ```
  Generate TypeScript code for a Next.js app that adheres to ESLint rules (@typescript-eslint/no-unused-expressions, @typescript-eslint/no-unused-vars, @next/next/no-assign-module-variable). Avoid unused variables/parameters, ensure all expressions are assigned or used, and include @ts-expect-error with descriptions if needed. Reference docs/PROJECT_SPEC.md for context.
  ```
- Example prompt for a component:
  ```
  Generate a TypeScript React component for FileRenamer.com’s FileUpload feature, using react-dropzone, styled with Tailwind CSS, and compliant with ESLint rules (@typescript-eslint/no-unused-expressions, @typescript-eslint/no-unused-vars). Ensure no unused variables, assign all expressions, and reference docs/PROJECT_SPEC.md.
  ```

### 8.4 Testing
- **Unit Tests**: Use Jest with `@testing-library/react` for rename logic and components.  
  - Example: Test `renameFiles` function for all rules (prefix, regex, date stamps).  
- **Manual Testing**: Verify file upload, rename rules, preview, download, and undo functionality.  
- **Test Prompt**:  
  ```
  Generate Jest tests for [Component].tsx that verify functionality and check for ESLint compliance, referencing docs/PROJECT_SPEC.md.
  ```

### 8.5 Build and Deployment
- **Build**: Run `npm run build` to ensure no errors.  
- **Linting**: Run `npm run lint -- --fix` to fix ESLint issues automatically.  
- **Deployment**: Deploy to Vercel via GitHub integration.  
- **Deployment Prompt**:  
  ```
  Generate a Vercel deployment configuration for a Next.js app, ensuring compatibility with FileRenamer.com, per docs/PROJECT_SPEC.md.
  ```

## 9. Success Metrics

- **User Retention**: 30% returning users within 30 days.  
- **CSAT**: 85% or higher via post-use surveys.  
- **Active Users**: 5,000 within six months.  
- **Revenue**: Positive trend from Pro plan subscriptions (post-MVP).

## 10. Future Considerations

- Cloud storage integration (Google Drive, Dropbox).  
- Advanced analytics for rename history.  
- Mobile app for iOS and Android.  
- Metadata-based renaming (EXIF/ID3 tags).  
- File organization (copy/move to folders based on rules).