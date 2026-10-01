import { createContext, useContext, useMemo, useState } from "react";

const BookingContext = createContext(null);

const defaultBooking = {
  carId: "swift-vxi",
  pickupLocation: "Visakhapatnam",
  pickupDate: "2026-10-01",
  pickupTime: "10:00",
  returnDate: "2026-10-03",
  returnTime: "10:00",
  customer: { name: "", mobile: "", email: "", address: "" },
  documents: { licence: null, idProof: null }
};

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(defaultBooking);

  const updateBooking = (patch) => {
    setBooking((prev) => ({ ...prev, ...patch }));
  };

  const updateCustomer = (patch) => {
    setBooking((prev) => ({
      ...prev,
      customer: { ...prev.customer, ...patch }
    }));
  };

  const updateDocuments = (patch) => {
    setBooking((prev) => ({
      ...prev,
      documents: { ...prev.documents, ...patch }
    }));
  };

  const value = useMemo(
    () => ({ booking, updateBooking, updateCustomer, updateDocuments }),
    [booking]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  return useContext(BookingContext);
}
