import React, { useState } from 'react';
import Layout from './components/Layout';
import DayList from './components/DayList';
import DayDetail from './components/DayDetail';
import ReservationModal from './components/ReservationModal';
import { itinerary } from './data/itinerary';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'detail'
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedDay(null);
  };

  return (
    <>
      <Layout
        title={selectedDay ? selectedDay.date : "Spain Trip 2025"}
        showBack={currentView === 'detail'}
        onBack={handleBack}
      >
        {currentView === 'list' ? (
          <DayList itinerary={itinerary} onDayClick={handleDayClick} />
        ) : (
          <DayDetail
            day={selectedDay}
            onBack={handleBack}
            onImageClick={(event) => setSelectedEvent(event)}
          />
        )}
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
