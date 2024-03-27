export function generatePID() {
  const currentTime = Date.now(); // Get current time in milliseconds
  const randomNumber = Math.floor(Math.random() * 9000) + 1000; // Generate random number between 1000 and 9999
  const pid = `${currentTime}${randomNumber}`; // Combine timestamp and random number
  return pid;
}
