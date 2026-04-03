"use client";

import { useRef, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

interface CodeOrTextProps {
  type: "code" | "text";
  content?: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (content: string) => void;
  gestureSignal?: "copy" | "paste";
  roomId: string;
}

export const CodeOrText = ({
  type,
  content = "",
  onChange,
  gestureSignal,
  setContent,
  roomId,
}: CodeOrTextProps) => {
  const editableRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editableRef.current && editableRef.current.innerText !== content) {
      editableRef.current.innerText = content;
    }
  }, [content]);

  useEffect(() => {
    if (!gestureSignal) return;
    if (gestureSignal === "copy") {
      const text = editableRef.current?.innerText || "";
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard ✨");
    } else if (gestureSignal === "paste") {
      (async () => {
        try {
          const res = await fetch(`/api/room/${roomId}/content`);
          if (!res.ok) throw new Error("Room not found");

          const data = await res.json();
          const newText = data[type];

          setContent(newText);
          if (editableRef.current) {
            editableRef.current.innerText = newText;
          }
          onChange?.(newText);

          toast.success("Pasted from clipboard 🚀");
        } catch (error) {
          console.error("Paste failed:", error);
        }
      })();
    }
  }, [gestureSignal]);

  const handleInput = async (e: React.FormEvent<HTMLDivElement>) => {
    const content = e.currentTarget.innerText?.trim() || "";

    if (!content) return;

    try {
      const res = await fetch("/api/update-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          ...(type === "code" ? { code: content } : { text: content }),
        }),
      });
      const data = await res.json();
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  const codePlaceholder = `function greetUser(name) {\n  console.log(\`Hello, \${name}! Welcome to SnapPaste.\`);\n  return \`Nice to meet you, \${name}!\`;\n}\n\nconst message = greetUser("Developer");\nconsole.log(message);`;

  const textPlaceholder = `Welcome to SnapPaste!\n\nThis is a sample text that demonstrates how text content is displayed in our application. You can easily copy and share this content with your friends or colleagues.\n\nKey features:\n• Instant sharing across devices\n• Clean, readable formatting\n• One-click copy functionality\n• Secure and private sharing options\n\nStart sharing your content seamlessly!`;

  const placeholder = type === "code" ? codePlaceholder : textPlaceholder;

  return (
    <div className="w-full h-full bg-white relative">
      {type === "code" ? (
        <>
          <div
            ref={editableRef}
            contentEditable
            onInput={handleInput}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            suppressContentEditableWarning
            className="absolute inset-0 p-6 font-mono text-sm leading-[1.5] outline-none bg-transparent whitespace-pre-wrap break-words overflow-auto z-10"
            data-placeholder={placeholder}
            style={{ caretColor: "#000" }}
          />
          {!isEditing && (
            <SyntaxHighlighter
              language="javascript"
              style={{
                ...oneDark,
                'pre[class*="language-"]': {
                  ...oneDark['pre[class*="language-"]'],
                  background: "white",
                },
                'code[class*="language-"]': {
                  ...oneDark['code[class*="language-"]'],
                  background: "white",
                },
              }}
              customStyle={{
                margin: 0,
                padding: "24px",
                height: "100%",
                width: "100%",
                fontSize: "14px",
                lineHeight: "1.5",
                overflow: "auto",
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              showLineNumbers={false}
              wrapLines={true}
              wrapLongLines={true}
            >
              {content || placeholder}
            </SyntaxHighlighter>
          )}
        </>
      ) : (
        <div
          ref={editableRef}
          contentEditable
          onInput={handleInput}
          suppressContentEditableWarning
          className="w-full h-full p-6 font-sans text-sm leading-relaxed outline-none bg-white whitespace-pre-wrap break-words overflow-auto"
          data-placeholder={placeholder}
          style={{ caretColor: "#000" }}
        />
      )}
    </div>
  );
};
