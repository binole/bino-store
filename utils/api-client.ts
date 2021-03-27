export default function apiClient(endpoint: string): Promise<any> {
  return fetch(`${process.env.API_URL}/${endpoint}`).then(res => res.json())
}