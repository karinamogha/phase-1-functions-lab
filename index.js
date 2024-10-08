function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42;
    return Math.abs(pickUpLocation - hqLocation)
}
function distanceFromHqInFeet(pickupLocation) {
    // Convert blocks to feet using distanceFromHqInBlocks
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    // Calculate the absolute distance in blocks, then convert to feet
    return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distances over 2500 feet are not allowed
    }
  }
  