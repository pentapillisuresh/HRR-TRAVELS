import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import { useBooking } from "../context/BookingContext";

export default function Cars() {
  const { booking, updateBooking } = useBooking();
  const [brand, setBrand] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sort, setSort] = useState("popular");

  const brands = ["All", ...new Set(cars.map((c) => c.brand))];

  const filtered = useMemo(() => {
    let list = cars.filter((c) =>
      (brand === "All" || c.brand === brand) &&
      (fuel === "All" || c.fuel === fuel) &&
      (transmission === "All" || c.transmission === transmission) &&
      c.price <= maxPrice
    );
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [brand, fuel, transmission, maxPrice, sort]);

  const clear = () => {
    setBrand("All"); setFuel("All"); setTransmission("All"); setMaxPrice(6000);
  };

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mb-8">
        <div className="eyebrow">Our Fleet</div>
        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Find Your Perfect Car</h1>
        <p className="mt-3 text-sm text-muted">Choose from our wide range of self-drive cars in Visakhapatnam.</p>
      </div>

      <div className="card mb-8 p-4">
        <div className="grid gap-3 md:grid-cols-5">
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Pickup Location</label>
            <input className="field" value={booking.pickupLocation} onChange={(e) => updateBooking({ pickupLocation: e.target.value })} />
          </div>
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Pickup Date</label>
            <input className="field" type="date" value={booking.pickupDate} onChange={(e) => updateBooking({ pickupDate: e.target.value })} />
          </div>
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Pickup Time</label>
            <input className="field" type="time" value={booking.pickupTime} onChange={(e) => updateBooking({ pickupTime: e.target.value })} />
          </div>
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-muted">Return Date</label>
            <input className="field" type="date" value={booking.returnDate} onChange={(e) => updateBooking({ returnDate: e.target.value })} />
          </div>
          <Link to="/cars" className="btn-gold self-end">Update Search</Link>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="hidden h-fit lg:block">
          <div className="card sticky top-24 p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold">Filters</h2>
              <button onClick={clear} className="text-xs font-semibold text-goldDark">Clear All</button>
            </div>

            <FilterGroup title="Brand">
              {brands.map((x) => <label key={x} className="flex cursor-pointer items-center gap-2 py-1.5 text-sm"><input type="radio" checked={brand === x} onChange={() => setBrand(x)} /> {x}</label>)}
            </FilterGroup>
            <FilterGroup title="Fuel Type">
              {["All", "Petrol", "Diesel"].map((x) => <label key={x} className="flex cursor-pointer items-center gap-2 py-1.5 text-sm"><input type="radio" checked={fuel === x} onChange={() => setFuel(x)} /> {x}</label>)}
            </FilterGroup>
            <FilterGroup title="Transmission">
              {["All", "Manual", "Automatic"].map((x) => <label key={x} className="flex cursor-pointer items-center gap-2 py-1.5 text-sm"><input type="radio" checked={transmission === x} onChange={() => setTransmission(x)} /> {x}</label>)}
            </FilterGroup>
            <FilterGroup title={`Price up to ₹${maxPrice.toLocaleString("en-IN")}`}>
              <input type="range" min="1000" max="6000" step="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#F6B91A]" />
            </FilterGroup>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold">{filtered.length} Cars Found</p>
            <div className="flex items-center gap-2">
              <select className="rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold outline-none" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="popular">Sort: Popular</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <button className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white lg:hidden"><SlidersHorizontal size={17} /></button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
          {filtered.length === 0 && <div className="card p-10 text-center"><p className="font-display text-xl font-bold">No cars found</p><button onClick={clear} className="btn-gold mt-4">Clear Filters</button></div>}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return <div className="mt-6 border-t border-line pt-5"><h3 className="text-sm font-bold">{title}</h3><div className="mt-2">{children}</div></div>;
}