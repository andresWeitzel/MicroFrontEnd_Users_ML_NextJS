import Image from 'next/image';
import logo from "../../public/assets/icons/user-group-solid.svg";

export const Logo = () => (
  <div>
    <Image
      priority
      src={logo}
      height={32}
      width={32}
      alt="Users Logo"
    />
  </div>
);