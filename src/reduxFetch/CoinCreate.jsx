import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer4";

const CoinCreate = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.slice4);

  useEffect(() => {
    dispatch(FetchData(20));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div>coinCreate</div>

      <div>
        {data.map((item) => {
          //{id:string,name:string}[]
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image}/>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoinCreate;
