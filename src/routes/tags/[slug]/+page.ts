import type { Post } from '$lib/types'

export const load = async ({ fetch, params }) => {
  const response = await fetch(`/api/tags/${params.slug}`)
  const posts: Post[] = await response.json()
  return { params, posts }
}
