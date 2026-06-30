// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
//   imageSize: 90,
// };
// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];
// function App() {
//   const listItems = products.map((product => <li key={product.id} style={{ color: product.isFruit ? 'orange' : 'green' }} >
//     {product.title}
//   </li>))
//   return (<ol>{listItems}</ol>);
// }
// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//       <App />
//     </>
//   );
// }

// ---------------------------------------        ----------------------------------

import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count = {count} handleClick ={handleClick}/>
      <MyButton count = {count} handleClick ={handleClick}/>
      <MyButton count = {count} handleClick ={handleClick}/>
    </div>
  );
}

function MyButton({count,handleClick}) {

  console.log(count);
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
