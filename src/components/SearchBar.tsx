import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  onLocationRequest: () => void;
}

export const SearchBar = ({ onSearch, onLocationRequest }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  return (
    <Card className="search-card">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for a city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" className="search-button">
            Search
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onLocationRequest}
            className="location-button"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Current Location
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};