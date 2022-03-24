import Image from "next/image"

export default function SideBarButton({ name, link, logo }) {
  console.log(logo);
  return (
    <div>
      <div><Image
        priority
        src={logo}
        className="rounded-full"
        height={20}
        width={20}
        alt={name}
      /></div>
      <div>
        <a href={link} className="text-white flex items-center space-x-2 px-4">{name}</a>
      </div>
    </div>
  )
}