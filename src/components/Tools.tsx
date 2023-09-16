import Divider from './Divider';
import { AmazonwebservicesOriginal, AnsibleOriginal, AppleOriginal, CplusplusOriginal, GoOriginal, LinuxOriginal, MicrosoftsqlserverPlain, MongodbOriginal, PackerOriginal, PythonOriginal, ReactOriginal, TailwindcssOriginalWordmark, TailwindcssPlain, TerraformOriginal, Windows8Original } from 'devicons-react';

const tools = [
    { id: 1, name: 'Programming Languages', values: ['Python', 'C++', 'Go'] },
    { id: 2, name: 'Data Storage', values: ['SQLServer', 'MongoDb'] },
    { id: 3, name: 'Infrastructure/OS', values: ['AWS', 'Terraform', 'Ansible', 'Packer', 'Linux', 'Windows', 'MacOS'] },
]

const toolIconMap = new Map<string, JSX.Element> ([
  ['Python', <PythonOriginal size={32}/>],
  ['C++', <CplusplusOriginal size={32}/>],
  ['Go', <GoOriginal size={32}/>],
  ['SQLServer', <MicrosoftsqlserverPlain size={32}/>],
  ['MongoDb', <MongodbOriginal size={32}/>],
  ['AWS', <AmazonwebservicesOriginal size={32}/>],
  ['Terraform', <TerraformOriginal size={32}/>],
  ['Ansible', <AnsibleOriginal size={32}/>],
  ['Packer', <PackerOriginal size={32}/>],
  ['Linux', <LinuxOriginal size={32}/>],
  ['Windows', <Windows8Original size={32}/>],
  ['MacOS', <AppleOriginal size={32}/>],
  ['React', <ReactOriginal size={32}/>],
  ['Tailwind', <TailwindcssPlain size={32}/>]
])

const getIcons = (values: Array<string>) => {
  return values.map((value) => toolIconMap.get(value));
}

const Tools = () => {


    return(
        <div className="tools">
            <Divider title='Tools'/>
            <dl className="p-5 bg-gray-50 dark:bg-gray-700 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <p className=" truncate text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</p>
                <div className='flex flex-wrap gap-2 pt-3'>
                    {getIcons(item.values)}
                </div>
            </dt>
            </div>
            ))}
            
            </dl>
        </div>
    )
}

export default Tools;