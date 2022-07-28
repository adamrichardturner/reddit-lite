const API_ROOT = 'https://www.reddit.com';

export const getTopics = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((topic) => topic.data);
}

export const getPosts = async (topic) => {
    const response = await fetch(`${API_ROOT}${topic}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
}

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
  
    return json[1].data.children.map((subreddit) => subreddit.data);
  };