export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'events-studio',
                  apiId: 'c1e1a5f6-6f62-4cf1-ac77-225044b680b2'
                },
                {
                  buildHookId: '5d14cba2fa5ceb0179faa4ed',
                  title: 'Events Website',
                  name: 'events-web',
                  apiId: 'ecb52b95-a293-46b3-bff2-d299c2dca594'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anders72/events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://events-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
