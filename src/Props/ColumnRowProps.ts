export interface ColumnRowProps {
	mainAxisAlignment?:
		| "center"
		| "start"
		| "end"
		| "space-around"
		| "space-between"
		| "space-evenly";
	crossAxisAlignment?: "center" | "start" | "end" | "stretch";
	height?: string | number;
	width?: string | number;
	padding?: string;
	margin?: string;
	flex?: number;
}
