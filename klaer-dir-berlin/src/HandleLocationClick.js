var selectedLocation

export function handleLocationClick(location) {
  selectedLocation=location;
  console.log(`Clicked on location with id ${selectedLocation._id}`);
}

export function handleDelete(event){
  event.preventDefault();
  fetch("http://localhost:3001/susLocs/"+selectedLocation._id, {method:"DELETE"})
}


  
  