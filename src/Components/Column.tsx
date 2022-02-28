import styled from "styled-components";
import { ColumnRowProps } from "../Props/ColumnRowProps";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex = 1 }: ColumnRowProps) => flex};
  justify-content: ${({ mainAxisAlignment = "center" }: ColumnRowProps) =>
          mainAxisAlignment};
  align-items: ${({ crossAxisAlignment = "center" }: ColumnRowProps) =>
          crossAxisAlignment};
  height: ${({ height = "100%" }: ColumnRowProps) =>
          typeof height === "number" ? height + "px" : height};
  width: ${({ width = "100%" }: ColumnRowProps) =>
          typeof width === "number" ? width + "px" : width};
  padding: ${({ padding }: ColumnRowProps) => padding};
  margin: ${({ margin }: ColumnRowProps) => margin};
`;


export default Column;
