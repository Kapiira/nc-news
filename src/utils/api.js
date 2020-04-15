import axios from 'axios';

axios.defaults.baseURL = 'https://hannes-be-nc-news.herokuapp.com/api';

export const getArticles = async (params) => {
  const { data } = await axios.get('/articles', { params });
  return data;
};

export const getTopics = async () => {
  const { data } = await axios.get('/topics');
  return data.topics;
};

export const getArticle = async (article_id) => {
  const { data } = await axios.get(`/articles/${article_id}`);
  return data.article;
};

export const getComments = async (article_id) => {
  const { data } = await axios.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const postComment = async (article_id, username, body) => {
  const { data } = await axios.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
  return data.comment;
};

export const deleteComment = async (comment_id) => {
  await axios.delete(`/comments/${comment_id}`);
};

export const patchVote = async (type, item_id, amount) => {
  await axios.patch(`/${type}/${item_id}`, { inc_votes: amount });
};
