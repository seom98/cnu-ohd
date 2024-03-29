import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Pages.css"

const SignUp = () => {
  const [title, setTitle] = useState("");
  const [dDay, setDDay] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, dDay })
    });
    const data = await response.json();

    if (response.ok) {
      const uuidId = data
      navigate(`/rooms/${uuidId}`);
    }
  };


  return (
    <>
      <h1 style={{marginTop: "100px"}}>방 생성하기</h1>
      <div>
        <h5 style={{marginBottom: "100px"}}>방이름과 d-day를 설정해주세요</h5>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title" style={{marginRight: "200px"}}>내 방 이름</label>
          <br />
          <input
            className="titleInput"
            type="text"
            id="title"
            placeholder="방 이름을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <div style={{marginTop: "50px"}}></div>

          <label htmlFor="dDay" style={{marginRight: "218px"}}>D-day</label>
          <br />
          <input
            className="dDayInput"
            type="date"
            id="dDay"
            value={dDay}
            onChange={(e) => setDDay(e.target.value)}
          />
          <br />

          <button className="button1" type="submit" value="생성하기"> 생성하기 </button>

        </form>
      </div>
    </>
  );
};

export default SignUp;