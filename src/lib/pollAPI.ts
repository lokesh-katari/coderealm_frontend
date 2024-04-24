import axios from "axios";
export const PollAPI = async (
  endpoint: string,
  interval: number,
  attempts: number
) => {
  return new Promise(async (resolve, reject) => {
    let count = 0;
    const poll = async () => {
      try {
        const { data } = await axios.get(endpoint);
        console.log(data);
        if (data.status === "success") {
          console.log(data, "iside the poll api");

          resolve(data);
        } else if (count >= attempts) {
          reject(new Error("Maximum attempts reached"));
        } else {
          count += 1;
          setTimeout(poll, interval);
        }
      } catch (error) {
        reject(error);
      }
    };
    poll();
  });
};
