import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <div className="w-full flex justify-between items-center px-4 cpm-header">
      <Image
        src="/img/logo.svg"
        width={120}
        height={0}
        alt="SDAIA CPM"
        layout="intrinsic"
        className='cpm-logo'
      />
      <nav className='ml-auto cpm-right-nav'>
        <ul className="flex space-x-4 items-center">
          <li>

            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <button className='btn btn-link min-w-none'>  <i className='icon-ic_settings_24px text-white'></i> </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User />
                    <span>Profile</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Users />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Plus />
                    <span>New Team</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LifeBuoy />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </li>
          <li>
            
          <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <button className='btn btn-link min-w-none'> <i className='icon-ic_bell text-white'></i>     </button>
         
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-90">
                <ul className='cpm-notification'>
                  <li>
                      <div className="w-full max-w-xs p-4 text-gray-500 bg-white  dark:bg-gray-800 dark:text-gray-400" role="alert">
                          <div className="flex">
                              <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                                  </svg>
                                  <span className="sr-only">Refresh icon</span>
                              </div>
                              <div className="ms-3 text-sm font-normal">
                                  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
                                  <div className="mb-2 text-sm font-normal">A new software version is available for download.</div> 
                                  <div className="grid grid-cols-2 gap-2">
                                      <div>
                                          <button className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center btn btn-secondary">Update</button>
                                      </div>
                                      <div>
                                      <button className="btn btn-link">Not now</button>
                                      </div>
                                  </div>    
                              </div>
                          </div>
                      </div>
                  </li>

                  <li>
                      <div className="w-full max-w-xs p-4 text-gray-500 bg-white  dark:bg-gray-800 dark:text-gray-400" role="alert">
                          <div className="flex">
                              <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                                  </svg>
                                  <span className="sr-only">Refresh icon</span>
                              </div>
                              <div className="ms-3 text-sm font-normal">
                                  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
                                  <div className="mb-2 text-sm font-normal">A new software version is available for download.</div> 
                                  <div className="grid grid-cols-2 gap-2">
                                      <div>
                                          <button className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center btn btn-secondary">Update</button>
                                      </div>
                                      <div>
                                      <button className="btn btn-link">Not now</button>
                                      </div>
                                  </div>    
                              </div>
                          </div>
                      </div>
                  </li>

                  <li>
                      <div className="w-full max-w-xs p-4 text-gray-500 bg-white  dark:bg-gray-800 dark:text-gray-400" role="alert">
                          <div className="flex">
                              <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                                  </svg>
                                  <span className="sr-only">Refresh icon</span>
                              </div>
                              <div className="ms-3 text-sm font-normal">
                                  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
                                  <div className="mb-2 text-sm font-normal">A new software version is available for download.</div> 
                                  <div className="grid grid-cols-2 gap-2">
                                      <div>
                                          <button className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center btn btn-secondary">Update</button>
                                      </div>
                                      <div>
                                      <button className="btn btn-link">Not now</button>
                                      </div>
                                  </div>    
                              </div>
                          </div>
                      </div>
                  </li>
        
                </ul>
            
              </DropdownMenuContent>
            </DropdownMenu>
            
            
            </li>
          <li>
            <Avatar className='cpm-avatar'>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </nav>
    </div>

  );
}
