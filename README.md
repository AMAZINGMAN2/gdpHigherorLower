# Higher or Lower Country Population Game

Welcome to the **Higher or Lower Country Landmass** game! You can Play this game by going to [https://higherorlowerlandmass.pages.dev](https://higherorlowerlandmass.pages.dev) This is a fun web app where users guess whether the population of the next country is higher or lower than the current one. It’s built using **Next.js 14** and hosted on **Cloudflare**.

## Features

- **Game Mode**: Guess if the population of the next country is higher or lower.
- **Leaderboard**: Track the highest scores and compete against friends!
- **No External API**: All data about countries and populations is stored locally.
- **Lightweight & Fast**: Using Next.js 14 for a fast and responsive experience.

## Technologies Used

- **Next.js 14**: A React-based framework for building server-side rendered and static websites.
- **React**: JavaScript library for building user interfaces.
- **Cloudflare**: Used for hosting and providing high performance and security.
- **CSS/SCSS**: For styling the app and creating an engaging user experience.

## Setup and Installation

### Prerequisites
Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Yarn](https://yarnpkg.com/) (optional, but recommended)

### Steps to run the project locally

1. Clone the repository:

   ```bash
   git clone https://github.com/AMAZINGMAN2/LandMassHigherOrLower.git
   cd HigherOrLower
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if you're using Yarn:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or with Yarn:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Hosting on Cloudflare

Once you're ready to deploy the app, you can host it on Cloudflare's Pages platform. Follow these steps:

1. Push your code to GitHub.
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/).
3. Create a new project and link your GitHub repository.
5. Deploy your site!

## How It Works

1. The user is presented with a country and its population.
2. They must guess if the next country's population is higher or lower.
3. Correct guesses will add points to their score; incorrect guesses will end the game.
4. The game progresses by picking random countries from a pre-defined list of country populations (no external API used).

## Data

The country population data is stored locally in the app


## Contributing

We welcome contributions to improve the game!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to your forked repository (`git push origin feature-branch`).
5. Create a pull request with a clear description of your changes.

## License

This project is open-source and available under the MIT License.

## Contact

If you have any questions or suggestions, feel free to open an issue or reach out to the project maintainer.

---

Enjoy the game! 🌍🎮
