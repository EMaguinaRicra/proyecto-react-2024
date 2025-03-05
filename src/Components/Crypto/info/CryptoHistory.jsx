/* eslint-disable react/prop-types */
import { parseFloatNumber } from "../../../helpers/numbers";
import dayjs from "dayjs";

const CryptoHistory = ({ history }) => {
  return (
    <>
      {history && (
        <div className="history">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ date, priceUsd, time }) => (
                <tr key={time}>
                  <td className="label">
                    {dayjs(date).format("ddd - DD/MM/YYYY - HH:mm")}
                  </td>
                  <td className="price">{parseFloatNumber(priceUsd, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CryptoHistory;
