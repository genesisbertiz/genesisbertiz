const fs = require('fs');

let markdownContent = ``;
const data = [
  {
    title: 'Github Stats',
    icon: 'bar-chart.gif',
    type: 'Image', // Image, Icon, or List 
    content: {
      alt: 'Github Stats',
      src: 'https://github-readme-stats.vercel.app/api/top-langs/?username=genesisbertiz&theme=default&show_icons=true&hide_border=true&layout=compact'
    },
  },
  {
    title: 'Infrastructures',
    icon: 'management.gif',
    type: 'Icon', // Image, Icon, or List 
    content: [
      {
        link: "https://aws.amazon.com",
        src: "aws.png"
      },
      {
        link: "https://www.digitalocean.com",
        src: "digitalocean.png"
      },
    ]
  },
  {
    title: 'Coding',
    icon: 'coding.gif',
    type: 'Icon', // Image, Icon, or List 
    content: [
      {
        link: "https://nodejs.org/en",
        src: "nodejs.png"
      },
      {
        link: "https://angular.dev",
        src: "angular.png"
      },
    ]
  },
  {
    title: 'Connect With Me',
    icon: 'connect.gif',
    type: 'Links', // Image, Icon, or Links 
    content: [
      {
        link: "https://github.com/genesisbertiz",
        alt: "GitHub"
      },
      {
        link: "https://linkedin.com/in/genesisbertiz",
        alt: "LinkedIn"
      },
      {
        link: "https://genesisbertiz.vercel.app",
        alt: "Portfolio"
      },
    ]
  },
]

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  const type = element.type
  const content = element.content
  markdownContent += `## ![alt text](${element.icon}) **${element.title}**`
  markdownContent += `\n`
  switch(type) {
    case 'Image':
      markdownContent += `![${content.alt}](${content.src})`
      markdownContent += `\n`
      break;
    case 'Icon':
      for (let a = 0; a < content.length; a++) {
        const element = content[a];
        markdownContent += `<a href="${element.link}" target="_blank" rel="noreferrer"><img height="35" width="35" src="${element.src}"/></a>`
        markdownContent += `\n`
      }
      break;    
    case 'Links':
        for (let a = 0; a < content.length; a++) {
          const element = content[a];
          markdownContent += `- [${element.alt}](${element.link})`
          markdownContent += `\n`
        }
        break;
    default:
      break;
  }
}

// Save to a .md file
fs.writeFileSync('output.md', markdownContent);
console.log('Markdown file generated: output.md');
