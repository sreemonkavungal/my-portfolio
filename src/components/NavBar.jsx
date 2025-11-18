import React from 'react';
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isNavLinkActive = (path) => {
        return location.pathname === path ? 'text-indigo-600' : 'text-gray-900';
    };

    return (
        <header className="bg-white">

            <nav className="mx-auto fixed top-0 z-50 w-full flex items-center justify-between p-6 lg:px-8 bg-white" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <div className="text-sm font-semibold leading-6 text-gray-900">
                            SREEMON - Portfolio
                        </div>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>



                <Popover.Group className="hidden lg:flex lg:gap-x-12 mx-auto">

                    <Link to="/" className={`text-sm font-semibold leading-6 ${isNavLinkActive('/')}`}>
                        Home
                    </Link>
                    <Link to="/about" className={`text-sm font-semibold leading-6 ${isNavLinkActive('/about')}`}>
                        About
                    </Link>
                    <Link to="/skills" className={`text-sm font-semibold leading-6 ${isNavLinkActive('/skills')}`}>
                        Skills
                    </Link>
                    <Link to="/projects" className={`text-sm font-semibold leading-6 ${isNavLinkActive('/projects')}`}>
                        Projects
                    </Link>
                    <Link to="/contact" className={`text-sm font-semibold leading-6 ${isNavLinkActive('/contact')}`}>
                        Contact
                    </Link>
                </Popover.Group>

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </a>
                                <a
                                    href="/skills"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Skills
                                </a>
                                <a
                                    href="projects"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Projects
                                </a>
                                <a
                                    href="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}