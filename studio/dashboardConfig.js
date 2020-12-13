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
                  buildHookId: '5fd599d88fce210c32889b93',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vehtqy7v',
                  apiId: 'ec30e1fe-3178-45cb-9e62-72fa754d68bc'
                },
                {
                  buildHookId: '5fd599d870990fedeb0c1539',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3mnz9vf7',
                  apiId: '8e9596d4-0eff-444f-947c-d067996ca119'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bigbassroller/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3mnz9vf7.netlify.app', category: 'apps'}
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
