import config from '../../../config.json';
import me from '../../me.jpg'

const sumfetch = async (args: string[]): Promise<string> => {

  return `        
        <div style="display:inline-flex;align-items: center" >
        <div  >
            <img style="margin-right: 2em;" src="${me.src}" width="280px"  "/></div><div>
        
        
                                                  
 sumfetch: summary display
-----------
 ABOUT
${config.ps1_hostname}
 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
-----------
 SOCIAL 
≡ <u><a href="https://stackoverflow.com/users/${config.social.stackoverflow}" target="_blank">stackoverflow.com/users/${config.social.stackoverflow}</a></u>
‱ <u><a href="https://leetcode.com/${config.social}" target="_blank">leetcode.com/${config.social.leetcode}</a></u> 

</div>
</div>
`;

}
export default sumfetch;
