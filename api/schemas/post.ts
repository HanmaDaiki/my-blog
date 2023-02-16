const post = {
  name: 'posts',
  type: 'document',
	title: 'Posts',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
      validation: (rule: any) => rule.required().max(100)
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: any) => rule.required().max(50)
    },
    {
      name: 'slugTitle',
      type: 'string',
      title: 'Slug Title',
      validation: (rule: any) => rule.required().max(50)
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (rule: any) => rule.required(),
      options: {
        source: 'slugTitle',
        maxLength: 200,
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'body',
      type: 'array',
      title: 'Content',
      validation: (rule: any) => rule.required(),
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight' }
        ]
      },
      of: [{type: 'block'},{type: 'image'}]
    }
  ]
};

export default post;