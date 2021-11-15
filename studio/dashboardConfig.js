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
                  buildHookId: '6192bf1a419ca200b53ea3e4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gxaffzx4',
                  apiId: 'fc9ac99d-12ef-43ee-a98f-b11a175dc527'
                },
                {
                  buildHookId: '6192bf1a08d0132b3c544ea5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p28zkpvs',
                  apiId: 'b183303f-03fb-471e-bd46-397b4905a114'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haleyngonadi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p28zkpvs.netlify.app', category: 'apps'}
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
