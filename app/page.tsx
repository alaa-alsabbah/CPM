import React from 'react';
import DatatableExample from '../components/ui/datatableexample';
import QuickLinks from '../components/ui/quicklinks';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (


    <div>
      <QuickLinks />
      <div className='flex items-end justify-between my-4'>
           <h2 className="cpm-title-section-out mt-3 mb-0">Services </h2>
            <button className='btn btn-link'> View All <i className='icon-keyboard_arrow_right'></i></button>
      </div>
      <div className="cpm-box-container">
        <DatatableExample />
      </div>

 
      <div className="cpm-box-container my-5">
      <div className='flex items-end justify-between my-4'>
           <h3 className="cpm-title-section-in mb-3">Example of title inside h3  </h3>
            <button className='btn btn-link'> View All <i className='icon-keyboard_arrow_right'></i></button>
      </div>

      <ul className='flex gap-5 items-center'>
      <li>
        <i className='ic-start'>
      <span className="icon-ic_start"><span className="path1"></span><span className="path2"></span></span>
      </i>
      </li>

      <li>
      <i className='ic-restart text-lg'>
      <span className="icon-ic_restart"></span>
        </i>
      </li>

      <li>
      <i className='ic-stop'>
      <span className="icon-ic_stop"><span className="path1"></span><span className="path2"></span></span>
      </i>
      </li>
      </ul>

      <hr />
      <div className='my-3'>
      <h3 className="cpm-title-section-in mb-3">Buttons Examples  </h3>
      <a href='#'>Link Example with arrow <i className="icon-keyboard_arrow_right"></i></a>
      <button className='btn btn-primary mx-3'>Primary</button>
      <button className='btn btn-secondary mx-3'>Secondary</button>
      <button className='btn btn-primary-outline mx-3'>Primary Outline</button>
      <button className='btn btn-link mx-3'>Link Button</button>
      <a href='#'>Link Example</a>
  
      </div>

      <hr />
      <div className='my-3'>
      <h3 className="cpm-title-section-in mb-3">Colors State  </h3>
      <div className='bg-selected'>selected (can be used on tabs selected as per the design)</div>
      <div className="p-4 mb-4 text-sm text-blue-800 rounded-sm bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>      
<div className="p-4 mb-4 text-sm text-red-800 rounded-sm bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</div>

<div className="p-4 mb-4 text-sm text-red-500 rounded-sm  dark:text-red-400">
<i className='icon-error_outline'></i> ** Error reuired 
</div>
</div>
<div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Switche</Label>
    </div>
      </div>
   
    </div>
  );
}
