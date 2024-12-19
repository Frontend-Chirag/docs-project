
import React from 'react'
import {
    AlignLeftIcon,
} from "lucide-react";

import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/useEditorStore';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { CustomToolTip } from '../CustomToolTip';
import { alignments } from '@/contants/alignments';



export const AlignButton =
    () => {

        const { editor } = useEditorStore();


        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className='h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80'
                    >
                        <CustomToolTip label='aligns'>
                            <AlignLeftIcon className='size-4' />
                        </CustomToolTip>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
                    {alignments.map(({ label, value, icon: Icon }) => (
                        <button
                            key={value}
                            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
                            className={cn(
                                'flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80',
                                editor?.isActive({ textAlign: value }) && "bg-neutral-200/80")
                            }
                        >
                            <Icon className='size-4' />
                            <span className='text-sm'>{label}</span>
                        </button>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }