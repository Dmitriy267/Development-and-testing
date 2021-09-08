const yargs=require ('yargs');
const fs=require ('fs/promises');
const path=require ('path');
const argv=yargs
.command (['create <filename> [content]','c'],'Create a new file',{},(argv)=>{
    const filepath=path.resolve(argv.filename);
    const functional=`
import React from 'react';

function ${argv.filename}(){
return (
<div>
${argv.filename}
</div>
);
}
export default ${argv.filename};
`;
    fs.writeFile ((filepath),functional);
    
    .then (()=>console.log('Succesfully'))
    .catch (e=>console.error('Error',e));
    .demandCommand (1, 'At least 1 command should be passed')
})
.argv;