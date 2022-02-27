import { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Code from "@tiptap/extension-code";
import Highlight from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";

const Home: FC = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextStyle,
			Code,
			Highlight.configure({ multicolor: true }),
			Link,
			Color,
		],
		content: "<p>Hello World! 🌎️</p>",
	});
	return (
		<EditorContent editor={editor} />
	);
};


export default Home;
