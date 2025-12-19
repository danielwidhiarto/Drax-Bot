<div align="center">

# 🤖 DraxBot

### Discord Music Bot with Indonesian Language Support
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.15.4-brightgreen)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/discord.js-v12.5.1-blue.svg)](https://discord.js.org/)

[Features](#-features) • [Installation](#-installation) • [Commands](#-commands) • [Configuration](#%EF%B8%8F-configuration) • [Contributing](#-contributing)

</div>

---

## 📖 About

DraxBot is a feature-rich Discord music bot built with JavaScript and Discord.js. Designed with Indonesian language support in mind, DraxBot brings entertainment and utility commands to your Discord server with an easy-to-use interface.

## ✨ Features

- 🎵 **Music Streaming** - Play music from YouTube directly in your voice channels
- 🇮🇩 **Indonesian Language Support** - Commands and responses in Bahasa Indonesia
- 🎮 **Interactive Commands** - Fun and utility commands for your community
- 🚀 **Easy to Deploy** - Simple setup process with clear documentation
- 🔧 **Customizable** - Modular command structure for easy modifications
- 📱 **Voice Channel Integration** - Seamless voice channel connection and playback

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.15.4 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Discord account and server where you have admin permissions

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/danielwidhiarto/Drax-Bot.git
cd Drax-Bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Bot

Create a `config.json` file in the root directory:

```json
{
  "token": "YOUR_BOT_TOKEN_HERE",
  "prefix": "!"
}
```

To get your bot token:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select an existing one
3. Navigate to the "Bot" section
4. Click "Reset Token" and copy your bot token
5. Enable the following Privileged Gateway Intents:
   - Presence Intent
   - Server Members Intent
   - Message Content Intent

### 4. Invite the Bot to Your Server

Generate an invite link:

1. In the Developer Portal, go to "OAuth2" → "URL Generator"
2. Select scopes: `bot`
3. Select bot permissions: `Administrator` (or customize as needed)
4. Copy the generated URL and open it in your browser
5. Select your server and authorize the bot

### 5. Run the Bot

```bash
node main.js
```

Or using npm:

```bash
npm start
```

## 🎮 Commands

### Music Commands

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `!mainkan <song name/URL>` | Play music from YouTube              |
| `!pergi`                   | Make the bot leave the voice channel |

### Utility Commands

| Command                   | Description                               |
| ------------------------- | ----------------------------------------- |
| `!bantuan`                | Display help menu with available commands |
| `!ping`                   | Check bot response time                   |
| `!panggilanku <nickname>` | Set a custom nickname for yourself        |

### Fun Commands

| Command          | Description              |
| ---------------- | ------------------------ |
| `!bangjago`      | Special command response |
| `!danang`        | Easter egg command       |
| `!danangrakitpc` | Easter egg command       |
| `!fanto`         | Easter egg command       |
| `!sasageyo`      | Easter egg command       |
| `!tofel`         | Easter egg command       |
| `!youtube`       | YouTube-related command  |

## ⚙️ Configuration

### Environment Variables

For production deployment, you can use environment variables instead of `config.json`:

```bash
# Windows (PowerShell)
$env:TOKEN="your_bot_token"
$env:PREFIX="!"

# Linux/Mac
export TOKEN="your_bot_token"
export PREFIX="!"
```

### Heroku Deployment

DraxBot includes a `Procfile` for easy Heroku deployment:

1. Create a new Heroku app
2. Set config vars in Heroku settings:
   - `TOKEN`: Your Discord bot token
3. Connect your GitHub repository
4. Deploy the main branch

```bash
heroku create your-draxbot-name
heroku config:set TOKEN=your_bot_token
git push heroku main
```

## 🛠️ Project Structure

```
Drax-Bot/
├── commands/          # Command files
│   ├── bangjago.js
│   ├── bantuan.js     # Help command
│   ├── mainkan.js     # Music playback
│   ├── panggilanku.js # Nickname command
│   ├── pergi.js       # Leave voice channel
│   ├── ping.js        # Ping command
│   └── ...
├── main.js            # Main bot file
├── package.json       # Dependencies
├── config.json        # Bot configuration (create this)
├── Procfile          # Heroku deployment
└── README.md          # This file
```

## 🔧 Technologies Used

- **[Discord.js](https://discord.js.org/)** v12.5.1 - Discord API wrapper
- **[@discordjs/opus](https://github.com/discordjs/opus)** - Audio encoding
- **[ytdl-core](https://github.com/fent/node-ytdl-core)** - YouTube downloader
- **[yt-search](https://github.com/talmobi/yt-search)** - YouTube search API
- **[ffmpeg-static](https://www.ffmpeg.org/)** - Audio processing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Guidelines

- Follow existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Write clear commit messages

## 🐛 Issues and Support

Found a bug or need help?

- 🐛 [Report a bug](https://github.com/danielwidhiarto/Drax-Bot/issues/new?labels=bug)
- 💡 [Request a feature](https://github.com/danielwidhiarto/Drax-Bot/issues/new?labels=enhancement)
- 📖 [View existing issues](https://github.com/danielwidhiarto/Drax-Bot/issues)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Daniel Widhiarto**

- GitHub: [@danielwidhiarto](https://github.com/danielwidhiarto)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

Made with ❤️ by Daniel Widhiarto

</div>
