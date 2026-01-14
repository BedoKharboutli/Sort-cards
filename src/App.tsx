import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface Car {
  id: number
  make: string
  model: string
  year: number
  price: number
  mileage: number
  location: string
  description: string
  image: string
  sellerName: string
  sellerPhone: string
}

const initialCars: Car[] = [
  {
    id: 5,
    make: 'Mercedes-Benz',
    model: 'AMG GT',
    year: 2023,
    price: 89000,
    mileage: 5200,
    location: 'Beverly Hills, CA',
    description: 'Stunning luxury sports car in pristine condition. Premium interior, advanced driver assistance, panoramic roof, and powerful performance. A true head-turner!',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop',
    sellerName: 'Alex Martinez',
    sellerPhone: '(555) 999-8888'
  },
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 25000,
    mileage: 35000,
    location: 'Los Angeles, CA',
    description: 'Excellent condition, single owner, full service history. Features include leather seats, sunroof, and advanced safety package.',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
    sellerName: 'John Smith',
    sellerPhone: '(555) 123-4567'
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2020,
    price: 22000,
    mileage: 28000,
    location: 'San Francisco, CA',
    description: 'Sporty and fuel-efficient. Great for city driving. Includes backup camera and Apple CarPlay.',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&h=300&fit=crop',
    sellerName: 'Sarah Johnson',
    sellerPhone: '(555) 234-5678'
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2019,
    price: 35000,
    mileage: 42000,
    location: 'Miami, FL',
    description: 'Classic American muscle car. V8 engine, manual transmission. Head-turner guaranteed!',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?w=500&h=300&fit=crop',
    sellerName: 'Mike Davis',
    sellerPhone: '(555) 345-6789'
  },
  {
    id: 4,
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 45000,
    mileage: 15000,
    location: 'New York, NY',
    description: 'Luxury sedan with premium features. Navigation, heated seats, premium sound system.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
    sellerName: 'Emily Chen',
    sellerPhone: '(555) 456-7890'
  }
]

function App() {
  const [cars, setCars] = useState<Car[]>(initialCars)
  const [searchTerm, setSearchTerm] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [showSellForm, setShowSellForm] = useState(false)
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    location: '',
    description: '',
    sellerName: '',
    sellerPhone: ''
  })

  const filteredCars = cars.filter(car => {
    const matchesSearch = 
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesMinPrice = !minPrice || car.price >= parseInt(minPrice)
    const matchesMaxPrice = !maxPrice || car.price <= parseInt(maxPrice)
    
    return matchesSearch && matchesMinPrice && matchesMaxPrice
  })

  const handleSubmitCar = () => {
    if (!newCar.make || !newCar.model || !newCar.price) return
    
    const car: Car = {
      id: Date.now(),
      make: newCar.make,
      model: newCar.model,
      year: parseInt(newCar.year) || 2024,
      price: parseInt(newCar.price),
      mileage: parseInt(newCar.mileage) || 0,
      location: newCar.location || 'Unknown',
      description: newCar.description || 'No description provided',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=300&fit=crop',
      sellerName: newCar.sellerName || 'Anonymous',
      sellerPhone: newCar.sellerPhone || 'Not provided'
    }
    
    setCars([car, ...cars])
    setNewCar({
      make: '',
      model: '',
      year: '',
      price: '',
      mileage: '',
      location: '',
      description: '',
      sellerName: '',
      sellerPhone: ''
    })
    setShowSellForm(false)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setMinPrice('')
    setMaxPrice('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=80&h=80&fit=crop" 
              alt="Victory silhouette"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
            />
            <h1 className="text-2xl font-bold">AutoMarket</h1>
          </div>
          <Dialog open={showSellForm} onOpenChange={setShowSellForm}>
            <DialogTrigger asChild>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                + Sell Your Car
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>List Your Car for Sale</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="make">Make *</Label>
                    <Input
                      id="make"
                      placeholder="e.g. Toyota"
                      value={newCar.make}
                      onChange={(e) => setNewCar({...newCar, make: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model *</Label>
                    <Input
                      id="model"
                      placeholder="e.g. Camry"
                      value={newCar.model}
                      onChange={(e) => setNewCar({...newCar, model: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      placeholder="e.g. 2021"
                      value={newCar.year}
                      onChange={(e) => setNewCar({...newCar, year: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g. 25000"
                      value={newCar.price}
                      onChange={(e) => setNewCar({...newCar, price: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mileage">Mileage</Label>
                    <Input
                      id="mileage"
                      type="number"
                      placeholder="e.g. 35000"
                      value={newCar.mileage}
                      onChange={(e) => setNewCar({...newCar, mileage: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g. Los Angeles, CA"
                      value={newCar.location}
                      onChange={(e) => setNewCar({...newCar, location: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your car..."
                    value={newCar.description}
                    onChange={(e) => setNewCar({...newCar, description: e.target.value})}
                  />
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Contact Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sellerName">Your Name</Label>
                      <Input
                        id="sellerName"
                        placeholder="John Doe"
                        value={newCar.sellerName}
                        onChange={(e) => setNewCar({...newCar, sellerName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sellerPhone">Phone</Label>
                      <Input
                        id="sellerPhone"
                        placeholder="(555) 123-4567"
                        value={newCar.sellerPhone}
                        onChange={(e) => setNewCar({...newCar, sellerPhone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                <Button onClick={handleSubmitCar} className="w-full bg-blue-600 hover:bg-blue-700">
                  List My Car
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=900&fit=crop"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Find Your Dream Car
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Browse thousands of quality vehicles from trusted sellers. Buy or sell with confidence.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  Browse Cars
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                  Sell Your Car
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="search" className="text-sm text-gray-600">Search</Label>
              <Input
                id="search"
                placeholder="Search by make, model, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-32">
              <Label htmlFor="minPrice" className="text-sm text-gray-600">Min Price</Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="$0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="w-32">
              <Label htmlFor="maxPrice" className="text-sm text-gray-600">Max Price</Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="$100,000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            {(searchTerm || minPrice || maxPrice) && (
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-4">
          Showing {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
        </p>

        {/* Car Grid */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
            <Button variant="link" onClick={clearFilters} className="mt-2">
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map(car => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCar(car)}>
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {car.year} {car.make} {car.model}
                    </CardTitle>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">
                    ${car.price.toLocaleString()}
                  </p>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">{car.mileage.toLocaleString()} mi</Badge>
                    <Badge variant="outline">{car.location}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full" onClick={(e) => { e.stopPropagation(); setSelectedCar(car); }}>
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Car Details Modal */}
      <Dialog open={!!selectedCar} onOpenChange={() => setSelectedCar(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCar && (
            <>
              <img
                src={selectedCar.image}
                alt={`${selectedCar.make} ${selectedCar.model}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedCar.year} {selectedCar.make} {selectedCar.model}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-3xl font-bold text-blue-600">
                  ${selectedCar.price.toLocaleString()}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">{selectedCar.mileage.toLocaleString()} miles</Badge>
                  <Badge variant="outline">{selectedCar.location}</Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-600">{selectedCar.description}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Seller Information</h4>
                  <p className="text-gray-700">👤 {selectedCar.sellerName}</p>
                  <p className="text-gray-700">📞 {selectedCar.sellerPhone}</p>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Contact Seller
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
