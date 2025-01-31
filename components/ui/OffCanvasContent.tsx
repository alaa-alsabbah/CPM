import React from "react";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import MultiSelect from "@/components/ui/multiSelect";

const OffCanvasContent = () => {

    return (
        <div>

            <div className="grid grid-rows-1 grid-flow-col gap-4 items-end mb-5">
                <div>
                    <Label className="mb-2 block">Email <span className="text-red-500"> * </span></Label>
                    <Input type="email" placeholder="Enter the user name " />
                </div>

                <button type="button" className="bg-white px-5 pt-1 pb-1  w-30 border-none  text-gray-700 flex items-centers ring-inset hover:bg-white">
                    <span className="icon-upload mx-2"></span>
                    <label> Import </label>
                </button>
            </div>

            <div className="grid grid-rows-1 grid-flow-col gap-4  mb-5">
                <div>
                    <Label className="mb-2 block">Last name  <span className="text-red-500"> * </span></Label>
                    <Input type="text" placeholder="Enter the Last name " />
                </div>

                <div>
                    <Label className="mb-2 block">First name   <span className="text-red-500"> * </span></Label>
                    <Input type="text" placeholder="Enter the First name  " />
                </div>

                <div>
                    <Label className="mb-2 block">Email Address    <span className="text-red-500"> * </span></Label>
                    <Input type="text" placeholder="Enter the Email Address   " />
                </div>

            </div>

            <div className="grid grid-rows-1 grid-flow-col gap-4  mb-5">
                <div>
                    <Label className="mb-2 block">Description   <span className="text-red-500"> * </span></Label>
                    <Input type="text" placeholder="Enter the Description  " />
                </div>

                <div>
                    <Label className="mb-2 block">Tags <span className="text-red-500"> * </span></Label>
                    <Input type="text" placeholder="Enter Tags  " />
                </div>


            </div>

            <div className="bg-gray-100 p-5">
                <div className="grid grid-rows-1 grid-flow-col gap-4  mb-5">
                    <div className="flex flex-col">
                        <Label className="mb-2 block">  <i className="icon-ic_org_org org font-bold"></i> Organization  <span className="text-red-500"> * </span></Label>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a Organization" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Organization-Government-OT100</SelectItem>
                                    <SelectItem value="banana">Organization-Government-OT200</SelectItem>
                                    <SelectItem value="blueberry">Organization-Government-O500</SelectItem>
                                    <SelectItem value="grapes">Organization-Government-O4100</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col">
                        <Label className="mb-2 block">  <i className="icon-ic_org_tenat tenant font-bold"></i> Tenant    <span className="text-red-500"> * </span></Label>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a Tenant  " />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Organization-Government-OT100</SelectItem>
                                    <SelectItem value="banana">Organization-Government-OT200</SelectItem>
                                    <SelectItem value="blueberry">Organization-Government-O500</SelectItem>
                                    <SelectItem value="grapes">Organization-Government-O4100</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                
                <div className="flex flex-row">
                    <MultiSelect />
                </div>
            </div>

        </div>
    );
};
export default OffCanvasContent;
