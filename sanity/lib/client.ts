import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '9hb4o3d1',
  dataset: 'production',
  apiVersion: '2024-02-04',
  useCdn: false,
})