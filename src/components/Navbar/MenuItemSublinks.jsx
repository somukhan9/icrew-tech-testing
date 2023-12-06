import Link from 'next/link'

export default function MenuItemSublinks({ subItem }) {
  return (
    <li className="capitalize text-slate-300 hover:text-slate-100">
      <Link href={subItem.href}>{subItem.label}</Link>
    </li>
  )
}
