import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-primary transition duration-300"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-primary transition duration-300"
        >
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-primary transition duration-300"
        >
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a
          href="#features"
          className="flex items-center hover:text-primary transition duration-300"
        >
          Features
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-20 mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 text-black dark:text-white bg-white/5 backdrop-filter backdrop-grayscale backdrop-blur-md border-none">
      <div className="container max-w-screen-xl mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex gap-10 items-center">
          <a href="/">
            <svg
              width="117"
              height="35"
              viewBox="0 0 117 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:fill-white fill-black"
            >
              <path d="M108.83 14V11.4683H108.046V10.908H110.245V11.4683H109.473V14H108.83ZM110.564 14V10.908H111.186L112.344 12.4436H112.054L113.179 10.908H113.801V14H113.158V11.6177L113.415 11.6758L112.224 13.2114H112.141L110.991 11.6758L111.207 11.6177V14H110.564Z" />
              <path d="M46.5863 28.1301C47.6222 28.1301 48.5386 27.9408 49.3355 27.5623C50.1324 27.1639 50.74 26.5662 51.1583 25.7693V27.7715H55.3419V11.4555H50.8595V20.9881C50.8595 21.9244 50.5806 22.6815 50.0228 23.2592C49.465 23.817 48.7478 24.0959 47.8713 24.0959C46.9947 24.0959 46.2775 23.817 45.7197 23.2592C45.1619 22.6815 44.883 21.9244 44.883 20.9881V11.4555H40.4006V21.3467C40.4006 23.3787 40.9285 25.0223 41.9844 26.2773C43.0601 27.5125 44.5941 28.1301 46.5863 28.1301Z" />
              <path d="M58.6181 9.99127H63.1005V5.50886H58.6181V9.99127ZM58.6181 27.7715H63.1005V11.4555H58.6181V27.7715Z" />
              <path d="M68.3528 27.7715H72.8352V15.3403H76.3315V11.4555H72.8352V11.2165C72.8352 9.76217 73.6819 9.03502 75.3752 9.03502C75.6542 9.03502 75.9829 9.0649 76.3614 9.12467V5.29968C75.9032 5.20007 75.3752 5.15027 74.7776 5.15027C72.7456 5.15027 71.1618 5.6782 70.0262 6.73405C68.9106 7.78991 68.3528 9.28404 68.3528 11.2165V11.4555H65.6036V15.3403H68.3528V27.7715Z" />
              <path d="M78.6371 27.7715H83.1195V18.986C83.1195 17.7707 83.4582 16.8344 84.1355 16.177C84.8129 15.4996 85.6994 15.161 86.7951 15.161H88.1996V11.2762H87.2433C86.2473 11.2762 85.3607 11.4655 84.5838 11.844C83.8268 12.2026 83.2391 12.8899 82.8207 13.9059V11.4555H78.6371V27.7715Z" />
              <path d="M92.7042 34.4054C95.6924 34.4054 97.854 32.7021 99.1887 29.2955L106.181 11.4555H101.37L97.5153 21.9443L93.6604 11.4555H88.8493L95.2741 27.7715L94.9753 28.4588C94.7362 28.9967 94.4274 29.4748 94.0489 29.8932C93.6704 30.3115 93.0428 30.5207 92.1663 30.5207C91.4491 30.5207 90.7718 30.4211 90.1343 30.2219V33.8974C90.4729 34.0767 90.8614 34.2062 91.2997 34.2859C91.7579 34.3656 92.2261 34.4054 92.7042 34.4054Z" />
              <path
                d="M26.3829 10.8852C26.1564 10.6651 25.8387 10.5651 25.5277 10.6163C25.2162 10.6672 24.9472 10.8628 24.8027 11.1434C24.3057 12.1089 23.6745 12.9961 22.9318 13.7805C23.0058 13.2139 23.0431 12.6439 23.0431 12.0724C23.0431 10.9759 22.8961 9.84742 22.6061 8.71805C21.6527 5.00853 19.1525 1.87144 15.7468 0.111205C15.4503 -0.0419942 15.097 -0.0366153 14.8053 0.125549C14.5136 0.287779 14.3226 0.585213 14.2964 0.917908C14.0309 4.28895 12.2945 7.35586 9.52981 9.33424C9.49322 9.3606 9.4569 9.38729 9.42057 9.41386C9.34534 9.46891 9.27441 9.52097 9.20814 9.56467C9.19778 9.57157 9.18749 9.57861 9.17739 9.58585C7.43861 10.8308 6.00391 12.4903 5.0282 14.3854C4.03675 16.3131 3.53406 18.3818 3.53406 20.5336C3.53406 21.6299 3.68101 22.7583 3.97088 23.8879C5.50055 29.8417 10.8585 33.9999 17.0004 33.9999C24.4253 33.9999 30.4659 27.9589 30.4659 20.5336C30.4659 16.872 29.0159 13.4454 26.3829 10.8852Z"
                fill="#FF5555"
              />
              <circle cx="16" cy="20" r="4" fill="white" />
            </svg>
          </a>
          <div className="hidden lg:block">{navList}</div>
        </div>
        <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block px-8 py-2 font-normal rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black hover:outline dark:hover:bg-transparent dark:hover:text-white dark:hover:outline transition duration-300 ease-in-out"
          >
            <span>Download</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1 w-full justify-center">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="bg-black text-white dark:bg-white dark:text-black font-normal px-8 py-2 rounded-md hover:bg-transparent hover:dark:bg-transparent hover:text-black dark:hover:text-white hover:outline transition duration-300 ease-in-out w-fit"
            >
              <span>Download</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarDefault;