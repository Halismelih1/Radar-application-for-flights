import { useEffect } from "react";
import { detailOpt } from "../helpers/Constant";
import { useState } from "react";
import axios from "axios";

const SideDetail = ({ detailId, closeDetail, setShowDetail }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail(null)
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
          detailOpt
        );
        setDetail(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };

    fetchDetail();
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <span onClick={() => closeDetail()}>&#x2716;</span>
        <h1>&#x2708; Detail </h1>
        <h3>{detailId}</h3>
        {!detail ? (
          <p className="load">Yükleniyor...</p>
        ) : (
          <>
            <h2>{detail.aircraft.model?.text}</h2>
            <h2>{detail.aircraft.model?.code}</h2>
            <p>Kuyruk No: {detail.aircraft?.registration}</p>
            <img src={detail.aircraft?.images?.large[0]?.src} />
            <p>Şirket: {detail.airline?.short}</p>
            <p>
              Kalkış:{' '}
              <a href={detail.airport.origin?.website}>
                {detail.airport.origin?.name}
              </a>
            </p>
            <p>
              Hedef:{' '}
              <a href={detail.airport.destination?.website}>
                {detail.airport.destination?.name}
              </a>
            </p>
            <p>
              Durum{' '}
              <span
                className="status"
                style={{ background: detail.status.icon }}
              >
                {detail.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
