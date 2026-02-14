import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Obras',
  type: 'document',
  fields: [

    defineField({
      name: 'processImages',
      title: 'Processo Criativo (Etapas)',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
    
    defineField({
      name: 'title',
      title: 'Título da Obra',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Obra Principal', value: 'principal' },
          { title: 'Sketch / Estudo', value: 'sketch' },
        ],
        layout: 'radio',
      },
      initialValue: 'principal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem da Obra',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Ano de Criação',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
  ],
})