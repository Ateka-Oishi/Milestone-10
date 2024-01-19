import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { useState, useEffect } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    // Update the state when loadedCoffees changes to ensure it's an array.
    if (Array.isArray(loadedCoffees)) {
      setCoffees(loadedCoffees);
    }
  }, [loadedCoffees]);

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>
        Hot Hot Cold Coffee: {coffees.length}
      </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
        ))}
      </div>
    </div>
  );
}

export default App;
