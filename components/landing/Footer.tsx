"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
                    <div className="col-span-2 flex flex-col items-start gap-6">
                        <Link href="#" className="block">
                            <div className="relative h-9 w-36">
                                <Image
                                    src="/logo new.png"
                                    alt="PRV8"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                            The infrastructure for modern high-net-worth travel and concierge services.
                            <br /><br />
                            San Francisco • New York
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Overview</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Concierge API</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Enterprise</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Security</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Status</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-zinc-600">
                        © 2024 PRV8 Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="mailto:partners@prv8.com" className="text-sm text-zinc-500 hover:text-white transition-colors">
                            partners@prv8.com
                        </a>
                        <div className="h-4 w-px bg-white/10 hidden md:block" />
                        <div className="flex gap-4">
                            {/* Social placeholders could go here, keeping it clean for now */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
