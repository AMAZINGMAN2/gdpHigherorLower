'use client'
import { useState, useEffect } from "react";

const countries = [{"name": "United States", "gdp": 29168}, {"name": "China", "gdp": 18273}, {"name": "Germany", "gdp": 4710}, {"name": "Japan", "gdp": 4070}, {"name": "India", "gdp": 3889}, {"name": "United Kingdom", "gdp": 3588}, {"name": "France", "gdp": 3174}, {"name": "Italy", "gdp": 2377}, {"name": "Canada", "gdp": 2215}, {"name": "Brazil", "gdp": 2188}, {"name": "Russia", "gdp": 2184}, {"name": "South Korea", "gdp": 1870}, {"name": "Mexico", "gdp": 1848}, {"name": "Australia", "gdp": 1802}, {"name": "Spain", "gdp": 1731}, {"name": "Indonesia", "gdp": 1403}, {"name": "Turkey", "gdp": 1344},
  {"name": "Netherlands", "gdp": 1218}, {"name": "Saudi Arabia", "gdp": 1101}, {"name": "Switzerland", "gdp": 942}, {"name": "Poland", "gdp": 863}, {"name": "Taiwan", "gdp": 775}, {"name": "Belgium", "gdp": 662}, {"name": "Sweden", "gdp": 609}, {"name": "Argentina", "gdp": 604}, {"name": "Ireland", "gdp": 561}, {"name": "United Arab Emirates", "gdp": 545}, {"name": "Austria", "gdp": 536}, {"name": "Singapore", "gdp": 531}, {"name": "Thailand", "gdp": 529}, {"name": "Norway", "gdp": 504}, {"name": "Philippines", "gdp": 470}, {"name": "Vietnam", "gdp": 468}, {"name": "Bangladesh", "gdp": 451}, {"name": "Malaysia", "gdp": 440}, {"name": "Iran", "gdp": 434}, {"name": "Colombia", "gdp": 417}, {"name": "Denmark", "gdp": 412}, {"name": "South Africa", "gdp": 403}, {"name": "Hong Kong", "gdp": 402}, {"name": "Romania", "gdp": 381}, {"name": "Egypt", "gdp": 380}, {"name": "Pakistan", "gdp": 375}, {"name": "Czech Republic", "gdp": 343}, {"name": "Chile", "gdp": 329}, {"name": "Finland", "gdp": 306}, {"name": "Portugal", "gdp": 303}, {"name": "Kazakhstan", "gdp": 293}, {"name": "Peru", "gdp": 283}, {"name": "Iraq", "gdp": 264}, {"name": "Algeria", "gdp": 260}, {"name": "Greece", "gdp": 253}, {"name": "New Zealand", "gdp": 252}, {"name": "Hungary", "gdp": 229}, {"name": "Qatar", "gdp": 221}, {"name": "Nigeria", "gdp": 200}, {"name": "Ukraine", "gdp": 184}, {"name": "Kuwait", "gdp": 162}, {"name": "Morocco", "gdp": 157}, {"name": "Ethiopia", "gdp": 145}, {"name": "Slovakia", "gdp": 143}, {"name": "Dominican Republic", "gdp": 126}, {"name": "Ecuador", "gdp": 121}, {"name": "Puerto Rico", "gdp": 121}, {"name": "Kenya", "gdp": 116}, {"name": "Angola", "gdp": 113}, {"name": "Uzbekistan", "gdp": 113}, {"name": "Guatemala", "gdp": 112},
  {"name": "Oman", "gdp": 110}, {"name": "Bulgaria", "gdp": 108}, {"name": "Venezuela", "gdp": 106}, {"name": "Costa Rica", "gdp": 95}, {"name": "Luxembourg", "gdp": 91}, {"name": "Croatia", "gdp": 90}, {"name": "Panama", "gdp": 87}, {"name": "Ivory Coast", "gdp": 87}, {"name": "Sri Lanka", "gdp": 75}, {"name": "Turkmenistan", "gdp": 84}, {"name": "Lithuania", "gdp": 83}, {"name": "Uruguay", "gdp": 83}, {"name": "Serbia", "gdp": 83}, {"name": "Tanzania", "gdp": 80}, {"name": "Azerbaijan", "gdp": 76}, {"name": "Ghana", "gdp": 75}, {"name": "Slovenia", "gdp": 73}, {"name": "Belarus", "gdp": 73}, {"name": "DR Congo", "gdp": 72}, {"name": "Myanmar", "gdp": 64}, {"name": "Uganda", "gdp": 56}, {"name": "Macau", "gdp": 53}, {"name": "Cameroon", "gdp": 53}, {"name": "Jordan", "gdp": 53}, {"name": "Tunisia", "gdp": 53}, {"name": "Bolivia", "gdp": 48}, {"name": "Bahrain", "gdp": 48}, {"name": "Cambodia", "gdp": 47}, {"name": "Latvia", "gdp": 46}, {"name": "Paraguay", "gdp": 45}, {"name": "Libya", "gdp": 45}, {"name": "Nepal", "gdp": 44}, {"name": "Estonia", "gdp": 43}, {"name": "Honduras", "gdp": 36.7}, {"name": "Zimbabwe", "gdp": 35.9}, {"name": "El Salvador", "gdp": 35.8}, {"name": "Cyprus", "gdp": 34.8}, {"name": "Senegal", "gdp": 33.7}, {"name": "Georgia", "gdp": 33.2}, {"name": "Iceland", "gdp": 32.9}, {"name": "Papua New Guinea", "gdp": 31.7}, {"name": "Zambia", "gdp": 29.9}, {"name": "Bosnia and Herzegovina", "gdp": 29.1}, {"name": "Trinidad and Tobago", "gdp": 28.4}, {"name": "Sudan", "gdp": 26.9}, {"name": "Guinea", "gdp": 25.4}, {"name": "Albania", "gdp": 25.4}, {"name": "Armenia", "gdp": 25.4}, {"name": "Haiti", "gdp": 24.0}, {"name": "Mozambique", "gdp": 23.0}, {"name": "Malta", "gdp": 22.7}, {"name": "Mongolia", "gdp": 21.9}, {"name": "Burkina Faso", "gdp": 21.9}, {"name": "Mali", "gdp": 21.7}, {"name": "Botswana", "gdp": 21.4}, {"name": "Benin", "gdp": 21.4}, {"name": "Guyana", "gdp": 21.2}, {"name": "Gabon", "gdp": 21.0}, {"name": "Jamaica", "gdp": 20.1}, {"name": "Nicaragua", "gdp": 18.8}, {"name": "Niger", "gdp": 18.8}, {"name": "Chad", "gdp": 18.7}, {"name": "Palestine", "gdp": 18.6}, {"name": "Moldova", "gdp": 18.4}, {"name": "Lebanon", "gdp": 21.8}, {"name": "Yemen", "gdp": 16.9}, {"name": "Madagascar", "gdp": 16.5}, {"name": "Mauritius", "gdp": 16.4}, {"name": "North Macedonia", "gdp": 15.9}, {"name": "Kyrgyzstan", "gdp": 15.8}, {"name": "Brunei", "gdp": 15.5}, {"name": "Congo", "gdp": 15.5}, {"name": "Laos", "gdp": 15.2}, {"name": "Afghanistan", "gdp": 14.5}, {"name": "Bahamas", "gdp": 14.4}, {"name": "Rwanda", "gdp": 13.7}, {"name": "Tajikistan", "gdp": 13.0}, {"name": "Somalia", "gdp": 12.8}, {"name": "Namibia", "gdp": 12.8}, {"name": "Kosovo", "gdp": 11.3}, {"name": "Malawi", "gdp": 11.2},
  {"name": "Equatorial Guinea", "gdp": 10.7}, {"name": "Mauritania", "gdp": 10.6}, {"name": "Togo", "gdp": 9.8}, {"name": "Montenegro", "gdp": 8.0}, {"name": "Maldives", "gdp": 7.2}, {"name": "Barbados", "gdp": 6.9}, {"name": "South Sudan", "gdp": 6.5}, {"name": "Fiji", "gdp": 5.8}, {"name": "Eswatini", "gdp": 5.1}, {"name": "Liberia", "gdp": 4.8}, {"name": "Sierra Leone", "gdp": 4.6}, {"name": "Djibouti", "gdp": 4.4}, {"name": "Suriname", "gdp": 4.3}, {"name": "Aruba", "gdp": 4.1}, {"name": "Andorra", "gdp": 3.9}, {"name": "Belize", "gdp": 3.3}, {"name": "Bhutan", "gdp": 3.1}, {"name": "Burundi", "gdp": 3.1}, {"name": "Central African Republic", "gdp": 2.8}, {"name": "Cape Verde", "gdp": 2.7}, {"name": "Gambia", "gdp": 2.7}, {"name": "Saint Lucia", "gdp": 2.6}, {"name": "Lesotho", "gdp": 2.4}, {"name": "Seychelles", "gdp": 2.2}, {"name": "Guinea-Bissau", "gdp": 2.2}, {"name": "Antigua and Barbuda", "gdp": 2.1}, {"name": "San Marino", "gdp": 2.0}, {"name": "East Timor", "gdp": 1.99}, {"name": "Solomon Islands", "gdp": 1.71}, {"name": "Comoros", "gdp": 1.42}, {"name": "Grenada", "gdp": 1.41}, {"name": "Vanuatu", "gdp": 1.29}, {"name": "Saint Kitts and Nevis", "gdp": 1.13}, {"name": "Saint Vincent and the Grenadines", "gdp": 1.13}, {"name": "Samoa", "gdp": 1.02}, {"name": "São Tomé and Príncipe", "gdp": 0.75}, {"name": "Dominica", "gdp": 0.71}, {"name": "Tonga", "gdp": 0.58}, {"name": "Micronesia", "gdp": 0.48}, {"name": "Kiribati", "gdp": 0.31}, {"name": "Palau", "gdp": 0.31}, {"name": "Marshall Islands", "gdp": 0.3}, {"name": "Nauru", "gdp": 0.16}, {"name": "Tuvalu", "gdp": 0.07}];



export default function Home() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [nextCountry, setNextCountry] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Function to get a random country from the list
  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  };

  // Initialize game with two random countries
  const startGame = () => {
    setCurrentCountry(getRandomCountry());
    setNextCountry(getRandomCountry());
  };

  // Handle the user's guess
  const handleAnswer = (isHigher) => {
    if (gameOver) return;

    const isCorrect =
      (isHigher && nextCountry.gdp >= currentCountry.gdp) ||
      (!isHigher && nextCountry.gdp <= currentCountry.gdp);

    if (isCorrect) {
      setScore(score + 1);
      setCurrentCountry(nextCountry);
      setNextCountry(getRandomCountry());
    } else {
      setGameOver(true);
    }
  };

  // Use effect to trigger startGame on the client side
  useEffect(() => {
    if (!currentCountry && !nextCountry) {
      startGame();
    }
  }, [currentCountry, nextCountry]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black to-gray-950 text-white">
      <div className="text-center mb-[20vh]">
        <h1 className="text-6xl font-bold mb-8">Country GDP: <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">Higher</span> or <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500">Lower</span>?</h1>
        {gameOver ? (
          <div className="game-over">
            <h2 className="text-3xl mb-4">Game Over!</h2>
            <p className="text-4xl mt-8">Your Score: {score}</p>
          <div className="answer">
          <h3 className="text-5xl my-4">{nextCountry?.name}'s GDP  : ${nextCountry?.gdp.toLocaleString()} Billion</h3>
          </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-400 via-violet-600 to-blue-700 text-white rounded-lg hover:bg-blue-400"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="game flex justify-between items-center mt-[24vh]  w-full max-w-8xl mx-auto p-4">
            {/* Left Section: Current Country */}
            <div className="current-country w-1/2 text-gray-100 text-center">
              <p className="font-bold text-5xl">{currentCountry?.name}</p>
              <p className="text-2xl pt-4 ">${currentCountry?.gdp.toLocaleString()}Billion</p>
            </div>

            {/* Divider Line */}
            <div className="divider w-1 px-2 bg-white"></div>

            {/* Right Section: Next Country */}
            <div className="next-country w-1/2 text-gray-100 text-center">
              <p className="font-bold text-5xl">{nextCountry?.name}</p>
              <p className="text-2xl pt-4">&nbsp;</p>
            </div>
          </div>
        )}

        {!gameOver && (
          <div className="choices flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleAnswer(true)}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500  text-white rounded-lg hover:bg-green-400"
            >
              Higher
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-violet-500 text-white rounded-lg hover:bg-red-400"
            >
              Lower
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
