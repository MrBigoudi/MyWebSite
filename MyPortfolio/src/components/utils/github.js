import axios from 'axios';

export async function fetchHeatmapData(username) {
  const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`, {
  });
  return response.data.contributions.map(({ level, ...rest }) => rest);
}