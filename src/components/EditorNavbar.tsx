"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFilePdf } from 'react-icons/bs';
import { UserButton } from '@clerk/nextjs';

import {
    BoldIcon,
    FileIcon,
    FileJsonIcon,
    FilePenIcon,
    FilePlusIcon,
    FileTextIcon,
    GlobeIcon,
    ItalicIcon,
    PrinterIcon,
    Redo2Icon,
    RemoveFormattingIcon,
    StrikethroughIcon,
    TextIcon,
    TrashIcon,
    UnderlineIcon,
    Undo2Icon
} from 'lucide-react';

import { useEditorStore } from '@/store/useEditorStore';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from './ui/menubar';
import { DocumentInput } from './DocumentInput';
import { Avatars } from './Avatar';
import { Inbox } from './Indox';
import { Doc } from '../../convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { RemoveDialog } from './RemoveDialog';
import { RenameDialog } from './RenameDialog';


interface EditorNavBarProps {
    data: Doc<"documents">
}


export const EditorNavBar = ({ data }: EditorNavBarProps) => {

    const { editor } = useEditorStore();
    const router = useRouter();
    const mutation = useMutation(api.documents.createDocument);

    const onNewDocument = () => {
        mutation({
            title: "Untitled document",
            initialContent: ""
        })
            .then((id) => {
                router.push(`/document/${id}`);
                toast.success("New Document Created")
            })
            .catch(() => {
                toast.error("Something went wrong!")
            })
            ;
    }

    const insertTable = ({ rows, cols }: { rows: number, cols: number }) => {
        editor?.
            chain().
            focus().
            insertTable({ rows, cols, withHeaderRow: false })
            .run()
    };


    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    };

    const onSaveJSON = () => {
        if (!editor) return;

        const content = editor?.getJSON();
        const blob = new Blob([JSON.stringify(content)], {
            type: 'application/json'
        });

        onDownload(blob, `${data.title}.json`)
    };

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor?.getHTML();
        const blob = new Blob([JSON.stringify(content)], {
            type: 'text/html'
        });

        onDownload(blob, `${data.title}.html`)
    };

    const onSaveTEXT = () => {
        if (!editor) return;

        const content = editor?.getText();
        const blob = new Blob([JSON.stringify(content)], {
            type: 'text/plain'
        });

        onDownload(blob, `${data.title}.txt`)
    };




    return (
        <nav className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        alt='Logo'
                        width={35}
                        height={36}
                    />
                </Link>
                <div className='flex flex-col'>
                    <DocumentInput title={data.title} id={data._id} />
                    <div className='flex'>
                        <Menubar className='border-none shadow-none h-auto p-0 bg-transparent'>
                            {/* FILE TOOLS */}
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer'>
                                    File
                                </MenubarTrigger>
                                <MenubarContent className='print:hidden'>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <FileIcon className='size-4 mr-2' />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={onSaveJSON}>
                                                <FileJsonIcon className='size-4 mr-2' />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveHTML}>
                                                <GlobeIcon className='size-4 mr-2' />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={() => window.print()}>
                                                <BsFilePdf className='size-4 mr-2' />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveTEXT}>
                                                <FileTextIcon className='size-4 mr-2' />
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={onNewDocument}>
                                        <FilePlusIcon className='size-4 mr-2' />
                                        New Document
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <RenameDialog docId={data._id} initialTitle={data.title}>
                                        <MenubarItem
                                            onClick={(e) => e.stopPropagation()}
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            <FilePenIcon className='size-4 mr-2' />
                                            Rename
                                        </MenubarItem>
                                    </RenameDialog>
                                    <RemoveDialog docId={data._id}>
                                        <MenubarItem
                                            onClick={(e) => e.stopPropagation()}
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            <TrashIcon className='size-4 mr-2' />
                                            Remove
                                        </MenubarItem>
                                    </RemoveDialog>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className='size-4 mr-2' />
                                        Print <MenubarShortcut>⌘ P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            {/* EDIT TOOLS */}
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer'>
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                        <Undo2Icon className='size-4 mr-2' />
                                        Undo  <MenubarShortcut>⌘ Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                                        <Redo2Icon className='size-4 mr-2' />
                                        Redo  <MenubarShortcut>⌘ Y</MenubarShortcut>
                                    </MenubarItem>

                                </MenubarContent>
                            </MenubarMenu>
                            {/* INSERT TOOLS */}
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer'>
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            Table
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                                                1 x 1
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                                                2 x 2
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                                                3 x 3
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                                                4 x 4
                                            </MenubarItem>

                                        </MenubarSubContent>
                                    </MenubarSub>
                                </MenubarContent>

                            </MenubarMenu>
                            {/* FORMAT TOOLS */}
                            <MenubarMenu>
                                <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto cursor-pointer'>
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className='size-4 mr-2' />
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                                <BoldIcon className='size-4 mr-2' />
                                                Bold  <MenubarShortcut>⌘B</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                                <ItalicIcon className='size-4 mr-2' />
                                                Italic <MenubarShortcut>⌘I</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                                                <UnderlineIcon className='size-4 mr-2' />
                                                underline <MenubarShortcut>⌘U</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                                                <StrikethroughIcon className='size-4 mr-2' />
                                                Strinkthrough  &nbsp;&nbsp;<MenubarShortcut>⌘S</MenubarShortcut>
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                                        <RemoveFormattingIcon className='size-4 mr-2' />
                                        Clear formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>

            </div>
            <div className='flex gap-4 items-center pl-6'>
                <Inbox />
                <Avatars />
                <UserButton />
            </div>
        </nav>
    )
}