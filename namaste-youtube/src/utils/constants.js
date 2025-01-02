const GOOGLE_API_KEY = "AIzaSyA22S8wUnkS-uzxQ7TkJ4fbQXdNjdYlecc";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=
${GOOGLE_API_KEY}`;

export const YOUTUBE_COMMANDS_API = `https://www.googleapis.com/youtube/v3/comments?key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_LIVE_COUNT = 20;
