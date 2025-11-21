import React, { useState } from 'react';
import Layout from './components/Layout';
import Timeline from './components/Timeline';
import ReservationModal from './components/ReservationModal';
import { itinerary } from './data/itinerary';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <Layout>
        <Timeline
          itinerary={itinerary}
          onImageClick={(event) => setSelectedEvent(event)}
        />
      </Layout>

      {selectedEvent && (
        <ReservationModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}

export default App;
