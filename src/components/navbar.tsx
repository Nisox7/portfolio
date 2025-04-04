import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { useLocation } from "react-router-dom";

export const Navbar = () => {

  const location = useLocation();

  return (
    <HeroUINavbar
      classNames={{
        wrapper: [
          "bg-content2",
          "rounded-xl",
          "h-11",
          "my-8",
          "flex",
          "justify-center",
          "w-auto",
          "px-2",
        ],

        item: [
          "transition-all",
          "flex",
          "relative",
          "text-sm",
          "text-default-500",
          "font-medium",
          "items-center",
          "hover:text-opacity-60",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:bg-background",
          "data-[active=true]:text-default-foreground",
          "data-[active=true]:dark:bg-default rounded-lg",
        ],
      }}
      isBlurred
    >
      <NavbarContent>
        <div className="flex gap-4 justify-center ml-2 mr-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={item.href === location.pathname}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "px-3 py-1.5 rounded-lg"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};
