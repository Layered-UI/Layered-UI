"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

// ─── Types ────────────────────────────────────────────────────────────────────

type InputStatus = "idle" | "loading" | "submitted";

// ─── Model data ───────────────────────────────────────────────────────────────

const primaryModels = [
    {
        value: "opus-4.6",
        title: "Opus 4.6",
        description: "Most capable for ambitious work",
    },
    {
        value: "sonnet-4.6",
        title: "Sonnet 4.6",
        description: "Most efficient for everyday tasks",
    },
    {
        value: "haiku-4.5",
        title: "Haiku 4.5",
        description: "Fastest for quick answers",
    },
];

const moreModels = [
    { value: "opus-4.5", title: "Opus 4.5" },
    { value: "opus-3", title: "Opus 3" },
    { value: "sonnet-4.5", title: "Sonnet 4.5" },
];

const allModels = [...primaryModels, ...moreModels];

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconPlus({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="10" cy="10" r="8" />
            <line x1="10" y1="6" x2="10" y2="14" />
            <line x1="6" y1="10" x2="14" y2="10" />
        </svg>
    );
}

function IconCaret({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="3,5 7,9 11,5" />
        </svg>
    );
}

function IconChevronRight({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="5,3 9,7 5,11" />
        </svg>
    );
}

function IconCheck({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="2,8 6,12 14,4" />
        </svg>
    );
}

function IconArrowUp({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="8" y1="13" x2="8" y2="3" />
            <polyline points="4,7 8,3 12,7" />
        </svg>
    );
}

function IconStop({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
        >
            <rect x="2" y="2" width="10" height="10" rx="2.5" />
        </svg>
    );
}

function IconAudioLines({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
        >
            <line x1="2" y1="14" x2="2" y2="16" />
            <line x1="5.5" y1="11" x2="5.5" y2="16" />
            <line x1="9" y1="8" x2="9" y2="16" />
            <line x1="12.5" y1="11" x2="12.5" y2="16" />
            <line x1="16" y1="6" x2="16" y2="16" />
            <line x1="19.5" y1="10" x2="19.5" y2="16" />
        </svg>
    );
}

// ─── Sub-menu (More models) ───────────────────────────────────────────────────

interface SubMenuProps {
    open: boolean;
    selectedModel: string;
    onSelect: (value: string) => void;
}

function SubMenu({ open, selectedModel, onSelect }: SubMenuProps) {
    return (
        <div
            className={cn(
                "absolute bottom-0 left-full ml-1 z-50",
                "w-48 rounded-xl border border-border bg-popover p-1.5 shadow-md",
                open ? "block" : "hidden",
            )}
        >
            {moreModels.map((m) => (
                <button
                    key={m.value}
                    type="button"
                    onClick={() => onSelect(m.value)}
                    className={cn(
                        "flex w-full items-center justify-between",
                        "min-h-8 px-2 rounded-md",
                        "text-sm font-normal text-foreground",
                        "hover:bg-accent focus:bg-accent hover:text-accent-foreground focus:text-accent-foreground",
                        "transition-colors outline-none",
                    )}
                >
                    <span>{m.title}</span>
                    {selectedModel === m.value && (
                        <IconCheck className="size-4 text-primary" />
                    )}
                </button>
            ))}
        </div>
    );
}

// ─── Model dropdown ───────────────────────────────────────────────────────────

interface ModelDropdownProps {
    open: boolean;
    selectedModel: string;
    extendedThinking: boolean;
    onSelectModel: (value: string) => void;
    onToggleThinking: () => void;
}

function ModelDropdown({
    open,
    selectedModel,
    extendedThinking,
    onSelectModel,
    onToggleThinking,
}: ModelDropdownProps) {
    const [subOpen, setSubOpen] = React.useState(false);

    return (
        <div
            className={cn(
                "absolute bottom-full mb-1.5 right-0 z-40",
                "w-64 rounded-xl border border-border bg-popover p-1.5 shadow-md",
                open ? "block" : "hidden",
            )}
        >
            {/* Primary models */}
            <div>
                {primaryModels.map((m) => (
                    <button
                        key={m.value}
                        type="button"
                        onClick={() => onSelectModel(m.value)}
                        className={cn(
                            "flex w-full flex-col gap-0.5 rounded-md px-2 py-1.5",
                            "text-left outline-none transition-colors",
                            "hover:bg-accent focus:bg-accent hover:text-accent-foreground focus:text-accent-foreground",
                        )}
                    >
                        <div className="flex items-center justify-between gap-10">
                            <span className="text-sm font-normal text-foreground">
                                {m.title}
                            </span>
                            {selectedModel === m.value && (
                                <IconCheck className="size-4.5 text-primary" />
                            )}
                        </div>
                        <span className="text-xs font-[350] text-muted-foreground">
                            {m.description}
                        </span>
                    </button>
                ))}
            </div>

            {/* Separator */}
            <div className="my-1.5 h-px bg-border" />

            {/* Extended thinking toggle */}
            <div
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest("button")) return;
                    onToggleThinking();
                }}
                className={cn(
                    "flex w-full items-center justify-between gap-2 cursor-pointer",
                    "rounded-md px-2 py-1.5 outline-none transition-colors",
                    "hover:bg-accent focus:bg-accent hover:text-accent-foreground focus:text-accent-foreground",
                )}
            >
                <div className="flex flex-col gap-0.25 text-left">
                    <p className="text-sm font-normal text-foreground">
                        Extended thinking
                    </p>
                    <p className="text-xs font-[350] text-muted-foreground">
                        Think longer for complex tasks
                    </p>
                </div>
                <Switch
                    checked={extendedThinking}
                    onCheckedChange={onToggleThinking}
                />
            </div>

            {/* Separator */}
            <div className="my-1.5 h-px bg-border" />

            {/* More models sub-menu */}
            <div
                className="relative"
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
            >
                <button
                    type="button"
                    className={cn(
                        "flex w-full items-center justify-between",
                        "rounded-md px-2 py-1.5 outline-none transition-colors",
                        "hover:bg-accent focus:bg-accent text-sm",
                        "text-foreground",
                        subOpen && "bg-accent text-accent-foreground",
                    )}
                >
                    More models
                    <IconChevronRight className="size-3.5 text-muted-foreground" />
                </button>
                <SubMenu
                    open={subOpen}
                    selectedModel={selectedModel}
                    onSelect={(v) => {
                        onSelectModel(v);
                        setSubOpen(false);
                    }}
                />
            </div>
        </div>
    );
}

// ─── ClaudeInput ──────────────────────────────────────────────────────────────

const ClaudeInput = () => {
    const [input, setInput] = React.useState("");
    const [status, setStatus] = React.useState<InputStatus>("idle");
    const [model, setModel] = React.useState("opus-4.6");
    const [extendedThinking, setExtendedThinking] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const dropdownWrapRef = React.useRef<HTMLDivElement>(null);

    const isLoading = status === "loading";
    const hasInput = input.trim().length > 0;

    // ── Auto-resize textarea ─────────────────────────────────────────────────
    const handleTextareaChange = React.useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setInput(e.target.value);
            const el = e.target;
            el.style.height = "auto";
            el.style.height = `${Math.min(el.scrollHeight, 180)}px`;
        },
        [],
    );

    // ── Submit ───────────────────────────────────────────────────────────────
    const doSubmit = React.useCallback((value: string) => {
        if (!value.trim()) return;
        setInput("");
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
        setStatus("loading");

        setTimeout(() => {
            setStatus("submitted");
            setTimeout(() => setStatus("idle"), 800);
        }, 2500);
    }, []);

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                doSubmit(input);
            }
        },
        [input, doSubmit],
    );

    const handleSendClick = React.useCallback(() => {
        if (isLoading) {
            setStatus("idle");
            return;
        }
        doSubmit(input);
    }, [isLoading, input, doSubmit]);

    // ── Close dropdown on outside click ─────────────────────────────────────
    React.useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                dropdownWrapRef.current &&
                !dropdownWrapRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleSelectModel = React.useCallback((value: string) => {
        setModel(value);
        setDropdownOpen(false);
    }, []);

    const currentModelTitle =
        allModels.find((m) => m.value === model)?.title ?? "Opus 4.6";

    return (
        <div className="w-full rounded-[20px] border border-border bg-background pt-8 px-8 pb-5 shadow-lg flex flex-col gap-3">

            {/* Textarea */}
            <textarea
                ref={textareaRef}
                value={input}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                placeholder="How can I help you today?"
                disabled={isLoading}
                rows={1}
                className={cn(
                    "w-full resize-none border-none bg-transparent outline-none",
                    "min-h-12 px-0 py-0",
                    "text-[15px] font-normal leading-relaxed text-foreground",
                    "placeholder:text-[15px] placeholder:font-normal placeholder:text-muted-foreground",
                    "disabled:opacity-70",
                    "max-h-[180px] overflow-y-auto",
                )}
            />

            {/* Actions row */}
            <div className="flex items-center justify-between px-0 py-0">

                {/* Left action group */}
                <div className="flex items-center gap-1">
                    <Button
                        type="button"
                        size="icon"
                        className={cn(
                            "size-8 cursor-pointer rounded-md border-none bg-transparent",
                            "text-muted-foreground hover:bg-secondary hover:text-foreground",
                            "active:scale-97 transition-all",
                        )}
                    >
                        <IconPlus className="size-5" />
                    </Button>
                </div>

                {/* Right action group */}
                <div className="flex items-center gap-1">

                    {/* Model selector */}
                    <div ref={dropdownWrapRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            className={cn(
                                "h-8 flex items-center gap-1 cursor-pointer",
                                "rounded-sm border-none bg-transparent",
                                "pr-1.5 pl-2.5",
                                "text-[13px] leading-6 font-normal text-foreground",
                                "hover:bg-accent hover:text-accent-foreground",
                                "active:scale-97 transition-all",
                                dropdownOpen && "bg-accent text-accent-foreground",
                            )}
                        >
                            <span>{currentModelTitle}</span>
                            <IconCaret className="size-4" />
                        </button>

                        <ModelDropdown
                            open={dropdownOpen}
                            selectedModel={model}
                            extendedThinking={extendedThinking}
                            onSelectModel={handleSelectModel}
                            onToggleThinking={() => setExtendedThinking((prev) => !prev)}
                        />
                    </div>

                    {/* Send / Stop button */}
                    <Button
                        type="button"
                        size="icon"
                        disabled={!hasInput && !isLoading}
                        onClick={handleSendClick}
                        className={cn(
                            "size-8 cursor-pointer rounded-md transition-all active:scale-97",
                            "disabled:opacity-70",
                            // idle, no input
                            !hasInput && !isLoading && [
                                "border-none bg-transparent text-muted-foreground",
                                "hover:bg-secondary",
                            ],
                            // idle, has input
                            hasInput && !isLoading && [
                                "bg-primary text-primary-foreground hover:opacity-90",
                            ],
                            // loading
                            isLoading && [
                                "border border-border bg-transparent text-foreground",
                                "hover:bg-transparent",
                                "disabled:opacity-100",
                            ],
                        )}
                    >
                        {isLoading ? (
                            <IconStop />
                        ) : hasInput ? (
                            <IconArrowUp />
                        ) : (
                            <IconAudioLines className="size-5" />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <div className="min-h-screen pt-50 px-4 md:px-8 pb-12 flex justify-center w-full">
            <div className="w-full max-w-3xl">
                <ClaudeInput />
            </div>
        </div>
    );
}