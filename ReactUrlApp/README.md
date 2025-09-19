


# React URL Shortener

>A modern, client-side URL shortener built with React and Vite. No backend required—URLs and statistics are stored securely in your browser.

---

## ✨ Features

- **Shorten any URL** with a single click
- **Custom shortcodes**: Choose your own short link code
- **Unique links**: Prevents duplicates and ensures code uniqueness
- **Default validity**: Links expire after 7 days (configurable)
- **Statistics page**: Track usage and click counts for each short link
- **Material UI**: Clean, responsive, accessible design
- **Client-side only**: No server, no database, no tracking
- **Error handling**: Friendly messages for invalid, duplicate, or expired links

---

## 🏗️ Architecture

- **React + Vite** for fast, modern SPA development
- **Material UI** for styling and layout
- **Component-based**: `UrlShortener`, `ShortenedResults`, `Statistics`
- **LocalStorage** for persistence of links, stats, and validity

---

## 🚀 Getting Started

1. **Clone the repository**
    ```sh
    git clone https://github.com/<your-username>/<your-repo-name>.git
    cd <your-repo-name>
    ```
2. **Install dependencies**
    ```sh
    npm install
    ```
3. **Start the development server**
    ```sh
    npm run dev
    ```
4. **Open your browser** at the address shown in the terminal (e.g., `http://localhost:5173/`)

---

## 🛠️ Usage

### Shorten a URL
- Enter a valid URL (including `http://` or `https://`)
- Optionally, specify a custom shortcode (3-16 alphanumeric/dash/underscore)
- Click **Shorten**
- Copy and share the generated short URL

### View Statistics
- Switch to the **Statistics** tab to see all your links, click counts, and expiration dates

---

## ⚙️ Runtime Environment

- **Node.js**: v18 or later recommended
- **npm**: v9 or later
- **Browser**: Latest Chrome, Firefox, Edge, or Safari

---

## 📦 Project Structure

- `src/components/UrlShortener.jsx` — Main form for shortening URLs
- `src/components/ShortenedResults.jsx` — Displays all shortened links
- `src/components/Statistics.jsx` — Shows usage analytics
- `src/App.jsx` — App entry, routing, and state management

---

## 📝 License

This project is open source and free to use for personal and educational purposes.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue to discuss changes or new features.
