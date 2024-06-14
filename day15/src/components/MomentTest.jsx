import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

export default function MomentTest() {
  const [currentDateTime, setCurrentDateTime] = useState(
    moment().format('MMMM Do YYYY, h:mm:ss a')
  );
  const [sevenDaysLater, setSevenDaysLater] = useState(
    moment().add(7, 'days').format('MMMM Do YYYY')
  );
  const [oneMonthAgo, setOneMonthAgo] = useState(
    moment().subtract(1, 'month').format('MMMM Do YYYY')
  );
  const [birthday, setBirthday] = useState(
    moment('1990-12-25').format('dddd, MMMM Do YYYY')
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>
        Moment.js Test <MdOutlineAccessTimeFilled />
      </h2>
      <p>Current Date and Time: {currentDateTime}</p>
      <p>Date 7 Days Later: {sevenDaysLater}</p>
      <p>Date 1 Month Ago: {oneMonthAgo}</p>
      <p>Formatted Birthday: {birthday}</p>
    </div>
  );
}
