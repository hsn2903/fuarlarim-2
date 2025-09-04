"use client";

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Code, Heading, Italic, Strikethrough } from "lucide-react";

export function TiptapEditor({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: string;
}) {
  const [content, setContent] = useState(defaultValue || "");

  const editor = useEditor({
    extensions: [StarterKit],
    content: content || "",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div>
      <input type="hidden" name={name} defaultValue={content} />
      <div className="pb-2 mb-4 flex items-center space-x-2">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`flex items-center p-1 rounded-sm ${
            editor?.isActive("bold")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          title="Kalın (Ctrl+B)"
        >
          <Bold size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`flex items-center p-1 rounded-sm ${
            editor?.isActive("italic")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          title="Eğik (Ctrl+İ)"
        >
          <Italic size={16} />
        </button>

        {/* <button
          type="button"
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className={`flex items-center p-1 rounded-sm ${editor?.isActive("underline") ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          title="Altı Çizili (Ctrl+U)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4v6a6 6 0 0 0 12 0V4" />
            <line x1="4" y1="20" x2="20" y2="20" />
          </svg>
          <span className="ml-2 hidden md:inline">Altı Çizili</span>
        </button> */}

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className={`flex items-center p-1 rounded-sm ${
            editor?.isActive("strike")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          title="Üstü Çizili"
        >
          <Strikethrough size={16} />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`flex items-center p-1 rounded-sm ${
              editor?.isActive("heading", { level: 1 })
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            title="Başlık 1"
          >
            <Heading size={16} />
          </button>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
            className={`flex items-center p-1 rounded-sm ${
              editor?.isActive("codeBlock")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            title="Kod Bloğu"
          >
            <Code size={16} />
          </button>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[300px] border p-4 rounded-md"
      />
    </div>
  );
}
