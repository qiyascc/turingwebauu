const openBtn=document.querySelector(".open-btn-nav")
const closeBtn=document.querySelector(".close-btn-nav")
const responsiveMenu=document.querySelector(".responsive-menu")
const navigationBar=document.querySelector(".navigation-bar")
openBtn.addEventListener("click",()=>{
    responsiveMenu.style.display="block"
    navigationBar.style.display="none"
})


closeBtn.addEventListener("click",()=>{
    responsiveMenu.style.display="none"
    navigationBar.style.display="flex"
})

const dropdown=document.querySelector(".dropdown");
const innerList=document.querySelector(".inner-list")
dropdown.addEventListener("click",()=>{
innerList.style.display="block"
})



































// Yeni bir nav elementi yaradılır


// const navbar = document.createElement("nav");
// navbar.className =
//   "bg-blue-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ";

// Navbar içəriyinin tərtibatı
// navbar.innerHTML = `
//     <div class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src="/frontend/assets/images/turing-logo-color.png" alt="turing-logo" ">
//         </a>
//         <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
//             <button type="button"  style="border-radius: 100px;font-size:16px;background-color:rgba(43, 166, 235, 1);padding: 16px 32px;" class="hidden  lg:block px-3 text-white">Apply now</button>
//             <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//                 <span class="sr-only">Open main menu</span>
//                 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//                 </svg>
//             </button>
//         </div>
//         <div class="hidden w-full lg:block md:w-auto text-white" id="navbar-dropdown">
//             <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                     <a href="#" class="block py-2 px-3 text-white  rounded " aria-current="page">Academy</a>
//                 </li>
//                 <li>
//                     <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 ">Fields of Study <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//                     </svg></button>
//                     <!-- Dropdown menu -->
//                     <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                         <ul class="py-2 text-sm " aria-labelledby="dropdownLargeButton">
//                             <li>
//                                 <a href="#" class="block px-4 py-2 ">Dashboard</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//                             </li>
//                         </ul>
//                         <div class="py-1">
//                             <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//                         </div>
//                     </div>
//                 </li>
//                 <li>
//                     <a href="#" class="block py-2 px-3  rounded ">Events</a>
//                 </li>
//                 <li>
//                     <a href="#" class="block py-2 px-3 ">Scholarship Program</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// `;

// Nav elementini body elementinə əlavə edirik
// document.body.appendChild(navbar);
