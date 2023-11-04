import React, { useEffect, useState } from 'react';

function Menu(props) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${props.qa}`);
        const data = await response.json();
        setMenu(data.recipes || []); // Set an empty array if data.recipes is null
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    getMenu(); // Fetch the menu when the component mounts and whenever the 'qa' prop changes
  }, [props.qa]); // Add 'props.qa' as a dependency

  return (
    <>
      <h1 className='text-center'>{props.qa}</h1>
      <div className='row'>
        {menu.map((ele) => (
          <div className='col-md-4' key={ele.recipe_id}>
            <h2>{ele.title}</h2>
            <img src={ele.image_url} alt="image" className='w-100' />
            <p>Social Rank: {ele.social_rank}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;