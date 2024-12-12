import React from 'react'
import { type ColorResult, SketchPicker } from 'react-color';

import { useEditorStore } from '@/store/useEditorStore';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from './ui/dropdown-menu';



export const HighLightColorButton = () => {

    const { editor } = useEditorStore();

    const value = editor?.getAttributes("highlight").color || '#FF0000';

    const onChange = (color: ColorResult) => {
        editor?.chain().focus().setHighlight({ color: color.hex }).run();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className='h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80'
                >
                    <span className='text-xs'>A</span>
                    <div className='h-1 w-full' style={{ backgroundColor: value }} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-0'>
                <SketchPicker
                    color={value}
                    onChange={onChange}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
