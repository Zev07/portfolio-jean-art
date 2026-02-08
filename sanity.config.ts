import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import work from './sanity/schemas/work'

export default defineConfig({
  basePath: '/studio',
  projectId: '9hb4o3d1',
  dataset: 'production',

  title: 'Jean Art Studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [work],
  },
})