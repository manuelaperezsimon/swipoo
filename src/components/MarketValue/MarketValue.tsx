import { CompleteCarInfo } from "../../interfaces/interfaceCar";
import MarketValueStyle from "./MarketValueStyled";

interface MarketValueProps {
  car: CompleteCarInfo;
}

const MarketValue = ({
  car: { period, value },
}: MarketValueProps): JSX.Element => {
  const tableValues = [["Value according to Hacienda", `${value} €`]];
  const years = new Date().getFullYear() - Number(period.slice(0, 4));

  for (let i = 1; i < years + 1; i++) {
    const newValue = (Number(value) * (100 - i * 10)) / 100;
    tableValues.push([`${100 - i * 10}% of market value`, `${newValue} €`]);
  }

  return (
    <MarketValueStyle>
      <table className="table__container" data-testid="table">
        <thead>
          <tr>
            <th className="table__heading">Market Value</th>
          </tr>
        </thead>
        <tbody>
          <>
            {tableValues.map((row) => {
              return (
                <tr>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
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
