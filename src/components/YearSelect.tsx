import React, { useState } from 'react'


const YearSelect = () => {
    const [selectedYear, setSelectedYear] = useState<Date | null>(null);

    const handleYearChange = (date: Date | null) => {
      setSelectedYear(date);
      if (date) {
        console.log('Selected Year:', date.getFullYear());
      }
    };
   
  return (
    <div>
   
    </div>
  )
}

export default YearSelect