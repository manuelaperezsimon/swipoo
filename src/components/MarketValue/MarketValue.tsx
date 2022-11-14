import { CompleteCarInfo } from "../../interfaces/interfaceCar";
import MarketValueStyle from "./MarketValueStyled";
import { v4 as uuidv4 } from "uuid";

interface MarketValueProps {
  car: CompleteCarInfo;
}

const MarketValue = ({
  car: { period, value },
}: MarketValueProps): JSX.Element => {
  const key = uuidv4();
  const tableValuesOfDeprecation = [
    ["Value according to Hacienda (BOE-A-2017-15284)", `${value} €`],
  ];
  const years = new Date().getFullYear() - Number(period.slice(0, 4));

  for (let i = 1; i < years + 1; i++) {
    const valueWithPorcentOfDeprecation = (
      Number(value) *
      ((100 - i * 10) / 100)
    ).toFixed(2);
    tableValuesOfDeprecation.push([
      `${100 - i * 10}% of market value`,
      `${valueWithPorcentOfDeprecation} €`,
    ]);
  }

  return (
    <MarketValueStyle>
      <table className="table__container" data-testid="table">
        <thead>
          <tr>
            <th className="table__heading" colSpan={2}>
              Market Value
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            {tableValuesOfDeprecation.map((row) => {
              return (
                <tr>
                  <td key={key}>{row[0]}</td>
                  <td key={key}>{row[1]}</td>
                </tr>
              );
            })}
          </>
        </tbody>
      </table>
    </MarketValueStyle>
  );
};

export default MarketValue;
