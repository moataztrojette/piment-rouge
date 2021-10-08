import React, { useEffect, useState } from "react";
import axios from "axios";

const Topclient = () => {
  const [chiffreAFF, setCA] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/piements/turnover").then((ca) => {
      setCA(ca.data);
    });

    axios.get("http://localhost:4000/api/piements/total").then((to) => {
      setTotal(to.data);
    });
  }, []);

  return (
    <div className="col-lg-4 d-flex flex-column">
      <div className="row flex-grow">
        <div className="col-12 grid-margin stretch-card">
          <div className="card card-rounded">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper d-flex align-items-center justify-content-between py-2 ">
                      <div>
                        <h4 className="card-title card-title-dash">
                          Top Performer
                        </h4>
                      </div>
                      <div>
                      {total.map((total) => (
                        <div style={{color:"#DC143C",fontWeight:"bold"}}>{total} (DT) Total </div>
                      ))}
                      </div>
                    </div>
                  {chiffreAFF.map((cl) => (
                    <div className="mt-3">
                      <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                        <div className="d-flex">
                          <img
                            className="img-sm rounded-10"
                            src="https://www.targetfirst.com/wp-content/uploads/2016/02/article-client-heureux1.jpg"
                            alt="profile"
                          />
                          <div className="wrapper ms-3">
                            <p className="ms-1 mb-1 fw-bold">
                              {cl.client[0].nom}
                            </p>
                            <small className="text-muted mb-0">
                              {cl.client[0].numero}
                            </small>
                          </div>
                        </div>
                        <div className="text-muted text-small">
                          <p style={{ color: "#DC143C", fontWeight: "bold" }}>
                            {" "}
                            turnover {cl.count} DT
                          </p>{" "}
                          :
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topclient;
