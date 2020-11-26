export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fbfb40b1c76598ffa49890f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ikoemr26',
                  apiId: 'da3ab032-49e0-423f-b1a6-5cc7140bc10c'
                },
                {
                  buildHookId: '5fbfb40b613244c059f9665b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gph4a4m6',
                  apiId: '346086c8-dd03-4e2f-bb05-223820c94c89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/julikrog/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gph4a4m6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
