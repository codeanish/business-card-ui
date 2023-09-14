import Divider from './Divider';
import { AmazonwebservicesPlainWordmark, CplusplusPlain, PythonPlain, RustPlain, TerraformPlain } from 'devicons-react';

const tools = [
    { id: 1, name: 'Programming Languages' },
    { id: 2, name: 'Data Storage' },
    { id: 3, name: 'Infrastructure/OS' }
]

const Tools = () => {


    return(
        <div className="tools">
            <Divider title='Tools'/>
            <dl className="pt-5 px-5 bg-gray-50 dark:bg-gray-700 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <p className=" truncate text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</p>
                <div className='flex flex-wrap gap-2 pt-3'>
                    <PythonPlain color="white" size={32}/>
                    <RustPlain color="white" size={32}/>
                    <CplusplusPlain color="white" size={32}/>
                    <TerraformPlain color="white" size={32}/>
                    <CplusplusPlain color="white" size={32}/>
                    <TerraformPlain color="white" size={32}/>
                    <CplusplusPlain color="white" size={32}/>
                    <TerraformPlain color="white" size={32}/>
                    <CplusplusPlain color="white" size={32}/>
                    <TerraformPlain color="white" size={32}/>
                    <AmazonwebservicesPlainWordmark color='white' size={32}/>
                </div>
            </dt>
            </div>
            ))}
            
            </dl>
        </div>
    )
}

export default Tools;