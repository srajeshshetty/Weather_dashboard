import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { WeatherCard } from '@/components/WeatherCard';
import { ForecastCard } from '@/components/ForecastCard';

const Index = () => {
  const [currentWeather, setCurrentWeather] = useState({
    city: 'New York',
    temperature: 22,
    condition: 'Sunny',
    humidity: 65,
    windSpeed: 12,
    feelsLike: 25,
    uvIndex: 6,
    visibility: 10
  });

  const [forecast] = useState([
    { day: 'Today', temp: 22, condition: 'Sunny', icon: 'sun' },
    { day: 'Tomorrow', temp: 19, condition: 'Cloudy', icon: 'cloud' },
    { day: 'Wednesday', temp: 16, condition: 'Rainy', icon: 'rain' },
    { day: 'Thursday', temp: 20, condition: 'Sunny', icon: 'sun' },
    { day: 'Friday', temp: 18, condition: 'Cloudy', icon: 'cloud' }
  ]);

  const handleSearch = (city: string) => {
    // Simulate API call with mock data
    setCurrentWeather({
      city,
      temperature: Math.floor(Math.random() * 30) + 5,
      condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)],
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      feelsLike: Math.floor(Math.random() * 30) + 5,
      uvIndex: Math.floor(Math.random() * 10) + 1,
      visibility: Math.floor(Math.random() * 15) + 5
    });
  };

  const handleLocationRequest = () => {
    // Simulate getting current location weather
    setCurrentWeather({
      ...currentWeather,
      city: 'Current Location',
      temperature: Math.floor(Math.random() * 25) + 10
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-secondary">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Weather Dashboard</h1>
          <p className="text-muted-foreground">Get real-time weather information for any city</p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <SearchBar onSearch={handleSearch} onLocationRequest={handleLocationRequest} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <WeatherCard weather={currentWeather} />
            </div>
            <div>
              <ForecastCard forecast={forecast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
