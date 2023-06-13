export function generateUniqueId() {
  const timestamp = Date.now(); // Get the current timestamp in milliseconds
  const randomNum = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
  const uniqueId = timestamp.toString() + randomNum.toString(); // Combine the timestamp and random number to create a unique ID
  return uniqueId;
}