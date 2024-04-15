import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

          <Card className="text-green-600 border-green-600/80 hover:shadow-green-600/30" x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Spotify Subscription
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Pro Plan</div>
              <p className="text-xs text-muted-foreground">
                You are currently using Spotify pro.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-600/80 hover:shadow-slate-600/30 text-slate-600" x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Connections
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+250</div>
              <p className="text-xs text-muted-foreground">
                +23 since last week
              </p>
            </CardContent>
          </Card>

          <Card className=" border-red-600/80 hover:shadow-red-600/30 text-red-600" x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Genre</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Romantic</div>
              <p className="text-xs text-muted-foreground">
                Looks like you are in love
              </p>
            </CardContent>
          </Card>

          <Card className=" border-blue-600/80 hover:shadow-blue-600/30" x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Listening Hours</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">80 hrs</div>
              <p className="text-xs text-muted-foreground">
                Looks like you are a music lover
              </p>
            </CardContent>
          </Card>

        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="text-black">Recent Songs</CardTitle>
                <CardDescription className=" text-slate-500">
                  Know your most recent songs listened.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className=" h-[300px] overflow-y-scroll overflow-x-hidden" style={{
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarGutter: "10px",
              msScrollbarArrowColor: "transparent"
            }}>
              <Table>
                <TableBody>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>
                  <TableRow className="w-full flex justify-between items-center">
                    <TableCell>
                      <div className="font-medium">Let me love you</div>
                      <div className="hidden text-sm text-muted-foreground md:inline whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Justin Bieber, The Kid Laori
                      </div>
                    </TableCell>
                    <TableCell className="text-right"><button className=" text-white font-semibold bg-green-600 transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95 cursor-pointer px-5 py-1 rounded-md ml-[500px]">Listen</button></TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
