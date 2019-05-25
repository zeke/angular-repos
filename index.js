const repos = require('all-the-package-repos')

const angularRepos = Object.keys(repos).reduce((acc, repo) => {
  if (repo.startsWith('@angular/')) {
    acc[repo] = repos[repo]
  }
  return acc
}, {})

process.stdout.write(JSON.stringify(angularRepos, null, 2))