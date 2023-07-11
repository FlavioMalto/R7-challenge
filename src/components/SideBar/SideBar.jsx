import React from "react";

const SideBar = () => {
  return (
    <>
      <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center py-4">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg
              class="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <ol
            class="ml-3 flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li
              class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>
      <div
        id="application-sidebar"
        class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="px-6 flex items-center justify-center">
          <a
            class="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            <svg
              className="p-1"
              width="100"
              height="100"
              viewBox="0 0 343 386"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M157.681 3.38016C153.948 5.38016 118.614 25.6468 79.1478 48.4468C17.2811 84.1802 7.01443 90.4468 3.94777 94.9802L0.4811 100.314L0.0811 190.047C-0.185567 248.047 0.214433 281.647 1.14777 284.98C1.81443 287.647 4.21443 291.647 6.34777 293.78C8.34777 295.914 44.2144 317.514 85.9478 341.647L161.814 385.647H171.148H180.481L256.348 341.78C298.081 317.514 333.948 296.047 335.948 294.047C338.081 292.047 340.348 288.047 341.148 285.38C342.881 278.847 343.014 107.647 341.148 100.98C340.481 98.4468 338.081 94.5802 335.948 92.3135C333.814 90.1802 297.948 68.7135 256.348 44.5802C183.014 2.18016 180.214 0.713497 172.481 0.180164C165.681 -0.35317 163.548 0.180164 157.681 3.38016ZM214.481 115.914C214.481 118.047 213.814 122.714 213.014 125.914L211.414 132.047L203.681 124.314C199.281 120.047 195.814 116.18 195.814 115.647C195.814 114.447 204.748 112.047 210.214 111.914C214.081 111.78 214.481 112.18 214.481 115.914ZM201.681 126.314C207.814 132.447 210.214 135.78 209.148 136.447C207.548 137.38 189.148 120.447 189.148 118.18C189.148 115.247 193.414 118.047 201.681 126.314ZM203.148 146.447C195.414 157.647 170.348 177.114 163.681 177.114C162.614 177.114 158.748 174.18 155.148 170.447L148.748 163.914L151.281 158.18C156.348 146.98 169.014 131.78 180.214 123.647L185.681 119.647L196.348 130.314L207.014 140.98L203.148 146.447ZM158.481 140.58C158.481 140.98 157.414 142.98 155.948 144.847C154.614 146.847 152.214 150.98 150.614 154.18C148.081 158.98 147.414 159.647 145.148 158.447C141.681 156.58 137.148 156.847 132.614 159.114C130.481 160.314 128.481 160.847 128.081 160.58C127.814 160.18 129.548 157.247 131.948 153.78C137.814 145.647 146.748 139.78 153.414 139.78C156.214 139.78 158.481 140.18 158.481 140.58ZM183.948 182.047C181.281 187.38 176.748 192.047 169.548 196.98C164.748 200.18 164.214 199.647 167.148 194.447C169.414 190.58 169.681 184.58 167.814 181.114C166.748 179.247 167.281 178.447 170.214 177.247C172.214 176.447 176.614 173.914 179.814 171.78L185.814 167.78L186.214 172.314C186.481 174.98 185.548 179.114 183.948 182.047ZM151.148 175.78C154.081 178.714 155.548 181.114 154.481 181.114C152.481 181.114 143.814 173.38 143.814 171.514C143.814 169.247 146.081 170.58 151.148 175.78ZM135.948 185.514C132.881 188.314 130.081 190.447 129.681 190.047C128.481 188.847 138.748 178.447 140.214 179.38C140.881 179.78 139.014 182.58 135.948 185.514ZM138.481 188.447C135.281 191.78 131.948 194.447 131.281 194.447C130.481 194.447 132.614 191.78 135.814 188.447C139.014 185.114 142.348 182.447 143.014 182.447C143.814 182.447 141.681 185.114 138.481 188.447ZM146.481 186.18C146.481 188.047 137.681 195.914 136.748 194.847C136.214 194.314 137.681 191.914 140.081 189.514C144.214 185.247 146.481 184.047 146.481 186.18ZM130.481 196.314C130.481 196.714 129.948 197.38 129.148 197.78C128.481 198.18 127.814 197.914 127.814 197.247C127.814 196.447 128.481 195.78 129.148 195.78C129.948 195.78 130.481 196.047 130.481 196.314ZM135.814 197.114C135.814 197.78 135.548 198.447 135.281 198.447C134.881 198.447 134.214 197.78 133.814 197.114C133.414 196.314 133.681 195.78 134.348 195.78C135.148 195.78 135.814 196.314 135.814 197.114ZM105.414 224.714C108.881 228.047 109.148 228.98 109.148 238.447C109.148 247.647 108.748 248.98 105.814 251.78C103.948 253.514 102.481 255.514 102.481 256.314C102.481 257.114 103.948 260.047 105.814 262.714C107.681 265.38 109.148 269.514 109.148 271.647C109.148 275.647 109.014 275.78 103.148 275.78C97.1478 275.78 97.0144 275.78 91.0144 266.447C85.5478 257.914 84.6144 257.114 80.4811 257.114H75.9478L75.5478 266.047L75.1478 275.114L68.2144 275.514L61.1478 275.914V248.58V221.114H81.4144C101.548 221.114 101.681 221.114 105.414 224.714ZM167.681 227.38C167.681 232.98 166.081 236.447 155.281 254.447L143.014 275.114H135.814C129.814 275.114 128.481 274.714 128.081 272.714C127.814 271.38 132.348 262.447 138.081 252.847C143.814 243.247 148.748 234.847 148.881 234.18C149.148 233.647 142.748 233.114 134.614 233.114H119.814V227.114V221.114H143.814H167.814L167.681 227.38ZM222.081 225.38C225.281 228.447 226.481 230.847 226.481 234.047C226.481 238.314 226.214 238.447 221.414 238.447C217.948 238.447 215.414 237.514 213.814 235.78C211.814 233.514 209.681 233.114 201.548 233.114H191.814V237.78V242.447H205.548C218.881 242.447 219.414 242.58 222.881 246.18C226.081 249.514 226.481 250.98 226.481 258.447C226.481 266.18 226.081 267.38 222.214 271.38L217.948 275.78H202.481H187.014L181.948 270.58C175.014 263.514 175.548 259.247 183.281 258.714C186.881 258.447 189.281 258.98 190.481 260.447C191.681 261.914 194.748 262.447 201.948 262.447H211.814V258.447V254.447H198.614H185.414L181.281 249.78C177.681 245.647 177.148 243.914 177.148 237.78C177.148 231.647 177.681 229.914 181.281 225.78L185.414 221.114H201.548H217.681L222.081 225.38ZM281.148 227.114V233.114H273.148H265.148V254.447V275.78H257.814H250.481V254.447V233.114H242.481H234.481V227.114V221.114H257.814H281.148V227.114Z"
                fill="#4F46E5"
              />
              <path
                d="M179.014 139.114C177.014 142.18 177.014 142.714 179.014 145.78C183.014 151.78 190.481 149.514 190.481 142.18C190.481 135.647 182.614 133.514 179.014 139.114ZM187.814 140.447C189.814 142.847 187.548 146.447 183.814 146.447C180.748 146.447 179.281 142.714 181.281 140.314C183.281 137.914 185.681 137.914 187.814 140.447Z"
                fill="#4F46E5"
              />
              <path
                d="M75.8145 239.113V245.247L85.5478 244.847L95.1478 244.447V239.113V233.78L85.5478 233.38L75.8145 232.98V239.113Z"
                fill="#4F46E5"
              />
            </svg>
          </a>
        </div>

        <nav
          class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul class="space-y-1.5">
            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                href="javascript:;"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Dashboard
              </a>
            </li>

            <li class="hs-accordion" id="users-accordion">
              <a
                class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                href="javascript:;"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                </svg>
                Users
                <svg
                  class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="users-accordion-child"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  class="hs-accordion-group pl-3 pt-2"
                  data-hs-accordion-always-open
                >
                  <li class="hs-accordion" id="users-accordion-sub-1">
                    <a
                      class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                      href="javascript:;"
                    >
                      Sub Menu 1
                      <svg
                        class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </a>

                    <div
                      id="users-accordion-sub-1-child"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul class="pt-2 pl-2">
                        <li>
                          <a
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                            href="javascript:;"
                          >
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                            href="javascript:;"
                          >
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                            href="javascript:;"
                          >
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="hs-accordion" id="users-accordion-sub-2">
                    <a
                      class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                      href="javascript:;"
                    >
                      Sub Menu 2
                      <svg
                        class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </a>

                    <div
                      id="users-accordion-sub-2-child"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"
                    >
                      <ul class="pt-2 pl-2">
                        <li>
                          <a
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                            href="javascript:;"
                          >
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                            href="javascript:;"
                          >
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                            href="javascript:;"
                          >
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li class="hs-accordion" id="account-accordion">
              <a
                class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                href="javascript:;"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                Account
                <svg
                  class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="account-accordion-child"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul class="pt-2 pl-2">
                  <li>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                      href="javascript:;"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                      href="javascript:;"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                      href="javascript:;"
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="hs-accordion" id="projects-accordion">
              <a
                class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                href="javascript:;"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
                  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
                </svg>
                Projects
                <svg
                  class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>

              <div
                id="projects-accordion-child"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul class="pt-2 pl-2">
                  <li>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                      href="javascript:;"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                      href="javascript:;"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                      href="javascript:;"
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="javascript:;"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                Calendar
              </a>
            </li>
            <li>
              <a
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="javascript:;"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
