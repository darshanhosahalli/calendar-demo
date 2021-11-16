import React from 'react';
import './App.css';
import { WeeklyCalendar } from 'react-week-picker';
import 'react-week-picker/src/lib/calendar.css';

function App() {

  const handleJumpToCurrentWeek = (currenDate) => {
    console.log(`current date: ${currenDate}`);
  }

  const handleWeekPick = (startDate, endDate) => {
    console.log(`${startDate} to ${endDate}`);
  }

  return (
    <div data-testid="calendar" >
      <WeeklyCalendar onWeekPick={handleWeekPick} jumpToCurrentWeekRequired={true} onJumpToCurrentWeek={handleJumpToCurrentWeek}/>
    </div>
  );
}

export default App;
