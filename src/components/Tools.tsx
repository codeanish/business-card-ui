import User from '../types/User';
import Divider from './Divider';
import { AmazonwebservicesOriginal, AnsibleOriginal, AppleOriginal, CplusplusOriginal, CsharpOriginal, GoOriginal, JavascriptOriginal, LinuxOriginal, MicrosoftsqlserverPlain, MongodbOriginal, PackerOriginal, PythonOriginal, PythonPlain, ReactOriginal, TailwindcssPlain, TerraformOriginal, TypescriptOriginal, Windows8Original } from 'devicons-react';

const toolIconMap = new Map<string, JSX.Element> ([
  ['Python', <PythonOriginal key="1" size={32}/>],
  ['C++', <CplusplusOriginal key="2" size={32}/>],
  ['Go', <GoOriginal key="3" size={32}/>],
  ['SQLServer', <MicrosoftsqlserverPlain key="4" size={32}/>],
  ['MongoDb', <MongodbOriginal key="5" size={32}/>],
  ['AWS', <AmazonwebservicesOriginal key="6" size={32}/>],
  ['Terraform', <TerraformOriginal key="7" size={32}/>],
  ['Ansible', <AnsibleOriginal key="8" size={32}/>],
  ['Packer', <PackerOriginal key="9" size={32}/>],
  ['Linux', <LinuxOriginal key="10" size={32}/>],
  ['Windows', <Windows8Original key="11" size={32}/>],
  ['MacOS', <AppleOriginal key="12" size={32}/>],
  ['React', <ReactOriginal key="13" size={32}/>],
  ['Tailwind', <TailwindcssPlain key="14" size={32}/>],
  ['C#', <CsharpOriginal key="15" size={32}/>],
  ['Javascript', <JavascriptOriginal key="16" size={32}/>],
  ['Typescript', <TypescriptOriginal key="17" size={32}/>]
])

const getIcons = (values: Array<string>) => {
  return values.map((value) => toolIconMap.get(value));
}

const Tools = ({user}:{user:User}) => {


    return(
        <div className="tools">
          <Divider title='Tools'/>
          <dl className="p-5 bg-gray-50 dark:bg-gray-700 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                  <p className=" truncate text-sm font-medium text-gray-500 dark:text-gray-400">Programming Languages</p>
                    <div className='flex flex-wrap gap-2 pt-3'>
                        {getIcons(user.ProgrammingLanguages)}
                    </div>
                </dt>
              </div>
              <div
              className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                  <p className=" truncate text-sm font-medium text-gray-500 dark:text-gray-400">Data Storage</p>
                    <div className='flex flex-wrap gap-2 pt-3'>
                        {getIcons(user.DataStorage)}
                    </div>
                </dt>
              </div>
              <div
              className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                  <p className=" truncate text-sm font-medium text-gray-500 dark:text-gray-400">Infrastructure/OS</p>
                    <div className='flex flex-wrap gap-2 pt-3'>
                        {getIcons(user.Infrastructure)}
                    </div>
                </dt>
              </div>
            </dl>
        </div>
    )
}

export default Tools;