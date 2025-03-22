import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Link as LinkIcon,
} from "lucide-react";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
    ],
    content: "<p></p>",
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="border rounded-xl shadow-sm p-4 w-full">
      <div className="flex flex-wrap gap-2 mb-4 border-b pb-3 sticky top-0 bg-white z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
        >
          <Bold size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
        >
          <Italic size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "bg-gray-200" : ""}
        >
          <UnderlineIcon size={16} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""
          }
        >
          <Heading1 size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""
          }
        >
          <Heading2 size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "bg-gray-200" : ""
          }
        >
          <Heading3 size={16} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-200" : ""}
        >
          <List size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-gray-200" : ""}
        >
          <ListOrdered size={16} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const url = window.prompt("Enter link URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
        >
          <LinkIcon size={16} />
        </Button>

        <Button variant="ghost" size="icon" onClick={addImage}>
          <ImageIcon size={16} />
        </Button>
      </div>

      <EditorContent
        editor={editor}
        className="prose max-w-full min-h-[150px] focus:outline-none"
      />
    </div>
  );
};

export default TiptapEditor;
