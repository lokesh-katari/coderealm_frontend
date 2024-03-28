import axios from "axios";
export const PollAPI = async (
  endpoint: string,
  interval: number,
  attempts: number
) => {
  let count = 0;
  const poll = async () => {
    let { data } = await axios.get(endpoint);
    console.log(data);
    if (data.status === "success") {
      return data;
    }
    if (count <= attempts) {
      count += 1;
      setTimeout(poll, interval);
    }
  };

  return await poll();
};
