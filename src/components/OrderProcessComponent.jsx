import axios from "axios";
import React from "react";

export default function OrderProcessComponent() {
  const [result1, setResult1] = React.useState({
    result1: 0,
    result2: 0,
    result3: 0,
    result4: 0,
    result5: 0,
    result6: 0,
    result7: 0,
    result8: 0,
    result9: 0,
    result10: 0,
    result11: 0,
    result12: 0,
  });

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/order/getOrderProcessesResults")
      .then((response) => {
        setResult1({
          result1: response.data.result1,
          result2: response.data.result2,
          result3: response.data.result3,
          result4: response.data.result4,
          result5: response.data.result5,
          result6: response.data.result6,
          result7: response.data.result7,
          result8: response.data.result8,
          result9: response.data.result9,
          result10: response.data.result10,
          result11: response.data.result11,
          result12: response.data.result12,
        });
      });
  }, []);

  return (
    <>
      <p style={{ textAlign: "center", color: "#018CD4" }}>
        Üç siparişteki malların toplam tutarının çıktısı:
      </p>

      <p style={{ textAlign: "center" }}>
        1000 nolu sipariş için : {result1.result1} TL
      </p>

      <p style={{ textAlign: "center" }}>
        1001 nolu sipariş için : {result1.result2} TL
      </p>

      <p style={{ textAlign: "center" }}>
        1002 nolu sipariş için : {result1.result3} TL
      </p>

      <p style={{ textAlign: "center", color: "#018CD4" }}>
        Üç siparişteki bütün malların ortalama fiyatı:{" "}
        <span style={{ color: "#c2c7d0" }}>{result1.result4} TL</span>
      </p>
      <p style={{ textAlign: "center", color: "#018CD4" }}>
        Üç siparişteki bütün malların tek tek mal bazlı ortalama:
      </p>

      <p style={{ textAlign: "center" }}>
        2000 nolu mal için : {result1.result5} TL
      </p>

      <p style={{ textAlign: "center" }}>
        2001 nolu mal için : {result1.result6} TL
      </p>

      <p style={{ textAlign: "center" }}>
        2002 nolu mal için : {result1.result7} TL
      </p>

      <p style={{ textAlign: "center" }}>
        2003 nolu mal için : {result1.result8} TL
      </p>

      <p style={{ textAlign: "center" }}>
        2004 nolu mal için : {result1.result9} TL
      </p>

      <p style={{ textAlign: "center" }}>
        2005 nolu mal için : {result1.result10} TL
      </p>

      <p style={{ textAlign: "center" }}>
        2006 nolu mal için : {result1.result11} TL
      </p>

      <p style={{ textAlign: "center", color: "#018CD4" }}>
        Tek tek mal bazlı, malların hangi siparişlerde kaç adet olduğu:
      </p>

      <table className="table" style={{ maxHeight: "300px", width: "100%" }}>
        {Object.keys(result1.result12).map((key) =>
          Object.keys(result1.result12[key]).map((key2) => (
            <tr key={key} >
              <td>{key}</td>
              <td>{key2}</td>
              <td>{result1.result12[key][key2]}</td>
            </tr>
          ))
        )}
      </table>
    </>
  );
}
