import './greeting.scss';

export const Greeting = (props) => {
  const data = new Date().getHours();
  let name;
  if (props.name) {
    name = `, ${props.name}!`;
  } else {
    name = '!';
  }
  let time;
  if (data >= 12 && data < 18) { time = 'Good afternoon'; }
  if (data >= 18 && data < 22) { time = 'Good evening'; }
  if (data >= 22 || data >= 0 && data < 3) { time = 'Good night'; }
  if (data >= 3 && data < 12) { time = 'Good morning'; }
  return (
    <div
      className="greeting"
    >
      <span>{time}{name}</span>
    </div>
  );
};
