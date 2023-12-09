// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import me from '../../me.jpg'



// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    var data=Object.keys(bin).sort()[i - 1];
    if (i % 7 === 0) {
      c += data + '\n';
    } else {
      c += data + "".padEnd((19-data.length), " ");
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};



// About
export const about_me = async (args: string[]): Promise<string> => {
  return `
  <div style="display:inline-flex;align-items: center" >
        <div  >
            <img style="margin-right: 2em;" src="${me.src}" width="280px"  "/></div><div>
Hi, 
I am ${config.name}. A software developer from Bangladesh, currently working in NGA911 to help build Next generation 911 system.
In my long Work experience I have worked with many technologies, built many highly scalable and robust systems. I have developed
LMS, SASS, Ecommerce, portfolio, Migration tools, Server management pipelines, fault tolerent servers , Network mesh, Microservices
and many more. I love bleeding edge technologies.

Type 'sumfetch' to display summary.
Type 'skills' to display skills.
`;

};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


export const skills = async (args: string[]): Promise<any> => {
  const skills = config.skills;
  var c = '';

  if(args.length > 0)  {
    for (const type of args) {

      c += '\n'+ type+ "".padEnd((21-type.length), " ") +': '+ skills[type];

    }
  }

  else{
    for (const type in skills) {

      c += '\n'+ type+ "".padEnd((21-type.length), " ") +': '+ skills[type];

    }
  }





  return `Welcome! Here are my skills listed:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

export const stackoverflow = async (args: string[]): Promise<string> => {
  window.open(`https://stackoverflow.com/users/${config.social.stackoverflow}/`);
  return 'Opening stackoverflow...';
};

export const leetcode = async (args: string[]): Promise<string> => {
  window.open(`https://leetcode.com/${config.social.leetcode}"`);

  return 'Opening leetcode...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
afs   dev   lib         media  pack  run   srv  usr
bin   etc   lib64       mnt    proc  sbin  sys  var
boot  home  lost+found  opt    root  snap  tmp

`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Disk Crashed. :)`;
};

export const rm = async (args: string[]): Promise<string> => {
  if(args.length > 0)
  return `This is what you want to remove!
  try again`;

  return `rm: missing operand`;

};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const download = async (args?: string[])=> {
  window.open('https://raw.githubusercontent.com/eiko03/My-WebCli-Portfolio/master/src/port');
};



export const sudo = async (args?: string[]): Promise<string> => {
  if(
      JSON.stringify(args) == JSON.stringify(['rm', '-rf', '/*']) ||
      JSON.stringify(args) ==JSON.stringify(['rm', '-fr', '/*'])  ||
      JSON.stringify(args) ==JSON.stringify(['rm', '-fr', '/'])  ||
      JSON.stringify(args) ==JSON.stringify(['rm', '-rf', '/'])
  ) {
    window.open('https://www.youtube.com/watch?v=bTEgpLxZQJs', '_blank');
    return  `Nice try... 🌝`;
  }
  else{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
    return `Permission denied: with little power comes... no responsibility? `;
  }
};

export const readable_portfolio = async (args?: string[]) => {
  WinboxDisplayURL('https://eiko03.github.io');
};

const WinboxDisplayMessage = (data:string)=>{
  window.dispatchEvent(new CustomEvent("winboxevent", {
    detail: {
      type: config.enums.winbox.type.message,
      message: data
    }
  }))
}
const WinboxDisplayURL = (data:string)=>{
  window.dispatchEvent(new CustomEvent("winboxevent", {
    detail: {
      type:config.enums.winbox.type.url,
      message: data
    }
  }))
}
const WinboxDisplayComponent = (data:string)=>{
  window.dispatchEvent(new CustomEvent("winboxevent", {
    detail: {
      type: config.enums.winbox.type.component,
      message: data
    }
  }))
}


// Banner
export const banner = (args?: string[]): string => {
  return `                                                                                                                       
╦ ╦┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐                ████████╗███████╗       ███████╗██╗██╗  ██╗ ██████╗ 
║║║├┤ │  │  │ ││││├┤                 ╚══██╔══╝██╔════╝       ██╔════╝██║██║ ██╔╝██╔═══██╗
╚╩╝└─┘┴─┘└─┘└─┘┴ ┴└─┘                   ██║   ███████╗       █████╗  ██║█████╔╝ ██║   ██║
┌┬┐┌─┐  ┌┬┐┬ ┬                          ██║   ╚════██║       ██╔══╝  ██║██╔═██╗ ██║   ██║
 │ │ │  │││└┬┘                          ██║   ███████║▄█╗    ███████╗██║██║  ██╗╚██████╔╝
 ┴ └─┘  ┴ ┴ ┴                           ╚═╝   ╚══════╝╚═╝    ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ 
┌─┐┌─┐┬─┐┌┬┐┌─┐┌─┐┬  ┬┌─┐
├─┘│ │├┬┘ │ ├┤ │ ││  ││ │                                                    
┴  └─┘┴└─ ┴ └  └─┘┴─┘┴└─┘                                                                                                                                                                                                                                                                                                                                                                                                           

Type 'help' to see the list of available commands.
Type 'about_me' to display a short summary.
Type 'retro' to open traditional portfolio.
`;
};
