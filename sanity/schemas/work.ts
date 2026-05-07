import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Obras',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Obra',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Imagem da Obra (Capa)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Subcategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Ilustração', value: 'illustration' },
          { title: 'Modelo 3D', value: '3dmodel' },
          { title: 'Estudo', value: 'study' },
          { title: 'Outro', value: 'other' },
        ],
        layout: 'radio',
      },
      initialValue: 'illustration',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'processImages',
      title: 'Processo Criativo (Etapas)',
      type: 'array',
      of: [
        { 
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      options: {
        layout: 'grid',
      },
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

  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'mainImage',
    },
  },
})