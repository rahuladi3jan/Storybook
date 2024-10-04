import React, { ReactElement, useState } from "react";
import { Type } from "./propTypes";
import "./styles.scss";

export interface IMudraTableProps {
  type?: Type;
  headers?: Array<string | ReactElement>;
  tableRows?: Array<Array<string | ReactElement>>;
  className?: string;
  tableWidth?: string;
}

const defaultProps = {
  type: Type.Tabular,
};

function computeClassName(props: IMudraTableProps): string {
  const { className, type } = props;
  const classNames: string[] = ["mudra-table"];
  if (className) classNames.push(className);
  if (type) classNames.push(`type-${type.toLowerCase()}`);
  else classNames.push(`type-${defaultProps.type.toLowerCase()}`);
  return classNames.join(" ");
}

// eslint-disable-next-line react/display-name
const MudraTable: React.FunctionComponent<IMudraTableProps> = (props) => {
  const {
    className,
    headers,
    tableRows,
    type = defaultProps.type,
    tableWidth,
  } = props;

  const [selected, setSelected] = useState<string>(JSON.stringify([]));

  const computedClassName: string = React.useMemo<string>(() => {
    return computeClassName(props);
  }, [className, headers, tableRows, type, tableWidth]);

  const renderHeaders = () => {
    return (
      <thead className="mudra-table-headers" data-testid="mudra_table_head">
        <tr className="mudra-table-header-row">
          {headers &&
            headers.map((e, i) => {
              return (
                <th
                  key={`mt_h_${e}_${i}`}
                  className="mudra-table-header-row-cell"
                >
                  {e}
                </th>
              );
            })}
        </tr>
      </thead>
    );
  };

  const isSelected = (index) => {
    const existingArray = [...JSON.parse(selected)];
    const foundAt = existingArray.indexOf(index);
    if (foundAt !== -1) return true;
    else return false;
  };

  const handleClick = (index) => {
    if (type === Type.Tabular) {
      const existingArray = [...JSON.parse(selected)];
      const foundAt = existingArray.indexOf(index);
      if (foundAt !== -1) {
        existingArray.splice(foundAt, 1);
        setSelected(JSON.stringify(existingArray));
      } else {
        const existingArray = [...JSON.parse(selected)];
        setSelected(JSON.stringify([...existingArray, index]));
      }
    }
  };

  const renderTableRows = () => {
    return (
      <tbody className="mudra-table-rows" data-testid="mudra_table_body">
        {tableRows &&
          tableRows.map((row, i) => {
            return (
              <tr
                key={`mt_r_${row}_${i}`}
                className={
                  "mudra-table-row" +
                  (type === Type.Tabular && isSelected(i) ? " selected" : "")
                }
                onClick={() => handleClick(i)}
              >
                {row.map((cell, index) => {
                  return (
                    <td
                      key={`mt_r_value_${cell}_${index}`}
                      className="mudra-table-row-cell"
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    );
  };

  return (
    <table
      className={computedClassName}
      style={{ width: `${tableWidth && tableWidth}px` }}
      data-testid="mudra_table"
    >
      {headers && renderHeaders()}
      {tableRows && renderTableRows()}
    </table>
  );
};

export default MudraTable;
