import Client from './api'

export const updatePost = async (forum_id, data) => {
  const res = await Client.put(`/forum/${forum_id}`, data)
  return res.data
}