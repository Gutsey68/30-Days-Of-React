import AutumnDay from '../assets/autumn-day.png';
import AutumnNigth from '../assets/autumn-night.jpeg';
import SpringDay from '../assets/spring-day.jpg';
import SpringNight from '../assets/spring-nigth.webp';
import SummerDay from '../assets/summer-day.avif';
import SummerNight from '../assets/summer-night.webp';
import WinterDay from '../assets/winter-day.jpg';
import WinterNight from '../assets/winter-night.jpg';

export default function Season() {
  const time = new Date();
  const month = time.getMonth();
  const hour = time.getHours();

  let currentSeason = '';
  let isDayOrNight = '';

  switch (month) {
    case 11:
    case 0:
    case 1:
      currentSeason = 'Winter';
      break;
    case 2:
    case 3:
    case 4:
      currentSeason = 'Spring';
      break;
    case 5:
    case 6:
    case 7:
      currentSeason = 'Summer';
      break;
    case 8:
    case 9:
    case 10:
      currentSeason = 'Autumn';
      break;
    default:
      currentSeason = 'Unknown';
      break;
  }
  console.log(currentSeason);

  if (hour >= 6 && hour < 18) {
    isDayOrNight = 'Day';
  } else {
    isDayOrNight = 'Night';
  }

  let background = '';

  if (isDayOrNight === 'Day' && (currentSeason = 'Winter')) {
    WinterDay;
  } else if (isDayOrNight === 'Night' && currentSeason === 'Winter') {
    background = WinterNight;
  } else if (isDayOrNight === 'Day' && currentSeason === 'Summer') {
    background = SummerDay;
  } else if (isDayOrNight === 'Night' && currentSeason === 'Summer') {
    background = SummerNight;
  } else if (isDayOrNight === 'Day' && currentSeason === 'Autumn') {
    background = AutumnDay;
  } else if (isDayOrNight === 'Night' && currentSeason === 'Autumn') {
    background = AutumnNigth;
  } else if (isDayOrNight === 'Day' && currentSeason === 'Spring') {
    background = SpringDay;
  } else if (isDayOrNight === 'Night' && currentSeason === 'Spring') {
    background = SpringNight;
  }

  return (
    <div className="season">
      <img src={background} alt="" />
      <div className="absolut">
        <p>
          {currentSeason} {isDayOrNight}
        </p>
      </div>
    </div>
  );
}
