import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Sun, 
  Gauge,
  MapPin,
  Cloud,
  CloudRain,
  CloudSnow
} from "lucide-react";

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  uvIndex: number;
  visibility: number;
}

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
    case 'clear':
      return <Sun className="h-16 w-16 text-amber-400" />;
    case 'cloudy':
    case 'overcast':
      return <Cloud className="h-16 w-16 text-gray-400" />;
    case 'rainy':
    case 'rain':
      return <CloudRain className="h-16 w-16 text-blue-400" />;
    case 'snowy':
    case 'snow':
      return <CloudSnow className="h-16 w-16 text-blue-200" />;
    default:
      return <Sun className="h-16 w-16 text-amber-400" />;
  }
};

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <Card className="weather-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          {weather.city}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Weather Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <WeatherIcon condition={weather.condition} />
              <div>
                <div className="text-6xl font-bold text-foreground">
                  {weather.temperature}°
                </div>
                <div className="text-xl text-muted-foreground">
                  {weather.condition}
                </div>
              </div>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="weather-detail">
              <div className="flex items-center gap-2 mb-1">
                <Thermometer className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Feels like</span>
              </div>
              <div className="text-lg font-semibold">{weather.feelsLike}°</div>
            </div>

            <div className="weather-detail">
              <div className="flex items-center gap-2 mb-1">
                <Droplets className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Humidity</span>
              </div>
              <div className="text-lg font-semibold">{weather.humidity}%</div>
            </div>

            <div className="weather-detail">
              <div className="flex items-center gap-2 mb-1">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Wind</span>
              </div>
              <div className="text-lg font-semibold">{weather.windSpeed} km/h</div>
            </div>

            <div className="weather-detail">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Visibility</span>
              </div>
              <div className="text-lg font-semibold">{weather.visibility} km</div>
            </div>

            <div className="weather-detail">
              <div className="flex items-center gap-2 mb-1">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">UV Index</span>
              </div>
              <div className="text-lg font-semibold">{weather.uvIndex}</div>
            </div>

            <div className="weather-detail">
              <div className="flex items-center gap-2 mb-1">
                <Gauge className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Pressure</span>
              </div>
              <div className="text-lg font-semibold">1013 hPa</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};