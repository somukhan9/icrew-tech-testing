import Link from 'next/link'

const authenticatedLinks = [
  { label: 'Profile', href: '/profile' },
  { label: 'Orders', href: '/orders' },
  { label: 'Settings', href: '/settings' },
  { label: 'Logout', href: '/logout' },
]

const unauthenticatedLinks = [
  { label: 'Login', href: '/login' },
  { label: 'Signup', href: '/signup' },
]

export default function AuthDropDownMenu({
  isLoggedIn,
  setOpenDropDown,
  authMenuRef,
}) {
  const closeAuthDropDown = () => {
    setOpenDropDown(false)
  }

  return (
    <div ref={authMenuRef} className="AuthDropDownMenu__auth-drop-down">
      <button
        className="relative text-slate-100 transition-colors ease-in-out hover:text-slate-300"
        onClick={closeAuthDropDown}
      >
        <span className="text-md absolute right-2 text-xl font-bold">
          &times;
        </span>
      </button>
      <div className="mr-8 flex-col space-y-2 p-4">
        {isLoggedIn ? (
          <>
            {authenticatedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeAuthDropDown}
                className="inline-block transition-colors hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </>
        ) : (
          <>
            {unauthenticatedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeAuthDropDown}
                className="inline-block transition-colors hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
