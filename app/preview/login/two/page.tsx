'use client'

import { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="flex min-h-screen bg-white dark:bg-black px-4 py-16 md:py-32">
            <div className="bg-gray-100 dark:bg-gray-900 m-auto h-fit w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md shadow-black/5">
                <div className="bg-white dark:bg-black -m-px rounded-2xl border border-gray-200 dark:border-gray-800 p-8 pb-6">
                    <div className="text-center">
                        <h1 className="mb-1 mt-4 text-xl font-semibold text-black dark:text-white">Sign In</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Welcome back! Sign in to continue</p>
                    </div>

                    <div className="mt-6 space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
                                Username
                            </label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 transition-all text-sm text-black dark:text-white"
                            />
                        </div>

                        <div className="space-y-0.5">
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="pwd" className="text-sm font-medium text-black dark:text-white">
                                    Password
                                </label>
                                <button type="button" className="text-xs text-black dark:text-white hover:opacity-70 font-medium transition-opacity">
                                    Forgot your Password?
                                </button>
                            </div>
                            <input
                                type="password"
                                required
                                name="pwd"
                                id="pwd"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 focus:border-black dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 transition-all text-sm text-black dark:text-white"
                            />
                        </div>

                        <button type="submit" className="w-full py-2.5 px-4 rounded-lg bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black font-medium transition-all text-sm">
                            Sign In
                        </button>
                    </div>

                    <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                        <hr className="border-dashed border-gray-300 dark:border-gray-700" />
                        <span className="text-gray-500 dark:text-gray-500 text-xs">Or continue With</span>
                        <hr className="border-dashed border-gray-300 dark:border-gray-700" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all font-medium text-sm text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262" className="w-4 h-4">
                                <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
                                <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                            </svg>
                            <span>Google</span>
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all font-medium text-sm text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" className="w-4 h-4">
                                <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path>
                                <path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path>
                                <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z"></path>
                                <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path>
                            </svg>
                            <span>Microsoft</span>
                        </button>
                    </div>
                </div>

                <div className="p-3 bg-gray-100 dark:bg-gray-900">
                    <p className="text-black dark:text-white text-center text-sm">
                        Don't have an account?
                        <button type="button" className="ml-1 text-black dark:text-white hover:opacity-70 font-medium transition-opacity">
                            Create account
                        </button>
                    </p>
                </div>
            </div>
        </section>
    )
}