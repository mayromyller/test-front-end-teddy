import { ComponentProps } from "react";
import { Link, useLocation } from "react-router-dom";

type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      {...props}
      data-active={pathname === props.to}
      className="data-[active=true]:text-[#EC6724] text-black text-base data-[active=true]:underline underline-offset-4"
    />
  )
}
