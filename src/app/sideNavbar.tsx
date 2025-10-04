export default function SideNavbar() {
  return (
    <div className="flex h-screen w-20 flex-col justify-between bg-gray-900 pt-8">
      {/* Top Section */}
      <div>
        <div className="inline-flex size-16 items-center justify-center pl-4">
          <span className="grid size-10 place-content-center rounded-lg bg-blue-500 text-white text-lg font-semibold shadow-[0_0_8px_#3b82f6]">
            N
          </span>
        </div>

        {/* Navigation */}
        <div className="px-2 mt-6">
          <ul className="space-y-6">
            {/* Settings */}
            <li>
              <a
                href="#"
                className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-400 hover:scale-110 hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Settings
                </span>
              </a>
            </li>

            {/* Projects */}
            <li>
              <a
                href="#projects"
                className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-400 hover:scale-110 hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Projects
                </span>
              </a>
            </li>

            {/* Profile */}
            <li>
              <a
                href="#about"
                className="group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-400 hover:scale-110 hover:text-blue-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  About
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Logout Button */}
      <div className="sticky inset-x-0 bottom-0 bg-gray-900 p-2">
        <a
          href="#"
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:scale-105 hover:text-blue-400 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
            Logout
          </span>
        </a>
      </div>
    </div>
  );
}
