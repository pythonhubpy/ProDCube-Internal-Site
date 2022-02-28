import { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import styled from "styled-components";

const Editor: FC = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextStyle,
			Highlight.configure({ multicolor: true }),
			Link,
			Color,
		],
		content: "<p>Hello World! 🌎️</p>",
	});
	return (
		<StyledEditor editor={editor} />
	);
};


export default Editor;


const StyledEditor = styled(EditorContent)`
  width: 80%;
  outline: none;
  padding-top: 20px;
  margin-top: 20px;
  border: 2px solid #223239;
  border-radius: 12px;
  min-height: 400px;

  p {
    margin: 0 20px;
  }

`;

