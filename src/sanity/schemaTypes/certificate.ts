import { defineField, defineType } from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificates',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      type: 'string', 
      title: 'Name', 
      description: 'e.g., Meta Front-End Developer Professional Certificate',
      validation: Rule => Rule.required() 
    }),
    defineField({ 
      name: 'issuer', 
      type: 'string', 
      title: 'Issuer',
      description: 'e.g., Coursera / edX' 
    }),
    defineField({ 
      name: 'date', 
      type: 'date', 
      title: 'Date Earned' 
    }),
    defineField({ 
      name: 'url', 
      type: 'url', 
      title: 'Verification Link' 
    }),
  ],
})