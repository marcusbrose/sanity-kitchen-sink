export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8efd3f4ad6a800d7822f01',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t1bk5noe',
                  apiId: '5c76c337-6a47-4eee-a917-a8960b106b36'
                },
                {
                  buildHookId: '5f8efd3f25801e011c7ea608',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xqmmqhfv',
                  apiId: '77a63173-38f6-4c4c-8196-9a1330ee7885'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcusbrose/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xqmmqhfv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
