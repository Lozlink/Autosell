"use client";
import { motion } from "framer-motion";
import {
    MessageCircle,
    Heart,
    Cog,
    Search,
    Handshake,
    KeyRound,
} from "lucide-react";
import clsx from "clsx"; // npm i clsx (or use a simple ternary)

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 + i * 0.08, duration: 0.4 },
    }),
};

export default function SmoothSalesProcess({
                                               variant = "default",
                                           }: {
    variant?: "default" | "compact";
}) {
    const compact = variant === "compact";
    return (
        <section
            className={clsx(
                "relative mx-auto w-full",
                compact ? "px-2 py-4" : "max-w-5xl px-4 py-16"
            )}
        >
            <div className={clsx("text-center mb-10", compact && "mb-4") }>
                <h3 className={clsx("font-semibold text-zinc-100", compact ? "text-base" : "text-2xl md:text-3xl") }>
                    A Smooth, Transparent Sales Process
                </h3>
                <p className={clsx("text-zinc-400", compact ? "mt-1 text-xs" : "mt-2") }>
                    From first chat to keys handed over — simple steps, no surprises.
                </p>
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-4 md:gap-6">
                <motion.div
                    className="col-span-1 flex flex-col gap-3 md:gap-4"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <ProcessPill i={0} icon={<Heart className={clsx(compact ? "w-4 h-4" : "w-6 h-6")} />} label="Friendly support" compact={compact} />
                    <Connector compact={compact} />
                    <ProcessPill i={1} icon={<MessageCircle className={clsx(compact ? "w-4 h-4" : "w-6 h-6")} />} label="Clear communication" compact={compact} />
                </motion.div>

                <div className="col-span-1 md:col-span-1 lg:col-span-3 relative w-full flex items-center justify-center">
                    <div className={clsx("hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2", compact && "hidden") }>
                        <div className="mx-8 border-t border-dashed border-zinc-700" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: compact ? 1 : 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                        aria-label="Keys handed over"
                    >
                        <div className={clsx(
                            "flex items-center gap-2 md:gap-3 bg-zinc-900/70 border border-zinc-800 rounded-2xl shadow-sm",
                            compact ? "px-3 py-2" : "px-6 py-5"
                        )}>
                            <Handshake className={clsx("text-yellow-400", compact ? "w-5 h-5" : "w-8 h-8")} />
                            <KeyRound className={clsx("text-yellow-400", compact ? "w-5 h-5" : "w-8 h-8")} />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="col-span-1 flex flex-col gap-3 md:gap-4"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <ProcessPill i={2} icon={<Cog className={clsx(compact ? "w-4 h-4" : "w-6 h-6")} />} label="Streamlined steps" compact={compact} />
                    <Connector compact={compact} />
                    <ProcessPill i={3} icon={<Search className={clsx(compact ? "w-4 h-4" : "w-6 h-6")} />} label="No hidden gotchas" compact={compact} />
                </motion.div>
            </div>
        </section>
    );
}

function ProcessPill({ i, icon, label, compact }: { i: number; icon: React.ReactNode; label: string; compact?: boolean }) {
    return (
        <motion.div
            custom={i}
            variants={itemVariants}
            className={clsx(
                "flex items-center gap-2 border rounded-full",
                compact
                    ? "px-3 py-1.5 text-emerald-400 bg-emerald-600/10 border-emerald-700/30 "
                    : "px-4 py-2 text-emerald-400 bg-emerald-600/15 border-emerald-700/40"
            )}
            role="listitem"
        >
            <div className={clsx("flex items-center justify-center rounded-full bg-emerald-600 text-white", compact ? "w-7 h-7" : "w-9 h-9") }>
                {icon}
            </div>
            <span className={clsx("text-zinc-200", compact ? "text-xs"  : "text-sm md:text-base") }>{label}</span>
        </motion.div>
    );
}

function Connector({ compact }: { compact?: boolean }) {
    return (
        <div className={clsx("hidden md:block mx-8 self-center bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800", compact ? "h-6 w-px" : "h-8 w-px") } />
    );
}