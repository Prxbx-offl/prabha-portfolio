# Thillai Prabakar — Portfolio

My personal portfolio website, built with **Next.js 14** and **React 18**. It's a single-page site with sections for my background, skills, services, projects and a working contact form.

## Features

- Single-page layout with smooth-scrolling navigation
- Sections: **Home, About, Skills, Services, Projects, Contact**
- Downloadable resume (PDF)
- Contact form that sends messages straight to my email via [Web3Forms](https://web3forms.com)
- Responsive design with custom CSS (Syne + DM Sans fonts)
- All content kept in one data file, so updating the site doesn't require touching components

## Tech Stack

| Area      | Tools                          |
| --------- | ------------------------------ |
| Framework | Next.js 14 (App Router)        |
| UI        | React 18, plain CSS            |
| Forms     | Web3Forms API                  |
| Linting   | ESLint (`eslint-config-next`)  |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Prxbx-offl/prabha-portfolio.git
cd prabha-portfolio
npm install
```

### Environment variables

The contact form needs a free Web3Forms access key.

1. Go to [web3forms.com](https://web3forms.com), enter your email and click **Create Access Key**.
2. Create a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```

3. Restart the dev server.

`.env.local` is git-ignored, so your key is never committed.

### Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project Structure

```
prabha-portfolio/
├── app/
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── sections/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Services.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
├── constants/
│   └── data.js            # All site content (skills, projects, links…)
└── public/
    ├── prabha.jpeg        # Profile photo
    ├── Prabhaa.pdf        # Resume
    └── projects/          # Project cover images
```

## Customizing Content

Everything shown on the site lives in [`constants/data.js`](constants/data.js):

- `SOCIAL_LINKS` — GitHub, LinkedIn, Instagram
- `ABOUT_META` — name, role, location, availability
- `SKILLS` / `EXTRA_SKILLS` — skill bars and tags
- `SERVICES` — service cards
- `PROJECTS` — project cards (image, title, tech, description, demo and GitHub links)

To swap the profile photo or resume, replace the files in `public/` and update `PROFILE_IMAGE` / `RESUME_URL` if the filenames change.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/):

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` under **Settings → Environment Variables**.
4. Deploy.

## Contact

- GitHub: [@Prxbx-offl](https://github.com/Prxbx-offl)
- LinkedIn: [Thillai Prabakar](https://www.linkedin.com/in/thillai-prabakar-054290331/)
- Instagram: [@prabhas_offl](https://www.instagram.com/prabhas_offl/)
