import React from "react";

const QuickLinks: React.FC = () => {
  return (
    <div className="bg-white p-5 cpm-page-header">


      <ul className='cpm-quick-links'>
        <li>
          <div className='icon-wraper'>
            <span className="icon-ic_machine_colored"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span>
          </div>
          <span className='text-sm'>Virtual machine </span>

        </li>

        <li>
          <div className='icon-wraper'>
            <span className="icon-ic_balancers_colored"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span></span>
          </div>
          <span className='text-sm'>Load blancers </span>

        </li>

        <li>
          <div className='icon-wraper'>
            <span className="icon-ic_firewalls_colored"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
          </div>
          <span className='text-sm'>Firewalls </span>

        </li>

        <li>
          <div className='icon-wraper'>
            <span className="icon-ic_org"></span>
          </div>
          <span className='text-sm'>Org structure </span>

        </li>

        <li>
          <div className='icon-wraper'>
            <span className="icon-incident"></span>
          </div>
          <span className='text-sm'>Report incident </span>

        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
