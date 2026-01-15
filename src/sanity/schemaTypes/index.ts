import { type SchemaTypeDefinition } from 'sanity'
import { certificateType } from './certificate' // Importing new file
import { postType } from './post' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [certificateType, postType], // Adding them to the array
}