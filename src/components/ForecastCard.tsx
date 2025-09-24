import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, CloudSnow } from "lucide-react";

interface ForecastDay {
  day: string;
  temp: number;
  condition: string;
  icon: string;
}

interface ForecastCardProps {
  forecast: ForecastDay[];
}

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
    case 'clear':
      return <Sun className="h-6 w-6 text-amber-400" />;
    case 'cloudy':
    case 'overcast':
      return <Cloud className="h-6 w-6 text-gray-400" />;
    case 'rainy':
    case 'rain':
      return <CloudRain className="h-6 w-6 text-blue-400" />;
    case 'snowy':
    case 'snow':
      return <CloudSnow className="h-6 w-6 text-blue-200" />;
    default:
      return <Sun className="h-6 w-6 text-amber-400" />;
  }
};

export const ForecastCard = ({ forecast }: ForecastCardProps) => {
  return (
    <Card className="forecast-card">
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-accent">
              <div className="flex items-center gap-3">
                <WeatherIcon condition={day.condition} />
                <div>
                  <p className="font-medium text-foreground">{day.day}</p>
                  <p className="text-sm text-muted-foreground">{day.condition}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">{day.temp}°</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};