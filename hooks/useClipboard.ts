import { useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google'

type EventName = 'block_copy' | 'block_cli_copy' | 'snippet_copy';

interface BlockProps {
    title?: string;
    category?: string;
    code: string;
    eventName: EventName;
}

export const useCopyToClipboard = (block:BlockProps) => {

    const { title, category, code, eventName } = block;

    const [copied, setCopied] = useState(false);

    const copy = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e && e.preventDefault) e.preventDefault();
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(code);
                setCopied(true);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        } else {
            // Fallback for non-secure contexts (HTTP)
            const textArea = document.createElement("textarea");
            textArea.value = code;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
            } catch (err) {
                console.error('Fallback copy failed: ', err);
            }
            document.body.removeChild(textArea);
        }

        sendGAEvent('event', eventName, {
            block_title: title,
            block_category: category,
        })

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};