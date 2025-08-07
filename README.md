# 🏆 Leaderboard Application

A modern Ruby on Rails application that displays a beautiful leaderboard with advanced search, pagination, and export functionality.

## ✨ Features

- **🏅 Beautiful Leaderboard**: Displays all leaderboard records with enhanced visual design
- **👤 Player Information**: Rank, Name, XPs, Twitter, Discord, and Avatar images
- **🔍 Advanced Search**: Chosen.js dropdown with search-as-you-type functionality
- **📄 Smart Pagination**: Customizable rows per page (10, 25, 50, 100) with Kaminari
- **📊 Export Functionality**: Download filtered data as JSON with dated filenames
- **🎨 Modern UI**: Built with Tailwind CSS and custom styling
- **📱 Responsive Design**: Works perfectly on all devices
- **⚡ Real-time Updates**: Instant search and pagination updates

## 🛠️ Technology Stack

- **Ruby on Rails 8.0.2** - Modern web framework
- **SQLite3** - Lightweight database
- **Tailwind CSS** - Utility-first CSS framework
- **Kaminari** - Pagination gem with custom Tailwind theme
- **Chosen.js** - Enhanced select dropdowns
- **jQuery** - JavaScript library for Chosen.js
- **CSV** - Data processing gem

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd leaderboard_app
   ```

2. **Install dependencies**

   ```bash
   bundle install
   ```

3. **Set up the database**

   ```bash
   rails db:migrate
   rails db:seed
   ```

4. **Start the server**

   ```bash
   rails server
   ```

5. **Visit the application**
   Open `http://localhost:3000` in your browser

## 📊 Data Structure

The application uses a `Leaderboard` model with the following fields:

- `rank` (integer): Player's ranking position (1-100)
- `name` (string): Player's name
- `xps` (integer): Player's experience points
- `twitter` (string): Player's Twitter handle
- `discord` (string): Player's Discord username
- `image_url` (string): URL to player's avatar image

## 🔗 API Endpoints

- `GET /` - Main leaderboard page
- `GET /leaderboards` - Leaderboard index with search and pagination
- `GET /leaderboards/export.json` - Export filtered data as JSON
- `GET /leaderboards?search=<name>&page=<page>&per_page=<rows>` - Search and pagination

## 🎯 Features Implementation

### 🔍 Advanced Search

- **Chosen.js Integration**: Beautiful dropdown with search-as-you-type
- **Real-time Filtering**: Instant results as you type
- **Case-insensitive Search**: Find players regardless of case
- **Custom Styling**: Professional gradient backgrounds and hover effects

### 📄 Smart Pagination

- **Kaminari Integration**: Robust pagination with custom Tailwind theme
- **Customizable Rows**: Choose 10, 25, 50, or 100 rows per page
- **URL Parameters**: Maintains search state across page changes
- **Responsive Design**: Works perfectly on all screen sizes

### 📊 Export Functionality

- **JSON Export**: Download filtered data in JSON format
- **Dated Filenames**: Automatic filename with current date
- **Search Integration**: Exports only currently filtered results
- **One-click Download**: Instant file download

### 🎨 Modern UI Design

- **Tailwind CSS**: Utility-first styling for clean design
- **Gradient Backgrounds**: Beautiful visual effects
- **Custom Styling**: Enhanced Chosen.js and pagination components
- **Responsive Layout**: Mobile-first design approach

## 📁 File Structure

```
app/
├── controllers/
│   └── leaderboards_controller.rb
├── models/
│   └── leaderboard.rb
├── views/
│   ├── layouts/
│   │   └── application.html.erb
│   ├── leaderboards/
│   │   └── index.html.erb
│   └── kaminari/
│       └── tailwind/
│           ├── _paginator.html.erb
│           ├── _page.html.erb
│           ├── _prev_page.html.erb
│           ├── _next_page.html.erb
│           ├── _first_page.html.erb
│           ├── _last_page.html.erb
│           └── _gap.html.erb
└── assets/
    ├── javascripts/
    │   ├── application.js
    │   └── leaderboard.js
    └── stylesheets/
        └── application.css

config/
├── routes.rb
├── application.rb
├── storage.yml
└── locales/
    └── en.yml

db/
├── migrate/
└── seeds.rb
```

## 📥 Data Import

The application imports data from `leaderboard_data.csv` which contains 100 leaderboard records with the following structure:

- **Rank**: Player's position (1-100)
- **Name**: Player's name
- **XPs**: Experience points
- **Twitter**: Twitter handle
- **Discord**: Discord username
- **Image**: Avatar image URL

The seed file automatically processes the CSV and creates Leaderboard records with all the required information.

## 🎮 Usage

1. **🏆 View Leaderboard**: Navigate to the home page to see all leaderboard entries
2. **🔍 Search Players**: Use the Chosen.js dropdown to search and filter players by name
3. **📄 Navigate Pages**: Use pagination controls to browse through pages
4. **⚙️ Adjust Rows**: Change the number of rows displayed per page (10, 25, 50, 100)
5. **📊 Export Data**: Click the "Download" button to export filtered data as JSON

## 🛠️ Development

The application is built with modern best practices:

- **🚀 Fast Performance**: Optimized queries and efficient pagination
- **🎨 Clean Code**: Well-organized, maintainable codebase
- **📱 Mobile-First**: Responsive design for all devices
- **🔧 Easy Setup**: Simple installation and configuration
- **📊 Scalable**: Can handle large datasets efficiently
- **🎯 User-Friendly**: Intuitive interface with modern UX patterns
