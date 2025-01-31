"use client";
import { OffCanvas } from "../components/ui/off-canvas";
import OffCanvasContent from "../components/ui/OffCanvasContent";
import Datatableexamplewithcollpase from "../components/ui/datatableexample-withcollpase";

import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

const OrgStructure = () => {

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const [setShowUsersbar, setShowUsers] = React.useState<Checked>(false)

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>

      <div className="bg-white p-5 cpm-page-header mb-3">
        <div className="flex justify-between items-center">
          <div>
            {/* <div className="mb-4 cpm-breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbList>
              </Breadcrumb>
            </div> */}

            <h1 className="text-2xl from-neutral-500 mb-6 text-gray-700 m-0 p-0">Organizational Structure</h1>
          </div>
          <div className="cpm-org-counters">
            <div className="counters">
              <div className="flex items-center"> <i className="icon-ic_org_org org"></i> <span className="number"> 1 </span> </div>
              <span className="counters-name"> organizations </span>
            </div>

            <div className="counters">
              <div className="flex items-center"> <i className="icon-ic_org_tenat tenant"></i> <span className="number"> 2 </span> </div>
              <span className="counters-name"> Tenat </span>
            </div>

            <div className="counters">
              <div className="flex items-center"> <i className="icon-ic_org_group group"></i> <span className="number"> 8 </span> </div>
              <span className="counters-name"> Groups  </span>
            </div>

            <div className="counters">
              <div className="flex items-center"> <i className="icon-ic_org_user user"></i> <span className="number"> 23 </span> </div>
              <span className="counters-name"> Users </span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-40 flex items-end justify-between border-0" >
                <div className="flex items-end justify-between w-full text-md">
                  <div>
                    <i className="icon-add text-primary font-bold"></i>  Create
                  </div>
                  <div>
                    <span className="icon-keyboard_arrow_down"></span>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
          
              <DropdownMenuItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
                onClick={() => setIsOpen(true)}
              >
                <i className="icon-ic_org_org org font-bold me-2 "></i>  Organizations
              </DropdownMenuItem>
              <DropdownMenuItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                <i className="icon-ic_org_tenat tenat font-bold me-2"></i>  Tenants
              </DropdownMenuItem>
              <DropdownMenuItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                <i className="icon-ic_org_group group font-bold me-2"></i>  Groups
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mx-2 cpm-dropdownMenu-organizations">
              <Button variant="outline" className="w-56 flex items-end justify-between border-0">
                <div className="flex items-end justify-between w-full text-md">
                  <div>
                    <i className="icon-ic_org_org org font-bold"></i>  Organizations
                  </div>
                  <div>
                    <span className="icon-keyboard_arrow_down"></span>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuCheckboxItem className="flex items-end"
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                <i className="icon-ic_org_org org font-bold me-2 "></i>  Organizations

              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="flex items-end"
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}

              >
                <i className="icon-ic_org_tenat tenat font-bold me-2"></i>  Tenants
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="flex items-end"
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                <i className="icon-ic_org_group group font-bold me-2"></i>  Groups
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem className="flex items-end"
                checked={setShowUsersbar}
                onCheckedChange={setShowUsers}
              >
                <i className="icon-ic_org_user user font-bold me-2"></i>  Users
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>



        </div>



        <OffCanvas
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Create new user">

          <OffCanvasContent />

        </OffCanvas>

      </div>

      <div className="cpm-box-container">
        <Datatableexamplewithcollpase />
      </div>
    </div>

  );
};

export default OrgStructure;
